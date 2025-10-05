import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { register } from "@/api/register";
import { login as loginAPI } from "@/api/login";
import { LoginForm } from "./login-form/LoginForm";
import { AuthMode } from "@/shared/types/mode.type";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { LoginFormValues } from "@/lib/schemas/login";
import { RegisterForm } from "./register-form/RegisterForm";
import { RegisterFormValues } from "@/lib/schemas/register";
import { ErrorScreen } from "@/components/error/ErrorScreen";
import type { RegisterPayload, LoginPayload, AuthResponse } from "@/shared/interfaces/auth.interface";

export function Auth({ mode }: { mode: AuthMode }) {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastLoginPayload, setLastLoginPayload] = useState<LoginPayload | null>(null);
  const [lastRegisterPayload, setLastRegisterPayload] = useState<RegisterPayload | null>(null);

  const {
    mutate: loginMutate,
    isPending: isLoginPending,
  } = useMutation<AuthResponse, Error, LoginPayload>({
    mutationFn: loginAPI,
    onSuccess: (data) => {
      login(data);
      navigate({ to: "/" });
    },
    onError: (error: unknown) => {
      const message =
        typeof error === "string"
          ? error
          : (error as any)?.message || "Login failed";
      setErrorMessage(message);
    },
  });

  const {
    mutate: registerMutate,
    isPending: isRegisterPending,
  } = useMutation<AuthResponse, Error, RegisterPayload>({
    mutationFn: register,
    onSuccess: (data) => {
      login(data);
      navigate({ to: "/" });
    },
    onError: (error: unknown) => {
      const message =
        typeof error === "string"
          ? error
          : (error as any)?.message || "Registration failed";
      setErrorMessage(message);
    },
  });

  const handleLoginSubmit = (formData: LoginFormValues) => {
    const payload: LoginPayload = {
      email: formData.email,
      password: formData.password,
    };
    setLastLoginPayload(payload);
    loginMutate(payload);
  };

  const handleRegisterSubmit = (formData: RegisterFormValues) => {
    const payload: RegisterPayload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      password: formData.password,
    };
    setLastRegisterPayload(payload);
    registerMutate(payload);
  };

  const handleRetry = () => {
    if (mode === "login" && lastLoginPayload) {
      loginMutate(lastLoginPayload);
    } else if (mode === "register" && lastRegisterPayload) {
      registerMutate(lastRegisterPayload);
    }
  };

  return errorMessage ? (
    <ErrorScreen 
      message={errorMessage}
      onGoBack={() => setErrorMessage(null)}
      onTryAgain={handleRetry}
    />
  ) : (
    mode === "login" ? (
      <LoginForm 
        isPending={isLoginPending}
        onSubmit={handleLoginSubmit}
      />
    ) : (
      <RegisterForm
        isPending={isRegisterPending}
        isTermsAccepted={isTermsAccepted}
        onSubmit={handleRegisterSubmit}
        setIsTermsAccepted={setIsTermsAccepted}
      />
    )
  );
}
