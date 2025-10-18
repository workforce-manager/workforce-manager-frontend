import { Header } from "@/components/header/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => {
    const pathname = useRouterState({ 
      select: (state) => state.location.pathname,
    });
    const isAuthPage = pathname.startsWith("/auth");

    if (isAuthPage) return <Outlet />;

    return (
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
    );
  },
});
