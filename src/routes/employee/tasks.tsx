import { createFileRoute } from "@tanstack/react-router";
import { Tasks } from "@/components/employee/tasks/Tasks";

export const Route = createFileRoute("/employee/tasks")({
  component: EmployeeTasks,
});

function EmployeeTasks() {
  return <Tasks />;
}
