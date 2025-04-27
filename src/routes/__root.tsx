import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Outlet />
      </div>
    </>
  ),
});
