import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://www.aivized.com",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CheckoutRequest {
  planName: string;
  priceAmount: number;
  customerEmail?: string;
  customerName?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { planName, priceAmount, customerEmail, customerName }: CheckoutRequest = await req.json();

    const merchantCode = Deno.env.get("TWOCHECKOUT_MERCHANT_CODE");
    const secretKey = Deno.env.get("TWOCHECKOUT_SECRET_KEY");

    if (!merchantCode || !secretKey) {
      console.error("Missing 2Checkout credentials");
      throw new Error("Payment configuration error");
    }

    console.log(`Creating 2Checkout session for plan: ${planName}, amount: ${priceAmount}`);

    // Generate a unique order reference
    const orderRef = `ORDER-${Date.now()}-${Math.random().toString(36).substring(7)}`;

    // For 2Checkout ConvertPlus (hosted checkout), we create a signature
    // and return the checkout URL with parameters
    
    // Build the signature source string
    const currency = "GBP";
    const signatureSource = `${merchantCode}${orderRef}${priceAmount.toFixed(2)}${currency}`;
    
    // Create HMAC-SHA256 signature
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secretKey);
    const messageData = encoder.encode(signatureSource);
    
    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    
    const signature = await crypto.subtle.sign("HMAC", cryptoKey, messageData);
    const signatureHex = Array.from(new Uint8Array(signature))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // Build the 2Checkout ConvertPlus checkout URL
    const checkoutParams = new URLSearchParams({
      merchant: merchantCode,
      "dynamic": "1",
      "prod": planName,
      "price": priceAmount.toFixed(2),
      "currency": currency,
      "order-ext-ref": orderRef,
      "type": "PRODUCT",
      "qty": "1",
      "tangible": "0",
      "return-url": `${req.headers.get("origin") || "https://aivized.com"}/payment-success`,
      "return-type": "redirect",
      "signature": signatureHex,
      "recurring-name": `${planName} Monthly Subscription`,
      "recurring-price": priceAmount.toFixed(2),
      "recurring-type": "month",
      "recurring-interval": "1",
    });

    if (customerEmail) {
      checkoutParams.set("email", customerEmail);
    }
    if (customerName) {
      checkoutParams.set("name", customerName);
    }

    // 2Checkout ConvertPlus checkout URL
    const checkoutUrl = `https://secure.2checkout.com/checkout/buy?${checkoutParams.toString()}`;

    console.log("Generated checkout URL successfully");

    return new Response(
      JSON.stringify({ 
        checkoutUrl,
        orderRef,
        success: true 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error creating 2Checkout session:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
