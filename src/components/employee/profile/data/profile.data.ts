import type { LucideIcon } from "lucide-react";
import { Calendar, Shield, User } from "lucide-react";

interface UserData {
  name?: string | null;
  role?: string | null;
}

interface PersonalInfoItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export const getPersonalInfoItems = (user?: UserData | null): PersonalInfoItem[] => {
  const items = [
    {
      label: "Full Name",
      value: user?.name || "Not provided",
      icon: User,
    },
    {
      label: "Role",
      value: user?.role || "EMPLOYEE",
      icon: Shield,
    },
    {
      label: "Registered At",
      value: "January 15, 2024",
      icon: Calendar,
    },
  ];

  return items;
};

interface SupportContact {
  name: string;
  role: string;
  email: string;
  phone: string;
}

export const supportContacts: SupportContact[] = [
  {
    name: "Jane Smith",
    role: "Manager",
    email: "jane.smith@company.com",
    phone: "+49 123 456 7890",
  },
  {
    name: "Alex Brown",
    role: "HR Partner",
    email: "alex.brown@company.com",
    phone: "+49 987 654 3210",
  },
];
