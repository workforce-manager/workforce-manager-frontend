import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarProvider } from "@/components/sidebar/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <SidebarProvider>
      <div className="h-screen flex flex-col">
        <header className="h-16 bg-gray-100 shadow px-4 flex items-center">
          <h1 className="text-xl font-semibold">Employee Manager</h1>
        </header>
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  ),
});
