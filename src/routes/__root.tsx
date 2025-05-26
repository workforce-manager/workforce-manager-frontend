import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarProvider } from "@/components/sidebar/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <SidebarProvider>
      <div className="h-screen w-full flex p-4 box-border">
        <AppSidebar />
        <div className="min-h-0 flex-1 flex flex-col">
          <header className="h-16 bg-transparent px-4 flex items-center">
            <h1 className="text-xl font-semibold">
              Employee Manager
            </h1>
          </header>
          <main className="flex-1 flex justify-center p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  ),
});
