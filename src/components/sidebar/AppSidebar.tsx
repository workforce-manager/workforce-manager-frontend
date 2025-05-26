import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/sidebar/sidebar";
import { 
  BarChart3, 
  Building2, 
  CalendarClock, 
  LayoutDashboard, 
  LifeBuoy, 
  LogOut, 
  PanelsTopLeft, 
  Settings, 
  Users,
} from "lucide-react";

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
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar className="h-[calc(100vh-32px)] border-none">
      <SidebarHeader className="px-4 border-b">
        <div className="flex items-end justify-between">
          <span className="font-medium text-muted-foreground">
            Employee Manager
          </span>
          <button 
            onClick={toggleSidebar}
            className="text-muted-foreground hover:text-foreground"
          >
            <PanelsTopLeft size={20} />
          </button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-4 border-t">
        <div className="flex items-center justify-between">
          <span className="font-medium text-muted-foreground">
            Username
          </span>
          <button className="text-muted-foreground hover:text-destructive">
            <LogOut size={20} />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
