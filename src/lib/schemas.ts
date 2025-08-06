import * as yup from "yup";
import { InferType } from "yup";

export const userSchema = yup.object({
  firstName: yup.string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters")
    .max(50, "First name must be no more than 50 characters")
    .matches(/^[A-Za-z'-\s]+$/, "Invalid characters"),

  lastName: yup.string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters")
    .max(50, "Last name must be no more than 50 characters")
    .matches(/^[A-Za-z'-\s]+$/, "Invalid characters"),

  email: yup.string()
    .required("Email is required")
    .email("Invalid email address"),

  password: yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(64, "Password must be no more than 64 characters")
    .matches(/[A-Z]/, "At least one uppercase letter")
    .matches(/[a-z]/, "At least one lowercase letter")
    .matches(/[0-9]/, "At least one digit")
    .matches(/[^A-Za-z0-9]/, "At least one special character"),
});

export type UserFormValues = InferType<typeof userSchema>;
