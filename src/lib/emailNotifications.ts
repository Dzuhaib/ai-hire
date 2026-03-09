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
  await sendEmail(TEMPLATES.ADMIN_NEW_SIGNUP, {
    to_email: ADMIN_EMAIL,
    user_name: userName || "Unknown",
    user_email: userEmail,
    signup_date: new Date().toLocaleDateString("en-GB"),
  });
};

export const notifyAdminNewTrial = async (
  userName: string,
  userEmail: string,
  planName: string,
  trialEndsAt: string
) => {
  await sendEmail(TEMPLATES.ADMIN_NEW_TRIAL, {
    to_email: ADMIN_EMAIL,
    user_name: userName || "Unknown",
    user_email: userEmail,
    plan_name: planName,
    trial_ends_at: new Date(trialEndsAt).toLocaleDateString("en-GB"),
  });
};

export const notifyAdminSubscriptionActivated = async (
  userName: string,
  userEmail: string,
  planName: string,
  amount: string
) => {
  await sendEmail(TEMPLATES.ADMIN_SUBSCRIPTION_ACTIVATED, {
    to_email: ADMIN_EMAIL,
    user_name: userName || "Unknown",
    user_email: userEmail,
    plan_name: planName,
    amount: amount,
  });
};

// ── User Notifications ──

export const notifyUserTrialEnding = async (
  userEmail: string,
  userName: string,
  planName: string,
  trialEndsAt: string
) => {
  await sendEmail(TEMPLATES.USER_TRIAL_ENDING, {
    to_email: userEmail,
    user_name: userName || "there",
    plan_name: planName,
    trial_ends_at: new Date(trialEndsAt).toLocaleDateString("en-GB"),
  });
};

export const notifyUserSubscriptionSuccess = async (
  userEmail: string,
  userName: string,
  planName: string,
  amount: string
) => {
  await sendEmail(TEMPLATES.USER_SUBSCRIPTION_SUCCESS, {
    to_email: userEmail,
    user_name: userName || "there",
    plan_name: planName,
    amount: amount,
  });
};

export const notifyUserSubscriptionFailed = async (
  userEmail: string,
  userName: string,
  planName: string
) => {
  await sendEmail(TEMPLATES.USER_SUBSCRIPTION_FAILED, {
    to_email: userEmail,
    user_name: userName || "there",
    plan_name: planName,
  });
};

export const notifyUserSubscriptionExpiring = async (
  userEmail: string,
  userName: string,
  planName: string,
  expiresAt: string
) => {
  await sendEmail(TEMPLATES.USER_SUBSCRIPTION_EXPIRING, {
    to_email: userEmail,
    user_name: userName || "there",
    plan_name: planName,
    expires_at: new Date(expiresAt).toLocaleDateString("en-GB"),
  });
};
