import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  phone: z.string().optional(),
  email: z.email("Please enter a valid email address."),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ErrorState = {
  name: string | null;
  message: string | null;
  email: string | null;
  general: string | null;
};
