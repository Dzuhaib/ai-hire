import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_57jwo4o";
const EMAILJS_PUBLIC_KEY = "MqaarR3vYud1QmXz7";

const TEMPLATES = {
  ADMIN: "template_uoosd5n",
  USER: "template_62owekc",
};

const ADMIN_EMAIL = "admin@aivized.com";

let initialized = false;
const initEmailJS = () => {
  if (!initialized) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    initialized = true;
  }
};

const sendEmail = async (templateId: string, params: Record<string, string>) => {
  try {
    initEmailJS();
    await emailjs.send(EMAILJS_SERVICE_ID, templateId, params);
    console.log("[EmailJS] Email sent:", templateId);
  } catch (error) {
    console.error("[EmailJS] Failed to send email:", error);
  }
};

// ── Admin Notifications ──

export const notifyAdminNewSignup = async (userName: string, userEmail: string) => {
  await sendEmail(TEMPLATES.ADMIN, {
    to_email: ADMIN_EMAIL,
    subject: `👤 New User Signup - ${userName || "Unknown"}`,
    message_body: `New signup:\nName: ${userName || "Unknown"}\nEmail: ${userEmail}\nDate: ${new Date().toLocaleDateString("en-GB")}`,
  });
};

export const notifyAdminNewTrial = async (
  userName: string,
  userEmail: string,
  planName: string,
  trialEndsAt: string
) => {
  await sendEmail(TEMPLATES.ADMIN, {
    to_email: ADMIN_EMAIL,
    subject: `🚀 New Trial Started - ${userName || "Unknown"}`,
    message_body: `${userName || "Unknown"} (${userEmail}) just started a free trial.\nPlan: ${planName}\nTrial ends: ${new Date(trialEndsAt).toLocaleDateString("en-GB")}`,
  });
};

export const notifyAdminSubscriptionActivated = async (
  userName: string,
  userEmail: string,
  planName: string,
  amount: string
) => {
  await sendEmail(TEMPLATES.ADMIN, {
    to_email: ADMIN_EMAIL,
    subject: `💰 Subscription Activated - ${userName || "Unknown"}`,
    message_body: `${userName || "Unknown"} (${userEmail}) activated a subscription.\nPlan: ${planName}\nAmount: £${amount}`,
  });
};

// ── User Notifications ──

export const notifyUserTrialEnding = async (
  userEmail: string,
  userName: string,
  planName: string,
  trialEndsAt: string
) => {
  await sendEmail(TEMPLATES.USER, {
    to_email: userEmail,
    subject: `⏰ Your aivized trial is ending soon`,
    message_body: `Hi ${userName || "there"},\n\nYour ${planName} trial ends on ${new Date(trialEndsAt).toLocaleDateString("en-GB")}.\nSubscribe now to keep your AI employee running!\n\nVisit your dashboard to upgrade.`,
  });
};

export const notifyUserSubscriptionSuccess = async (
  userEmail: string,
  userName: string,
  planName: string,
  amount: string
) => {
  await sendEmail(TEMPLATES.USER, {
    to_email: userEmail,
    subject: `✅ Subscription Confirmed - ${planName}`,
    message_body: `Hi ${userName || "there"},\n\nYour ${planName} subscription (£${amount}/month) is now active.\nThank you for choosing aivized!`,
  });
};

export const notifyUserSubscriptionFailed = async (
  userEmail: string,
  userName: string,
  planName: string
) => {
  await sendEmail(TEMPLATES.USER, {
    to_email: userEmail,
    subject: `❌ Payment Failed - ${planName}`,
    message_body: `Hi ${userName || "there"},\n\nYour payment for the ${planName} plan failed.\nPlease update your payment method to continue your subscription.`,
  });
};

export const notifyUserSubscriptionExpiring = async (
  userEmail: string,
  userName: string,
  planName: string,
  expiresAt: string
) => {
  await sendEmail(TEMPLATES.USER, {
    to_email: userEmail,
    subject: `⚠️ Subscription Expiring Soon`,
    message_body: `Hi ${userName || "there"},\n\nYour ${planName} subscription expires on ${new Date(expiresAt).toLocaleDateString("en-GB")}.\nRenew now to avoid interruption.`,
  });
};
