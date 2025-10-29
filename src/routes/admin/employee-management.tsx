import { createFileRoute } from "@tanstack/react-router";
import { EmployeeManagement } from "@/components/admin/employee-management/EmployeeManagement";

export const Route = createFileRoute("/admin/employee-management")({
  component: AdminEmployeeManagement,
});

function AdminEmployeeManagement() {
  return <EmployeeManagement />;
}
