import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: () => (
    <div className="w-full h-screen flex items-center justify-center bg-[#2C2638]">
      <Outlet />
    </div>
  ),
});
