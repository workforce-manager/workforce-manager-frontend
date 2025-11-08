import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/employee/tasks")({
  component: () => <div>Tasks</div>,
});
