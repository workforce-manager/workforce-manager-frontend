import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./EmployeeManagement.module.css";
import type { ColumnDef } from "@tanstack/react-table";

type Employee = {
  name: string;
  email: string;
  phone: string;
};

interface MenuItem {
  label: string;
  variant: "default" | "destructive" | undefined;
}

const menuItems: MenuItem[] = [
  { label: "Add", variant: "default" },
  { label: "Edit", variant: "default" },
  { label: "Delete", variant: "destructive" },
];

export const columns: ColumnDef<Employee>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="w-[175px] capitalize truncate">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    header: "Email",
    accessorKey: "email",
    cell: ({ row }) => (
      <div className="w-[300px] lowercase truncate">
        {row.getValue("email")}
      </div>
    ),
  },
  {
    header: "Phone",
    accessorKey: "phone",
    cell: (ctx) => ctx.getValue<string>(),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            aria-label="Row actions"
            className="hover:text-[#B5A7F0] hover:bg-transparent hover:cursor-pointer focus-visible:outline-none focus-visible:ring-0"
          >
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="rounded-md border border-[#2C2638] bg-[#4A4458] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
        >
          {menuItems.map(({ label, variant }) => (
            <DropdownMenuItem
              key={label}
              variant={variant}
              className={styles.dropdownMenuItem}
              // className="w-full cursor-pointer text-white capitalize border-none bg-transparent transition-all duration-200 ease-in-out hover:outline-none hover:text-[#B5A7F0] hover:bg-[rgba(181,167,240,0.1)]"
            >
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
