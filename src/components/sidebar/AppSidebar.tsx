import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Users } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Separator } from "../ui/separator";
import styles from "./AppSidebar.module.css";
import { MENU_ITEMS_BY_ROLE } from "./menu/menu.data";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useNavigate, useRouterState } from "@tanstack/react-router";

export function AppSidebar() {
  const { state } = useSidebar();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const handleLogout = () => {
    logout();
    navigate({ to: "/", replace: true });
  };

  const role = user?.role || "default";
  const menuItems = MENU_ITEMS_BY_ROLE[role as keyof typeof MENU_ITEMS_BY_ROLE]
    || MENU_ITEMS_BY_ROLE.default;
  const { main: mainItems, extra: extraItems } = menuItems;

  return (
    <Sidebar collapsible="icon" className={styles.sidebar}>
      <SidebarHeader className={styles.sidebarHeader}>
        <div className="flex items-center justify-center">
          <Users size={32} className={`group-data-[state=expanded]:hidden ${styles.collapsedIcon}`} />
          <span className={`group-data-[state=collapsed]:hidden ${styles.sidebarTitle}`}>
            Workforce Manager
          </span>
        </div>
      </SidebarHeader>

      <Separator className="bg-[#2C2638]" />

      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn(styles.menuItem, {
                    [styles.active]: item.url === pathname
                  })}
                >
                  <SidebarMenuButton className="ml-[3px]" asChild>
                    <a href={item.url}>
                      <span className="w-6 h-6">
                        <item.icon />
                      </span>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="bg-[#2C2638]" />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {extraItems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn(styles.menuItem, {
                    [styles.logout]: item.isLogout,
                  })}
                >
                  <SidebarMenuButton
                    onClick={item.isLogout ? handleLogout : undefined}
                    className="ml-[3px]"
                    asChild
                  >
                    <a href={item.url}>
                      <span className="w-6 h-6">
                        <item.icon />
                      </span>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <Separator className="bg-[#2C2638]" />

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className={styles.footerMenuItem}>
            <SidebarMenuButton className="gap-3 ml-[3px]">
              <Avatar
                className={cn(
                  "transition-all",
                  state === "collapsed" ? "h-6 w-6" : "h-8 w-8"
                )}
              >
                <AvatarImage src="https://github.com/shadcn.png" alt={user?.name} />
                <AvatarFallback>
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate font-bold">
                  New User
                </span>
                <span className="truncate">
                  newuser@example.com
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
