import { createRouter, createWebHistory } from "vue-router";

import AuthView from "../views/auth/index.vue";
import LoginView from "@/views/auth/login.vue";
import SignupView from "@/views/auth/signup.vue";
import ForgotPasswordView from "@/views/auth/forgot-password.vue";
import OtpView from "@/views/auth/otp.vue";
import RegisterView from "@/views/auth/register.vue";
import DashboardView from "@/views/dashboard/index.vue";
import ProfileView from "@/views/profile.vue";
import PaymentView from "@/views/payment.vue";
import SecurityView from "@/views/security/index.vue";
import ContactUsView from "@/views/contact-us.vue";
import TermsView from "@/views/security/terms.vue";
import PrivacyPolicyView from "@/views/security/privacy-policy.vue";
import ChangePinView from "@/views/security/change-pin.vue";
import ChangePasswordView from "@/views/security/change-password.vue";
const routes = [
  { path: "/", redirect: "/auth" },
  { path: "/auth", component: AuthView },
  { path: "/auth/login", component: LoginView },
  { path: "/auth/signup", component: SignupView },
  { path: "/auth/register", component: RegisterView },
  { path: "/auth/otp", component: OtpView },
  { path: "/auth/forgot-password", component: ForgotPasswordView },
  { path: "/dashboard", component: DashboardView },
  { path: "/profile", component: ProfileView },
  { path: "/payment", component: PaymentView },
  { path: "/security", component: SecurityView },
  { path: "/security/terms", component: TermsView },
  { path: "/security/privacy", component: PrivacyPolicyView },
  { path: "/security/pin", component: ChangePinView },
  { path: "/security/password", component: ChangePasswordView },
  { path: "/contact", component: ContactUsView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
