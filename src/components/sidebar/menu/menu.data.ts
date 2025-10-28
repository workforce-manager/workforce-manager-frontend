import { 
  Home,
  Star,
  Phone,
  LayoutDashboard,
  LogIn,
  LogOut,
  LucideIcon
} from "lucide-react";

export interface IMenuItem {
  icon: LucideIcon,
  url: string,
  title: string,
}

export const MAIN_ITEMS: IMenuItem[] = [
  {
    icon: Home,
    url: "/",
    title: "Home", 
  },
  { 
    icon: Star,
    url: "/features",
    title: "Features", 
  },
  { 
    icon: Phone,
    url: "/contact",
    title: "Contact", 
  },
];

export const EXTRA_ITEMS: IMenuItem[] = [
  { 
    icon: LogIn,
    url: "/auth/login",
    title: "Login", 
  },
];

export const ADMIN_MAIN_ITEMS: IMenuItem[] = [
  {
    icon: LayoutDashboard,
    url: "/admin/dashboard",
    title: "Dashboard",
  },
  { 
    icon: Star,
    url: "/features",
    title: "Features", 
  },
  { 
    icon: Phone,
    url: "/contact",
    title: "Contact", 
  },
];

export const ADMIN_EXTRA_ITEMS: IMenuItem[] = [
  { 
    icon: LogOut,
    url: "/admin/logout",
    title: "Logout", 
  },
];
