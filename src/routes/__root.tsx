import { Header } from "@/components/header/Header";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarProvider } from "@/components/sidebar/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <SidebarProvider>
      <div className="h-screen w-full flex box-border">
        <AppSidebar />
        <div className="min-h-0 flex-1 flex flex-col">
          <Header />
          <main className="flex-1 flex justify-center p-4 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  ),
});
