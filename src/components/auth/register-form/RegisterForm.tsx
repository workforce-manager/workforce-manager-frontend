import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import styles from "./RegisterForm.module.css";
import { defaultValues } from "@/config/authForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormValues, registerSchema } from "@/lib/schemas/register";

type RegisterFormProps = {
  onSubmit: (formData: RegisterFormValues) => void;
};

export function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<RegisterFormValues>({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const handleSubmit = (formData: RegisterFormValues) => {
    onSubmit(formData);
  };

  return (
    <Form {...form}>
      <form id="auth" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="w-full flex gap-6 pb-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field, fieldState }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="First name"
                    className={cn(
                      styles.input,
                      fieldState.invalid && styles.error
                    )}
                  />
                </FormControl>
                <FormMessage className={styles.errorMessage} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field, fieldState }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Last name"
                    className={cn(
                      styles.input,
                      fieldState.invalid && styles.error
                    )}
                  />
                </FormControl>
                <FormMessage className={styles.errorMessage} />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter your email"
                    className={cn(
                      styles.input,
                      fieldState.invalid && styles.error
                    )}
                  />
                </FormControl>
                <FormMessage className={styles.errorMessage} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className={cn(
                        styles.input,
                        fieldState.invalid && styles.error
                      )}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(prev => !prev)}
                      className={styles.button}
                    >
                      {showPassword ? <Eye /> : <EyeOff />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className={styles.errorMessage} />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
