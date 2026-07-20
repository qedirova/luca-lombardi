import { z } from "zod";

export const authSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type AuthFormData = z.infer<typeof authSchema>;

export type AuthErrorState = {
  email: string | null;
  password: string | null;
  general: string | null;
};
