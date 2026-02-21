import {
  createRootRouteWithContext,
  Outlet,
  useRouterState
} from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";

interface RouterContext {
  auth: ReturnType<typeof useAuth>;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    const pathname = useRouterState({ 
      select: (state) => state.location.pathname,
    });
    const isAuthPage = pathname.startsWith("/auth");

    if (isAuthPage) return <Outlet />;

    return (
      <SidebarProvider>
        <div className="w-full flex">
          <AppSidebar />
          <main className="flex-1 flex justify-center p-4 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    );
  },
});
