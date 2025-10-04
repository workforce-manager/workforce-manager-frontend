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
import { Input } from "@/components/ui/input";
import styles from "./RegisterForm.module.css";
import { Button } from "@/components/ui/button";
import { defaultValues } from "@/config/authForm";
import { Checkbox } from "@/components/ui/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppleIcon, GoogleIcon } from "@/components/icons/social-icons";
import { RegisterFormValues, registerSchema } from "@/lib/schemas/register";

type RegisterFormProps = {
  isPending: boolean;
  isTermsAccepted: boolean;
  onSubmit: (formData: RegisterFormValues) => void;
  setIsTermsAccepted: (isTermsAccepted: boolean) => void;
};

export function RegisterForm({
  isPending, 
  isTermsAccepted, 
  onSubmit,
  setIsTermsAccepted
}: RegisterFormProps) {
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
    <Card className={styles.authWrapper}>
      <div>
        <CardTitle className="text-white text-[50px] leading-[1] pb-6">
          Create an account
        </CardTitle>
        <CardDescription className="text-[#ACA9AC] text-lg">
          Already have an account?{" "}
          <a href="/auth/login" className={styles.link}>
            Log in
          </a>
        </CardDescription>
      </div>

      <CardContent className="px-0 py-6">
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

        <div className="flex items-center gap-4 pt-6">
          <Checkbox
            className={styles.checkbox}
            checked={isTermsAccepted}
            onCheckedChange={(checked) => setIsTermsAccepted(Boolean(checked))}
          />
          <span className="text-white text-base">
            I agree to the{" "}
            <a className="text-[#B5A7F0] hover:text-white cursor-pointer">
              Terms & Conditions
            </a>
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-0 flex flex-col gap-6">
        <Button
          form="auth"
          className={styles.submitButton}
          disabled={isPending || !isTermsAccepted}
        >
          {isPending ? "Creating..." : "Create account"}
        </Button>

        <div className={styles.divider}>
          Or register with
        </div>

        <div className="w-full flex gap-6">
          <Button className={styles.iconButton}>
            <span className={styles.icon}>
              <GoogleIcon />
            </span>
            <span>Google</span>
          </Button>
          <Button className={styles.iconButton}>
            <span className={styles.icon}>
              <AppleIcon />
            </span>
            <span>Apple</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
