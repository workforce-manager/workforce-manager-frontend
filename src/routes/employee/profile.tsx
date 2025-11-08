import { createFileRoute } from "@tanstack/react-router";
import { Profile } from "@/components/employee/profile/Profile";

export const Route = createFileRoute("/employee/profile")({
  component: EmployeeProfile,
});

function EmployeeProfile() {
  return <Profile />;
}
