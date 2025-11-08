import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/employee")({
  beforeLoad: ({ context }) => {
    if (!context.auth?.isAuthenticated || context.auth?.user?.role !== "EMPLOYEE") {
      throw redirect({ to: "/auth/login" });
    }
  },
  component: () => <Outlet />,
});
