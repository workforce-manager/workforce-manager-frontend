import { useState } from "react";
import styles from "./AuthForm.module.css";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AuthMode } from "@/shared/types/mode.type";

export function AuthForm({ mode }: { mode: AuthMode }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form>
      {mode === "register" ? (
        <div className="flex gap-5 pb-5">
          <div>
            <Input
              id="firstName"
              type="text"
              placeholder="First name"
              className={styles.input}
            />
          </div>
          <div>
            <Input
              id="lastName"
              type="text"
              placeholder="Last name"
              className={styles.input}
            />
          </div>
        </div>
      ) : null}

      <div className="flex flex-col gap-5">
        <div>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            className={styles.input}
          />
        </div>
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
  );
}
