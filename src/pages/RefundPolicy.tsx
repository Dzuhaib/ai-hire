import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Refund Policy | AIVized Managed AI Chatbot Service UK</title>
        <meta name="description" content="AIVized 14-day money-back guarantee for managed AI chatbot service. Fair refund terms for UK small business. Affordable AI chatbot from £29/month." />
        <meta name="keywords" content="AIVized refund policy, managed AI chatbot service, AI chatbot for small business UK, affordable AI chatbot refund, money-back guarantee UK" />
        <link rel="canonical" href="https://www.aivized.com/refund-policy" />
        <meta property="og:url" content="https://www.aivized.com/refund-policy" />
        <meta property="og:title" content="Refund Policy | AIVized Managed AI Chatbot Service UK" />
        <meta property="og:description" content="AIVized 14-day money-back guarantee for managed AI chatbot service. Fair refund terms for UK small business." />
      </Helmet>
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
              Refund Policy
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">1. Our Commitment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At AIVized, we are confident in the value our AI-powered customer service solutions provide to businesses. We want you to be completely satisfied with our service, which is why we offer a fair and transparent refund policy. Your satisfaction is our priority.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">2. 14-Day Money-Back Guarantee</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We offer a 14-day money-back guarantee to all first-time subscribers:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>If you are not satisfied with our service within the first 14 days of your initial subscription, you may request a full refund</li>
                  <li>The 14-day period begins from the date your subscription is activated</li>
                  <li>This guarantee applies to your first subscription with AIVized only</li>
                  <li>No questions asked – simply contact our support team to request your refund</li>
                  <li>Refunds will be processed within 5-10 business days</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">3. Subscription Cancellation</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may cancel your subscription at any time:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>How to Cancel:</strong> Through your account dashboard or by contacting support@aivized.com</li>
                  <li><strong>Effective Date:</strong> Cancellations take effect at the end of your current billing period</li>
                  <li><strong>Continued Access:</strong> You will retain full access to the service until your paid period ends</li>
                  <li><strong>No Automatic Refund:</strong> Cancellation does not automatically entitle you to a refund for the current billing period (except within the 14-day guarantee period)</li>
                  <li><strong>Data Retention:</strong> Your data will be retained for 30 days after cancellation, allowing you to reactivate if desired</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">4. Refund Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beyond the 14-day guarantee, refunds may be considered in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Service Unavailability:</strong> Extended service outages (exceeding 48 consecutive hours) not caused by scheduled maintenance</li>
                  <li><strong>Technical Issues:</strong> Persistent technical problems that we are unable to resolve within a reasonable timeframe</li>
                  <li><strong>Billing Errors:</strong> Incorrect charges or duplicate payments</li>
                  <li><strong>Exceptional Circumstances:</strong> Reviewed on a case-by-case basis at our discretion</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">5. Non-Refundable Items</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following are generally not eligible for refunds:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Subscriptions beyond the 14-day money-back guarantee period without qualifying circumstances</li>
                  <li>Custom development work or bespoke integrations (as outlined in separate agreements)</li>
                  <li>Add-on services or one-time fees already delivered</li>
                  <li>Unused portions of a billing period after standard cancellation</li>
                  <li>Services terminated due to violation of our Terms of Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">6. How to Request a Refund</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To request a refund, please follow these steps:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Contact Us:</strong> Email support@aivized.com with the subject line "Refund Request"</li>
                  <li><strong>Provide Details:</strong> Include your account email, subscription details, and reason for the refund request</li>
                  <li><strong>Review:</strong> Our team will review your request within 2 business days</li>
                  <li><strong>Confirmation:</strong> You will receive email confirmation of the decision</li>
                  <li><strong>Processing:</strong> Approved refunds are processed within 5-10 business days</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">7. Refund Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When a refund is approved:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Refunds are processed through Paddle, our Merchant of Record</li>
                  <li>The refund will be credited to your original payment method</li>
                  <li>Processing time depends on your payment provider (typically 5-10 business days)</li>
                  <li>Refunds are issued in the original currency of payment</li>
                  <li>You will receive email confirmation when the refund is processed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">8. Pro-Rata Refunds</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In certain circumstances, we may offer pro-rata refunds for the unused portion of your subscription. This is typically considered for annual subscribers or in cases of extended service issues. Pro-rata refunds are calculated based on the remaining days in your billing period and are issued at our discretion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">9. Chargebacks and Disputes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage you to contact us directly before initiating a chargeback with your bank or payment provider. We are committed to resolving issues fairly and promptly. Initiating a chargeback without first attempting to resolve the issue with us may result in suspension of your account and potential denial of future service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">10. Free Trial Conversions</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you sign up for a free trial:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>You will not be charged during the trial period</li>
                  <li>You may cancel at any time during the trial without charge</li>
                  <li>If you do not cancel, your trial will convert to a paid subscription</li>
                  <li>The 14-day money-back guarantee applies from the first paid charge</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">11. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify this Refund Policy at any time. Changes will be posted on this page with an updated "Last updated" date. Significant changes will be communicated via email. The policy in effect at the time of your purchase will apply to that transaction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-semibold mb-4">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our Refund Policy or need assistance with a refund request, please contact us:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>AIVized</strong><br />
                  <strong>Email:</strong> support@aivized.com<br />
                  <strong>Billing Enquiries:</strong> billing@aivized.com<br />
                  <strong>Location:</strong> Pakistan
                </p>
                <p className="text-muted-foreground mt-4">
                  For payment-related issues, you may also contact Paddle directly at{" "}
                  <a href="https://paddle.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">paddle.com</a>
                </p>
              </section>

              <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-12">
                <h2 className="text-2xl font-serif font-semibold mb-4">Our Promise</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We stand behind our service and are committed to your success. If you're ever unsatisfied, please reach out to us – we'll do everything we can to make it right. Your trust is important to us, and we aim to be fair and transparent in all our dealings.
                </p>
              </section>

              {/* Internal Links Section */}
              <section className="bg-muted/30 border border-border rounded-lg p-6 mt-8">
                <h2 className="text-2xl font-serif font-semibold mb-4">Related Pages</h2>
                <p className="text-muted-foreground mb-4">
                  Learn more about our managed AI chatbot service and policies:
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Our Services</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/#pricing" className="text-primary hover:underline">View Pricing Plans</Link>
                        <span className="text-muted-foreground"> — From £29/month</span>
                      </li>
                      <li>
                        <Link to="/locations" className="text-primary hover:underline">AI Chatbot by Location</Link>
                        <span className="text-muted-foreground"> — UK cities</span>
                      </li>
                      <li>
                        <Link to="/industries" className="text-primary hover:underline">AI Chatbot by Industry</Link>
                        <span className="text-muted-foreground"> — Restaurants, Real Estate, E-Commerce</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Blog & Insights</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/blog/whatsapp-chatbot-uk-business" className="text-primary hover:underline">WhatsApp Chatbot Guide</Link>
                      </li>
                      <li>
                        <Link to="/blog/website-chatbot-small-business" className="text-primary hover:underline">Website Chatbot Solutions</Link>
                      </li>
                      <li>
                        <Link to="/blog/instagram-chatbot-social-media" className="text-primary hover:underline">Instagram Chatbot Automation</Link>
                      </li>
                      <li>
                        <Link to="/blog" className="text-primary hover:underline">View All Articles</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Legal</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-primary hover:underline">Back to Homepage</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;