import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageMeta
        title="Privacy Policy | AI Vized - Data Protection & GDPR Compliance"
        description="Learn how AI Vized protects your data. Our privacy policy covers GDPR compliance, data collection practices, and your rights as a UK business using our AI employee services."
        keywords="AI Vized privacy policy, GDPR compliance, UK data protection, AI chatbot privacy, business data security, customer data protection"
        canonical="https://aivized.com/privacy-policy"
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
              Privacy Policy
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AI Vized Ltd ("AI Vized," "we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered customer service platform and related services. We are registered as a data controller with the Information Commissioner's Office (ICO) in the United Kingdom.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information in several ways:
                </p>
                <h3 className="text-xl font-semibold mb-3 mt-6">Information You Provide Directly:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Account registration information (name, email address, phone number, business name)</li>
                  <li>Business information for AI setup (website URL, business description, FAQs, product/service details)</li>
                  <li>Communications and correspondence with our support team</li>
                  <li>Feedback and survey responses</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6">Information Collected Automatically:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Usage data and analytics (pages visited, features used, session duration)</li>
                  <li>Device information (browser type, operating system, IP address)</li>
                  <li>AI conversation logs and analytics from your chatbot</li>
                  <li>Performance metrics and error logs</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6">Information from Third Parties:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Payment information processed through Paddle (our Merchant of Record)</li>
                  <li>Authentication data if you sign in using third-party services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">3. Legal Basis for Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under UK GDPR, we process your personal data based on the following legal grounds:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Contract:</strong> Processing necessary to perform our contract with you (providing our services)</li>
                  <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests (improving services, fraud prevention, marketing)</li>
                  <li><strong>Legal Obligation:</strong> Processing necessary to comply with legal requirements</li>
                  <li><strong>Consent:</strong> Where you have given explicit consent (e.g., marketing communications)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">4. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide, maintain, and improve our AI chatbot services</li>
                  <li>Set up, configure, and optimise your AI assistant</li>
                  <li>Process transactions and manage your subscription</li>
                  <li>Send technical notices, updates, and administrative messages</li>
                  <li>Respond to your comments, questions, and support requests</li>
                  <li>Monitor and analyse trends, usage, and service performance</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Paddle:</strong> Our Merchant of Record for payment processing. Paddle acts as a data controller for payment transactions.</li>
                  <li><strong>Service Providers:</strong> Third-party providers who perform services on our behalf (hosting, analytics, customer support tools). These providers are contractually bound to protect your information.</li>
                  <li><strong>AI Model Providers:</strong> We use third-party AI services to power our chatbots. Conversation data may be processed by these providers under strict data protection agreements.</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">6. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your data may be transferred to and processed in countries outside the UK. When we transfer data internationally, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs) approved by the UK ICO, or transfers to countries with an adequacy decision. Our service providers are required to maintain equivalent levels of data protection.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">7. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organisational measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                  <li>Secure, access-controlled hosting infrastructure</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  While we strive to protect your information, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">8. Your Rights (UK GDPR)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under UK data protection law, you have the following rights:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                  <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                  <li><strong>Right to Lodge a Complaint:</strong> Complain to the ICO if you believe your rights have been violated</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise your rights, contact us at privacy@aivized.com. We will respond within one month.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">9. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You can manage your cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">10. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We retain your personal information for as long as necessary to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide our services to you</li>
                  <li>Comply with legal, accounting, or reporting requirements</li>
                  <li>Resolve disputes and enforce our agreements</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Typically, we retain account data for the duration of your subscription plus 3 years. AI conversation logs are retained for 12 months unless you request earlier deletion. Billing records are retained for 7 years as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">11. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">12. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through our platform. We encourage you to review this policy periodically. Your continued use of our services after changes take effect constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">13. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, wish to exercise your rights, or have concerns about our data practices, please contact us:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>AI Vized Ltd</strong><br />
                  <strong>Data Protection Officer:</strong> privacy@aivized.com<br />
                  <strong>General Enquiries:</strong> contact@aivized.com<br />
                  <strong>Address:</strong> United Kingdom
                </p>
                <p className="text-muted-foreground mt-4">
                  You also have the right to lodge a complaint with the Information Commissioner's Office (ICO):{" "}
                  <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ico.org.uk</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">14. Payment Processor Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payments are processed by Paddle.com Market Limited, who acts as the Merchant of Record for all transactions. Paddle collects and processes payment information in accordance with their own privacy policy, available at{" "}
                  <a href="https://paddle.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">paddle.com/privacy</a>. 
                  We recommend reviewing their policy to understand how your payment data is handled.
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

export default PrivacyPolicy;
