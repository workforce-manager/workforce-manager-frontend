import { Auth } from "@/components/auth/Auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/register")({
  component: Register,
});

function Register() {
  return <Auth mode="register" />;
}
