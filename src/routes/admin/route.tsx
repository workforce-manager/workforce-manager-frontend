import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  beforeLoad: ({ context }) => {
    if (!context.auth?.isAuthenticated || context.auth?.user?.role !== "ADMIN") {
      throw redirect({ to: "/auth/login" });
    }
  },
  component: () => <Outlet />,
});
