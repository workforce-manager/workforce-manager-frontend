import { 
  BarChart3, 
  Building2, 
  CalendarClock, 
  LayoutDashboard, 
  LifeBuoy,
  LucideIcon,
  Settings, 
  Users,
} from "lucide-react";

export interface IMenuItem {
  icon: LucideIcon,
  url: string,
  title: string,
}

export const MAIN_ITEMS: IMenuItem[] = [
  {
    icon: LayoutDashboard,
    url: "/dashboard",
    title: "Dashboard", 
  },
  { 
    icon: Users,
    url: "/employees",
    title: "Employees", 
  },
  { 
    icon: Building2,
    url: "/departments",
    title: "Departments", 
  },
  { 
    icon: BarChart3,
    url: "/reports",
    title: "Reports", 
  },
  { 
    icon: CalendarClock,
    url: "/time-off",
    title: "Time Off", 
  },
];

export const EXTRA_ITEMS: IMenuItem[] = [
  { 
    icon: LifeBuoy,
    url: "/help",
    title: "Help", 
  },
  { 
    icon: Settings,
    url: "/settings",
    title: "Settings", 
  },
];
