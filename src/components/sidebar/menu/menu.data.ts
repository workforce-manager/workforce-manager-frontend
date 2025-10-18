import { 
  Home,
  Star,
  Phone,
  LogIn,
  LucideIcon,
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
