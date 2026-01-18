import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-8">
              Terms of Service
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using aivized's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  aivized provides AI-powered customer service automation solutions for UK businesses. Our platform includes chatbot services, analytics, and integration capabilities designed to enhance your customer engagement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To access our services, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorised use</li>
                  <li>Ensuring your account information is accurate and current</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">4. Subscription and Payments</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our services are provided on a subscription basis:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Subscriptions are billed monthly in GBP (£)</li>
                  <li>Payment is due at the beginning of each billing cycle</li>
                  <li>All fees are non-refundable except as specified in our refund policy</li>
                  <li>We reserve the right to change pricing with 30 days' notice</li>
                  <li>14-day money-back guarantee applies to first-time subscribers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">5. Acceptable Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to use our services to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit harmful, offensive, or illegal content</li>
                  <li>Attempt to gain unauthorised access to our systems</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Use the service for spam or unsolicited communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality of our services are owned by aivized and protected by UK and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">7. Data and Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of our services is also governed by our Privacy Policy. You retain ownership of any data you input into our systems. We process your data in accordance with UK GDPR and our data protection commitments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">8. Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to maintain 99.9% uptime for our services. However, we do not guarantee uninterrupted access and may suspend services for maintenance, updates, or security reasons. Business plan subscribers receive SLA guarantees as specified in their agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, aivized shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">10. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the subscription at any time. Upon termination, your access to the service will cease, and we may delete your data after a reasonable retention period. Sections relating to intellectual property, liability, and governing law shall survive termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will provide notice of significant changes via email or through our platform. Continued use of our services after such modifications constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Email:</strong> legal@aivized.com<br />
                  <strong>Address:</strong> aivized, United Kingdom
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
