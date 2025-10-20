import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/admin/dashboard/Dashboard";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboard,
});

function AdminDashboard() {
  return <Dashboard />;
}
