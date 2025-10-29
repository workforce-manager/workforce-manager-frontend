import {
  Activity,
  BarChart3,
  FileText,
  Settings,
  UserCheck,
  UserPlus,
  Users
} from "lucide-react";

export interface StatCard {
  id: string;
  icon: any;
  title: string;
  number: string;
  description: string;
}

export interface ActivityItem {
  id: string;
  status: "success" | "info" | "warning" | "error";
  text: string;
  time: string;
}

export interface QuickAction {
  id: string;
  icon: any;
  label: string;
}

export const STATS_DATA: StatCard[] = [
  {
    id: "total-users",
    icon: "Users",
    title: "Total Users",
    number: "156",
    description: "All registered users"
  },
  {
    id: "active-users",
    icon: "UserCheck",
    title: "Active Users",
    number: "142",
    description: "Currently online"
  },
  {
    id: "new-registrations",
    icon: "UserPlus",
    title: "New Registrations",
    number: "12",
    description: "This week"
  },
  {
    id: "daily-activity",
    icon: "Activity",
    title: "Daily Activity",
    number: "1,247",
    description: "Actions today"
  }
];

export const ACTIVITY_DATA: ActivityItem[] = [
  {
    id: "1",
    status: "success",
    text: "New user registered: john.doe@example.com",
    time: "2 minutes ago"
  },
  {
    id: "2",
    status: "info",
    text: "User profile updated: jane.smith@example.com",
    time: "15 minutes ago"
  },
  {
    id: "3",
    status: "warning",
    text: "Pending approval request from admin@company.com",
    time: "1 hour ago"
  },
  {
    id: "4",
    status: "error",
    text: "Failed login attempt from unknown IP",
    time: "2 hours ago"
  }
];

export const QUICK_ACTIONS_DATA: QuickAction[] = [
  {
    id: "add-user",
    icon: "UserPlus",
    label: "Add User"
  },
  {
    id: "view-reports",
    icon: "BarChart3",
    label: "View Reports"
  },
  {
    id: "system-settings",
    icon: "Settings",
    label: "System Settings"
  },
  {
    id: "view-logs",
    icon: "FileText",
    label: "View Logs"
  }
];

export const ICON_MAP = {
  Users,
  UserCheck,
  UserPlus,
  Activity,
  Settings,
  FileText,
  BarChart3
};
