import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageMeta
        title="Terms of Service | AI Vized - AI Employee Rental Agreement"
        description="Read AI Vized's terms of service. Understand your rights and obligations when renting AI employees for your UK business, including subscription terms and service guarantees."
        keywords="AI Vized terms of service, AI rental agreement, chatbot terms, UK business AI terms, AI employee subscription, service agreement"
        canonical="https://aivized.com/terms-of-service"
      />
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
                  By accessing or using AI Vized's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services. These Terms constitute a legally binding agreement between you and AI Vized Ltd, a company registered in England and Wales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI Vized provides fully managed AI-powered customer service automation solutions for UK businesses. Our service includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>AI chatbot installation and configuration on your website</li>
                  <li>24/7 monitoring, maintenance, and support</li>
                  <li>Continuous optimisation and updates</li>
                  <li>Lead capture and customer engagement analytics</li>
                  <li>Integration with your existing business systems</li>
                </ul>
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
                  <li>Providing accurate business information for setup purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">4. Subscription and Payments</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our services are provided on a subscription basis and processed through Paddle.com Market Limited ("Paddle"), our Merchant of Record:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Subscriptions are billed monthly in GBP (£) unless otherwise agreed</li>
                  <li>All payments are processed securely by Paddle, who acts as the Merchant of Record</li>
                  <li>VAT will be added where applicable based on your location</li>
                  <li>Payment is due at the beginning of each billing cycle</li>
                  <li>We reserve the right to change pricing with 30 days' written notice</li>
                  <li>14-day money-back guarantee applies to first-time subscribers (see Refund Policy)</li>
                  <li>Paddle's terms of service also apply to payment transactions</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  By subscribing, you authorise Paddle to charge your chosen payment method on a recurring basis until you cancel your subscription.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">5. Free Trial</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may offer a free trial period for new subscribers. During the trial, you will have full access to the selected plan's features. At the end of the trial period, your subscription will automatically convert to a paid subscription unless you cancel before the trial ends. You will be notified before any charges are made.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">6. Cancellation and Refunds</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may cancel your subscription at any time through your account dashboard or by contacting our support team:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Cancellations take effect at the end of your current billing period</li>
                  <li>You will retain access to the service until the end of your paid period</li>
                  <li>First-time subscribers are eligible for a 14-day money-back guarantee</li>
                  <li>Refund requests should be made through our support team or via Paddle</li>
                  <li>Please see our <Link to="/refund-policy" className="text-primary hover:underline">Refund Policy</Link> for full details</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">7. Acceptable Use</h2>
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
                  <li>Misrepresent your identity or affiliation with any person or entity</li>
                  <li>Use the AI in ways that could harm your customers or third parties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">8. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content, features, and functionality of our services are owned by AI Vized and protected by UK and international copyright, trademark, and other intellectual property laws.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>You may not reproduce, distribute, or create derivative works without our express written consent</li>
                  <li>You retain ownership of your business data and content input into our systems</li>
                  <li>We may use anonymised, aggregated data to improve our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">9. Data and Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of our services is also governed by our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>. You retain ownership of any data you input into our systems. We process your data in accordance with UK GDPR and our data protection commitments. Our payment processor Paddle may collect additional information necessary for payment processing as outlined in their privacy policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">10. Service Level and Availability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We strive to maintain 99.9% uptime for our services:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>We do not guarantee uninterrupted access and may suspend services for maintenance, updates, or security reasons</li>
                  <li>Scheduled maintenance will be communicated in advance where possible</li>
                  <li>Business plan subscribers receive enhanced SLA guarantees as specified in their agreement</li>
                  <li>We will use reasonable efforts to restore service promptly in case of outages</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">11. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>AI Vized shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services</li>
                  <li>Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim</li>
                  <li>We are not liable for any loss of business, revenue, or profits</li>
                  <li>We are not liable for the actions or responses of the AI system in customer interactions</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">12. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless AI Vized, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services, your violation of these Terms, or your violation of any rights of a third party.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">13. Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Either party may terminate the subscription:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>You may cancel at any time through your account or by contacting support</li>
                  <li>We may terminate or suspend your account for violation of these Terms</li>
                  <li>Upon termination, your access to the service will cease</li>
                  <li>We will retain your data for 30 days after termination, after which it may be deleted</li>
                  <li>You may request an export of your data before termination takes effect</li>
                  <li>Sections relating to intellectual property, liability, indemnification, and governing law shall survive termination</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">14. Governing Law and Disputes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales. We encourage you to contact us first to resolve any disputes amicably before pursuing legal action.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">15. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will provide notice of significant changes via email or through our platform at least 30 days before they take effect. Continued use of our services after such modifications constitutes acceptance of the updated Terms. If you do not agree to the new Terms, you may cancel your subscription.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">16. Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">17. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>AI Vized Ltd</strong><br />
                  <strong>Email:</strong> legal@aivized.com<br />
                  <strong>Support:</strong> support@aivized.com<br />
                  <strong>Address:</strong> United Kingdom
                </p>
                <p className="text-muted-foreground mt-4">
                  For payment-related enquiries, you may also contact Paddle at{" "}
                  <a href="https://paddle.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">paddle.com</a>
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
