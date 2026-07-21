"use client";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { AuthErrorState, AuthFormData, authSchema } from "@/validation/auth";
import { z } from "zod";
import { useAuth } from "@/hooks/useAuth";
import { FirebaseError } from "firebase/app";

export function RegisterForm() {
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<AuthErrorState>({
    email: null,
    password: null,
    general: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const { handleGoogleLogin, handleEmailRegister } = useAuth();

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: null });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = authSchema.safeParse(formData);

    if (!result.success) {
      const flattened = z.flattenError(result.error);
      const fieldErrors = flattened.fieldErrors;

      setErrors({
        email: fieldErrors.email?.[0] ?? null,
        password: fieldErrors.password?.[0] ?? null,
        general: null,
      });
      return;
    }

    const validatedData = result.data;

    setIsLoading(true);
    setErrors({
      email: null,
      password: null,
      general: null,
    });

    try {
      await handleEmailRegister(validatedData.email, validatedData.password);
    } catch (e) {
      console.log("Error signing in", e);
      if (e instanceof FirebaseError) {
        const code = e.code || "";
        if (code == "auth/email-already-in-use") {
          setErrors({ ...errors, general: "Email is already in use" });
        } else if (code == "auth/weak-password") {
          setErrors({ ...errors, general: "Your password is weak" });
        } else if (code == "auth/invalid-email") {
          setErrors({ ...errors, general: "Invalid email address" });
        } else {
          setErrors({ ...errors, general: "Something went wrong" });
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="pt-20 pb-30">
      <Container className="w-full sm:w-150 ">
        <div className="grid grid-cols-1 gap-5 shadow-2xl rounded-3xl p-8">
          <h1 className="text-4xl tracking-[2px] text-center mb-1">Sign Up</h1>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 rounded-3xl py-3 font-medium border border-neutral-200 bg-white cursor-pointer transition xl:hover:shadow-md xl:hover:-translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>
              <FcGoogle size={20} />
            </span>
            Sign up with Google
          </button>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-neutral-200"></div>
            <span className="text-xs text-neutral-500">OR</span>
            <div className="h-px flex-1 bg-neutral-200"></div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            <div className="flex flex-col relative">
              <Input
                placeholder="Email"
                className="bg-[#f2f2f2] py-3 px-2 rounded-xl outline-none"
                value={formData.email}
                onChange={handleChange}
                name="email"
                error={errors.email}
              />
            </div>
            <div className="flex flex-col relative">
              <Input
                type={isPasswordShown ? "text" : "password"}
                placeholder="Password"
                className="bg-[#f2f2f2] py-3 px-2 rounded-xl outline-none"
                value={formData.password}
                onChange={handleChange}
                name="password"
                error={errors.password}
              />
              {errors.general && (
                <p className="rounded-xl bg-red-50 border border-red-200 p-3 mt-5 text-sm text-red-700">
                  {errors.general}
                </p>
              )}
              <button
                onClick={() => setIsPasswordShown(!isPasswordShown)}
                type="button"
                className="absolute top-3 right-5 cursor-pointer"
              >
                {isPasswordShown ? <IoEyeOff size={22} /> : <IoEye size={22} />}
              </button>
            </div>
            <button
              disabled={isLoading}
              className="bg-black text-white font-medium tracking-[2px] py-3 rounded-3xl cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? "Loading..." : "Sign up"}
            </button>

            <span className="text-sm mx-auto">
              Already have an account?
              <Link
                className="text-sky-500 xl:hover:underline ml-1"
                href="/login"
              >
                Sign in
              </Link>
            </span>
          </form>
        </div>
      </Container>
    </div>
  );
}
