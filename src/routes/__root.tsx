import { Header } from "@/components/header/Header";
import { useAuthContext } from "@/providers/AuthProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { createRootRouteWithContext, Outlet, useRouterState } from "@tanstack/react-router";

interface RouterContext {
  auth: ReturnType<typeof useAuthContext>;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    const auth = useAuthContext();

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
              <div className="pb-6">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    );
  },
});
