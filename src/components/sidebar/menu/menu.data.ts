import {
  Home,
  LayoutDashboard,
  LogIn,
  LogOut,
  LucideIcon,
  Phone,
  Star,
  Users
} from "lucide-react";

interface IMenuItem {
  icon: LucideIcon,
  url?: string,
  title: string,
  isLogout?: boolean,
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
    icon: Users,
    url: "/admin/employee-management",
    title: "Employees",
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
    title: "Logout", 
    isLogout: true,
  },
];
