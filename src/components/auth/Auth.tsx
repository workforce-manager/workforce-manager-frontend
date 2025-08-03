import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import styles from "./Auth.module.css";
import { Button } from "@/components/ui/button";
import { AuthMode } from "@/shared/types/mode.type";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthForm } from "@/components/auth/auth-form/AuthForm";
import { AppleIcon, GoogleIcon } from "@/components/icons/social-icons";

export function Auth({ mode }: { mode: AuthMode }) {
  return (
    <Card className="bg-transparent border-none p-3">
      <div>
        <CardTitle className="text-white text-5xl pb-6">
          {mode === "register" ? "Create an account" : "Log in to your account" }
        </CardTitle>
        <CardDescription className="text-[#ACA9AC] text-base">
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

      <CardContent className="px-0 pt-6">
        <AuthForm mode={mode} />
        {mode === "register" ? (
          <div className="flex items-center gap-4 pt-5">
            <Checkbox className={styles.checkbox} />
            <span className="text-white">
              I agree to the{" "}
              <a className="underline text-[#B5A7F0] hover:text-white">
                Terms & Conditions
              </a>
            </span>
          </div>
        ) : null}
      </CardContent>

      <CardFooter className="p-0 flex flex-col gap-5">
        <Button className={styles.button}>
          {mode === "register" ? "Create account" : "Log in"}
        </Button>
        {mode === "register" ? (
          <>
            <div className={styles.divider}>
              Or register with
            </div>
            <div className="w-full flex gap-5">
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
        ) : null}
      </CardFooter>
    </Card>
  );
}
