import emailjs from "@emailjs/browser";

// EmailJS Configuration - Replace these with your actual values from emailjs.com
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // e.g., "service_abc123"
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // e.g., "abc123xyz"

// Template IDs for different notification types
const TEMPLATES = {
  ADMIN_NEW_SIGNUP: "YOUR_ADMIN_SIGNUP_TEMPLATE_ID",
  ADMIN_NEW_TRIAL: "YOUR_ADMIN_TRIAL_TEMPLATE_ID",
  ADMIN_SUBSCRIPTION_ACTIVATED: "YOUR_ADMIN_SUB_ACTIVATED_TEMPLATE_ID",
  USER_TRIAL_ENDING: "YOUR_USER_TRIAL_ENDING_TEMPLATE_ID",
  USER_SUBSCRIPTION_SUCCESS: "YOUR_USER_SUB_SUCCESS_TEMPLATE_ID",
  USER_SUBSCRIPTION_FAILED: "YOUR_USER_SUB_FAILED_TEMPLATE_ID",
  USER_SUBSCRIPTION_EXPIRING: "YOUR_USER_SUB_EXPIRING_TEMPLATE_ID",
};

// Admin email to receive notifications
const ADMIN_EMAIL = "admin@aivized.com";

// Initialize EmailJS
let initialized = false;
const initEmailJS = () => {
  if (!initialized && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    initialized = true;
  }
};

const sendEmail = async (templateId: string, params: Record<string, string>) => {
  try {
    initEmailJS();
    if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      console.log("[EmailJS] Not configured. Skipping email:", templateId, params);
      return;
    }
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
