import { Metadata } from "next";
import { LoginForm } from "./widgets/LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <>
      <LoginForm />
    </>
  );
}
