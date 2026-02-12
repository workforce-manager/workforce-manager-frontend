import { createFileRoute } from "@tanstack/react-router";
import { TasksKanban } from "@/components/employee/tasks-kanban/TasksKanban";

export const Route = createFileRoute("/employee/tasks")({
  component: EmployeeTasks,
});

function EmployeeTasks() {
  return <TasksKanban />;
}
