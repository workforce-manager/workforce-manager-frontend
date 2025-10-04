import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
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
import styles from "./LoginForm.module.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormValues, loginSchema } from "@/lib/schemas/login";

type LoginFormProps = {
  isPending: boolean;
  onSubmit: (formData: LoginFormValues) => void;
};

export function LoginForm({ isPending, onSubmit }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const handleSubmit = (formData: LoginFormValues) => {
    onSubmit(formData);
  };

  return (
    <Card className={styles.authWrapper}>
      <div>
        <CardTitle className="text-white text-[50px] leading-[1] pb-6">
          Log in to your account
        </CardTitle>
        <CardDescription className="text-[#ACA9AC] text-lg">
          Do not have an account?{" "}
          <a href="/auth/register" className={styles.link}>
            Sign up
          </a>
        </CardDescription>
      </div>

      <CardContent className="px-0 py-6">
        <Form {...form}>
          <form id="auth" onSubmit={form.handleSubmit(handleSubmit)}>
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
                          className={styles.eyeButton}
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
      </CardContent>

      <CardFooter className="p-0 flex flex-col gap-6">
        <Button
          form="auth"
          className={styles.submitButton}
          disabled={isPending}
        >
          {isPending ? "Logging in..." : "Log in"}
        </Button>
      </CardFooter>
    </Card>
  );
}
