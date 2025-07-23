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
} from "@/components/sidebar/sidebar";
import { 
  BarChart3, 
  Building2, 
  CalendarClock, 
  LayoutDashboard, 
  LifeBuoy, 
  LogOut,
  Settings, 
  Users,
} from "lucide-react";
import { Separator } from "../ui/separator";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Employees", url: "/employees", icon: Users },
  { title: "Departments", url: "/departments", icon: Building2 },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Time Off", url: "/time-off", icon: CalendarClock },
];

const secondaryItems = [
  { title: "Help", url: "/help", icon: LifeBuoy },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-4">
        <div className="flex items-center">
          <Users size={32} className="text-muted-foreground shrink-0" />
          <span className="font-medium text-muted-foreground pl-3 group-data-[state=collapsed]:hidden">
            Workforce Manager
          </span>
        </div>
      </SidebarHeader>

      <Separator style={{ marginTop: "0.5rem" }} />

      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="py-2">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span className="w-6 h-6">
                        <item.icon className="text-muted-foreground" />
                      </span>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.title} className="py-2">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span className="w-6 h-6">
                        <item.icon className="text-muted-foreground" />
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

      <Separator style={{ marginBottom: "0.5rem" }} />

      <SidebarFooter className="px-4">
        <div className="flex items-center justify-between">
          <span className="font-medium text-muted-foreground">
            Username
          </span>
          <button className="text-muted-foreground hover:text-destructive">
            <LogOut size={20} />
          </button>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
