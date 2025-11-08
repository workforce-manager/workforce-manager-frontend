import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import clsx from "clsx";
import { Users } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Separator } from "../ui/separator";
import styles from "./AppSidebar.module.css";
import { MENU_ITEMS_BY_ROLE } from "./menu/menu.data";
import { useNavigate, useRouterState } from "@tanstack/react-router";

export function AppSidebar() {
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
                  className={clsx(styles.menuItem, {
                    [styles.active]: item.url === pathname
                  })}
                >
                  <SidebarMenuButton asChild>
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
                <SidebarMenuItem key={item.title} className={styles.menuItem}>
                  <SidebarMenuButton onClick={item.isLogout ? handleLogout : undefined} asChild>
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

      <SidebarRail />
    </Sidebar>
  );
}
