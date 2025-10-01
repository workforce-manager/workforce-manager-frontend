import * as yup from "yup";
import { InferType } from "yup";

export const loginSchema = yup.object({
  email: yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export type LoginFormValues = InferType<typeof loginSchema>;
