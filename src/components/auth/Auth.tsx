import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import styles from "./Auth.module.css";
import { registerUser } from "@/api/register";
import { Button } from "@/components/ui/button";
import { AuthMode } from "@/shared/types/mode.type";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation } from "@tanstack/react-query";
import { AuthForm } from "@/components/auth/auth-form/AuthForm";
import { AppleIcon, GoogleIcon } from "@/components/icons/social-icons";

export function Auth({ mode }: { mode: AuthMode }) {
  const { mutate } = useMutation({
    mutationFn: registerUser,
  });

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
        <AuthForm mode={mode} mutate={mutate} />
        {mode === "register" && (
          <div className="flex items-center gap-4 pt-6">
            <Checkbox className={styles.checkbox} />
            <span className="text-white text-base">
              I agree to the{" "}
              <a className="text-[#B5A7F0] hover:text-white cursor-pointer">
                Terms & Conditions
              </a>
            </span>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-0 flex flex-col gap-6">
        <Button form="auth" className={styles.button}>
          {mode === "register" ? "Create account" : "Log in"}
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
