import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import styles from "./register.module.css";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { createFileRoute } from "@tanstack/react-router";
import { RegisterForm } from "@/components/auth/register/RegisterForm";
import { AppleIcon, GoogleIcon } from "@/components/icons/social-icons";

export const Route = createFileRoute("/auth/register")({
  component: Register,
});

function Register() {
  return (
    <Card className="bg-transparent border-none p-3">
      <div>
        <CardTitle className="text-white text-5xl pb-6">
          Create an account
        </CardTitle>
        <CardDescription className="text-[#ACA9AC] text-base">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="underline text-[#B5A7F0] hover:text-white"
          >
            Log in
          </a>
        </CardDescription>
      </div>

      <CardContent className="px-0 pt-6">
        <RegisterForm />
        <div className="flex items-center gap-4 pt-5">
          <Checkbox className={styles.checkbox} />
          <span className="text-white">
            I agree to the{" "}
            <a className="underline text-[#B5A7F0] hover:text-white">
              Terms & Conditions
            </a>
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-0 flex flex-col gap-5">
        <Button className={styles.button}>
          Create account
        </Button>
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
      </CardFooter>
    </Card>
  );
}
