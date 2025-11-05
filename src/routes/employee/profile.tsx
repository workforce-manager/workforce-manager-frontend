import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/employee/profile")({
  component: EmployeeProfile,
});

function EmployeeProfile() {
  return <div>Employee Profile</div>;
}
