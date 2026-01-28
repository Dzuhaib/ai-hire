import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, MessageCircle, X, Clock, Loader2, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MagneticButton } from "./MagneticButton";
import { Badge } from "@/components/ui/badge";

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: number;
  onSelectOnlinePayment: () => void;
  onSelectWhatsApp: () => void;
  isLoading: boolean;
}

export const PaymentMethodModal = ({
  isOpen,
  onClose,
  planName,
  planPrice,
  onSelectOnlinePayment,
  onSelectWhatsApp,
  isLoading,
}: PaymentMethodModalProps) => {
  const [selectedMethod, setSelectedMethod] = useState<"online" | "whatsapp">("whatsapp");

  const handleContinue = () => {
    if (selectedMethod === "online") {
      onSelectOnlinePayment();
    } else {
      onSelectWhatsApp();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif">Choose Payment Method</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Select how you'd like to pay for <span className="font-semibold text-foreground">{planName}</span> at <span className="font-semibold text-primary">£{planPrice}/month</span>
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          <RadioGroup
            value={selectedMethod}
            onValueChange={(value) => setSelectedMethod(value as "online" | "whatsapp")}
            className="space-y-4"
          >
            {/* Online Payment Option - Coming Soon */}
            <div className="relative">
              <Label
                htmlFor="online"
                className={`flex items-start gap-4 p-4 rounded-xl border cursor-not-allowed opacity-60 bg-secondary/30 border-border/50`}
              >
                <RadioGroupItem value="online" id="online" disabled className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CreditCard className="w-5 h-5 text-muted-foreground" />
                    <span className="font-semibold text-muted-foreground">Online Payment</span>
                    <Badge variant="outline" className="text-xs bg-yellow-500/10 text-yellow-500 border-yellow-500/30">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pay securely with credit/debit card (Available soon)
                  </p>
                </div>
              </Label>
            </div>

            {/* WhatsApp Payment Option */}
            <div className="relative">
              <Label
                htmlFor="whatsapp"
                className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedMethod === "whatsapp"
                    ? "border-primary bg-primary/5"
                    : "border-border/50 hover:border-primary/30 hover:bg-secondary/30"
                }`}
              >
                <RadioGroupItem value="whatsapp" id="whatsapp" className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    <span className="font-semibold">Pay through WhatsApp</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Contact us on WhatsApp to complete your payment. Your subscription will be activated once payment is confirmed.
                  </p>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-3">
          <MagneticButton
            onClick={handleContinue}
            disabled={isLoading || selectedMethod === "online"}
            className="w-full py-4 rounded-xl font-semibold text-sm text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </span>
            ) : selectedMethod === "whatsapp" ? (
              <span className="flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Continue with WhatsApp
              </span>
            ) : (
              "Continue"
            )}
          </MagneticButton>
          <button
            onClick={onClose}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Cancel
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
