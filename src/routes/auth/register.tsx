import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import styles from "./register.module.css";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/register")({
  component: Register,
});

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="bg-transparent border-none p-3">
      <>
        <CardTitle className="text-white text-5xl">
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
      </>

      <CardContent className="px-0 pt-6">
        <form>
          <div className="flex gap-5 pb-5">
            <Input
              id="firstName"
              type="text"
              placeholder="First name"
              className={styles.input}
            />
            <Input
              id="lastName"
              type="text"
              placeholder="Last name"
              className={styles.input}
            />
          </div>
          <div className="flex flex-col gap-5">
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className={styles.input}
            />
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={styles.input}
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className={styles.button}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
          </div>
        </form>
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
    </Card>
  );
}
