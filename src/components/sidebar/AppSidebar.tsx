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
import { Users } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Separator } from "../ui/separator";
import styles from "./AppSidebar.module.css";
import { ADMIN_EXTRA_ITEMS, ADMIN_MAIN_ITEMS, EXTRA_ITEMS, MAIN_ITEMS } from "./menu/menu.data";

export function AppSidebar() {
  const { user } = useAuth();

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
              {(user?.role === "ADMIN" ? ADMIN_MAIN_ITEMS : MAIN_ITEMS).map((item) => (
                <SidebarMenuItem key={item.title} className={styles.menuItem}>
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
              {(user?.role === "ADMIN" ? ADMIN_EXTRA_ITEMS : EXTRA_ITEMS).map((item) => (
                <SidebarMenuItem key={item.title} className={styles.menuItem}>
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
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
