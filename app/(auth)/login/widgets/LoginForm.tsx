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

export function LoginForm() {
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

  const {handleGoogleLogin} = useAuth()

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: null });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
    } catch (e) {
      console.log("Error signing in", e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="pt-20 pb-30">
      <Container className="w-full sm:w-150 ">
        <div className="grid grid-cols-1 gap-5 shadow-2xl rounded-3xl p-8">
          <h1 className="text-4xl tracking-[2px] text-center mb-1">Sign In</h1>
          <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 rounded-3xl py-3 font-medium border border-neutral-200 bg-white cursor-pointer transition xl:hover:shadow-md xl:hover:-translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed">
            <span>
              <FcGoogle size={20} />
            </span>
            Continue with Google
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
              <button
                onClick={() => setIsPasswordShown(!isPasswordShown)}
                type="button"
                className="absolute top-3 right-5 cursor-pointer"
              >
                {isPasswordShown ? <IoEyeOff size={22} /> : <IoEye size={22} />}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <Link
                className="text-sky-500 xl:hover:underline text-sm"
                href={"/forgot-password"}
              >
                Forgot password?
              </Link>
            </div>
            <button
              disabled={isLoading}
              className="bg-black text-white font-medium tracking-[2px] py-3 rounded-3xl cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>

            <span className="text-sm mx-auto">
              Don&apos;t have an account?{" "}
              <Link
                className="text-sky-500 xl:hover:underline ml-1"
                href="/register"
              >
                Create an account now
              </Link>
            </span>
          </form>
        </div>
      </Container>
    </div>
  );
}
