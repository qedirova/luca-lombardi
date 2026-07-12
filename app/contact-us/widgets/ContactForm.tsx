"use client";
import { Input } from "@/components/Input";
import {
  ContactFormData,
  contactSchema,
  ErrorState,
} from "@/validation/contact";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorState>({
    name: null,
    email: null,
    message: null,
    general: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  function handlePhoneChange(value: string) {
    setFormData({ ...formData, phone: `+${value}` });
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: null });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const flattened = z.flattenError(result.error);
      const fieldErrors = flattened.fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0] ?? null,
        email: fieldErrors.email?.[0] ?? null,
        message: fieldErrors.message?.[0] ?? null,
        general: null,
      });
      console.log(errors);
      return;
    }

    setLoading(true);

    setErrors({
      name: null,
      email: null,
      message: null,
      general: null,
    });

    try {
      await axios.post("/api/send-email", formData);
      setSuccess("Your message has been successfully sent!");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (e: any) {
      console.log(e);
      const message = e.response.data.message || "Something went wrong";
      setErrors({ ...errors, general: message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-8 shadow-2xl rounded-3xl p-8  lg:w-140 w-[90%]"
    >
      <div className="col-span-2 md:col-span-1">
        <Input
          placeholder="Enter your name..."
          value={formData.name}
          name="name"
          onChange={handleChange}
          error={errors.name}
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Input
          value={formData.phone}
          name="phone"
          onPhoneChange={handlePhoneChange}
          isPhone
          error={null}
        />
      </div>
      <div className="col-span-2">
        <Input
          placeholder="Enter your email..."
          value={formData.email}
          name="email"
          onChange={handleChange}
          error={errors.email}
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <textarea
          placeholder="Enter your message..."
          className=" bg-[#f2f2f2] py-3 px-2 rounded-xl outline-none !h-40 resize-none"
          value={formData.message}
          name="message"
          onChange={handleChange}
        />
        {errors.message && (
          <span className="text-red-600 text-xs">{errors.message}</span>
        )}
      </div>
      {errors.general && (
        <span className="text-red-600 text-xs">{errors.general}</span>
      )}

      {success && <span className="text-green-600 text-xs">{success}</span>}
      <button
        disabled={loading}
        className="bg-black text-white font-medium tracking-[2px] py-3 rounded-3xl cursor-pointer w-full col-span-2"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
