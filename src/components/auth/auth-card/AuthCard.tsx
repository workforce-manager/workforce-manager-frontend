import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import styles from "./AuthCard.module.css";
import { Button } from "@/components/ui/button";
import { AuthMode } from "@/shared/types/mode.type";
import { Checkbox } from "@/components/ui/checkbox";
import { LoginForm } from "../login-form/LoginForm";
import { LoginFormValues } from "@/lib/schemas/login";
import { RegisterFormValues } from "@/lib/schemas/register";
import { RegisterForm } from "../register-form/RegisterForm";
import { AppleIcon, GoogleIcon } from "@/components/icons/social-icons";

type AuthCardProps = {
  handleLoginSubmit: (formData: LoginFormValues) => void;
  handleRegisterSubmit: (formData: RegisterFormValues) => void;
  isPending: boolean;
  isTermsAccepted: boolean;
  mode: AuthMode;
  setIsTermsAccepted: (isTermsAccepted: boolean) => void;
};

export function AuthCard({
  handleLoginSubmit,
  handleRegisterSubmit,
  isPending,
  isTermsAccepted,
  mode,
  setIsTermsAccepted
}: AuthCardProps) {
  return (
    <Card className={styles.authWrapper}>
      <div>
        <CardTitle className="text-white text-[50px] leading-[1] pb-6">
          {mode === "register" ? "Create an account" : "Log in to your account"}
        </CardTitle>
        <CardDescription className="text-[#ACA9AC] text-lg">
          {mode === "register" ? (
            <>
              Already have an account?{" "}
              <a href="/auth/login" className={styles.link}>
                Log in
              </a>
            </>
          ) : (
            <>
              Do not have an account?{" "}
              <a href="/auth/register" className={styles.link}>
                Sign up
              </a>
            </>
          )}
        </CardDescription>
      </div>

      <CardContent className="px-0 py-6">
        {mode === "login" ? (
          <LoginForm onSubmit={handleLoginSubmit} />
        ) : (
          <>
            <RegisterForm onSubmit={handleRegisterSubmit} />
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
          </>
        )}
      </CardContent>

      <CardFooter className="p-0 flex flex-col gap-6">
        <Button
          form="auth"
          className={styles.button}
          disabled={isPending || (mode === "register" && !isTermsAccepted)}
        >
          {isPending
            ? mode === "register"
              ? "Creating..."
              : "Logging in..."
            : mode === "register"
              ? "Create account"
              : "Log in"
          }
        </Button>
        {mode === "register" && (
          <>
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
          </>
        )}
      </CardFooter>
    </Card>
  );
} 
