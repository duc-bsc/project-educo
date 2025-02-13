import React from "react";
const Login = React.lazy(() => import("src/pages/Login"));
const LoginDetail = React.lazy(() => import("src/pages/LoginDetail"));
const Register = React.lazy(() => import("src/pages/Register"));
const RegisterDetail = React.lazy(() => import("src/pages/RegisterDetail"));
const ForgotPassword = React.lazy(() => import("src/pages/ForgotPassword"));
const CheckMail = React.lazy(() => import("src/pages/CheckEmail"));
const ResetPassword = React.lazy(() => import("src/pages/ResetPassword"));
const Home = React.lazy(() => import("src/pages/Home"));

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/login-detail",
    component: LoginDetail,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/register-detail",
    component: RegisterDetail,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/forgot-password/check-mail",
    component: CheckMail,
  },
  {
    path: "/forgot-password/reset",
    component: ResetPassword,
  },
  {
    path: "/home",
    component: Home,
  },
];
export default routes;
