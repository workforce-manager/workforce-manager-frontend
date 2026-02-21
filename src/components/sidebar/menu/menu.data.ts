import {
  CheckCheck,
  CircleUserRound,
  Home,
  Star,
  Phone,
  LayoutDashboard,
  LogIn,
  LogOut,
  LucideIcon
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

export const EMPLOYEE_MAIN_ITEMS: IMenuItem[] = [
  {
    icon: CircleUserRound,
    url: "/employee/profile",
    title: "Profile",
  },
  {
    icon: Star,
    url: "/features",
    title: "Features",
  },
  {
    icon: CheckCheck,
    url: "/employee/tasks",
    title: "Tasks",
  },
  {
    icon: Phone,
    url: "/contact",
    title: "Contact",
  },
];

export const EMPLOYEE_EXTRA_ITEMS: IMenuItem[] = [
  { 
    icon: LogOut,
    title: "Logout", 
    isLogout: true,
  },
];

export const MENU_ITEMS_BY_ROLE = {
  ADMIN: {
    main: ADMIN_MAIN_ITEMS,
    extra: ADMIN_EXTRA_ITEMS,
  },
  EMPLOYEE: {
    main: EMPLOYEE_MAIN_ITEMS,
    extra: EMPLOYEE_EXTRA_ITEMS,
  },
  default: {
    main: MAIN_ITEMS,
    extra: EXTRA_ITEMS,
  },
} as const;
