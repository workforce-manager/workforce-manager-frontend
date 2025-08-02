import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string()
    .min(3, "First name must be at least 3 characters")
    .max(50, "First name must be no more than 50 characters")
    .regex(/^[A-Za-z'-\s]+$/, "Invalid characters"),

  lastName: z.string()
    .min(3, "Last name must be at least 3 characters")
    .max(50, "Last name must be no more than 50 characters")
    .regex(/^[A-Za-z'-\s]+$/, "Invalid characters"),

  email: z.email("Invalid email address"),

  password: z.string()
    .min(6, "Password must be at least 6 characters")
    .max(64, "Password must be no more than 64 characters")
    .regex(/[A-Z]/, "At least one uppercase letter")
    .regex(/[a-z]/, "At least one lowercase letter")
    .regex(/[0-9]/, "At least one digit")
    .regex(/[^A-Za-z0-9]/, "At least one special character"),
});

export type UserFormValues = z.infer<typeof userSchema>;
