import { EnumStatus } from "@/shared/types/tasks.type";
import type { ITask } from "./kanban.types";

export const TASKS_DATA: ITask[] = [
  {
    id: "task-1",
    title: "Prepare weekly report",
    description: "Collect metrics and prepare the performance report.",
    status: EnumStatus.TODO,
    dueDate: "10 February 2026",
  },
  {
    id: "task-2",
    title: "Update client documentation",
    description: "Revise onboarding guide with the latest process changes.",
    status: EnumStatus.IN_PROGRESS,
    dueDate: "08 February 2026",
  },
  {
    id: "task-3",
    title: "Fix login validation bug",
    description: "Resolve incorrect error handling on failed login attempts.",
    status: EnumStatus.DONE,
    dueDate: "03 February 2026",
  },
   {
    id: "task-4",
    title: "Review onboarding checklist",
    description: "Verify the onboarding checklist for completeness and accuracy.",
    status: EnumStatus.REVIEW,
    dueDate: "11 February 2026",
  },
  {
    id: "task-5",
    title: "Prepare presentation slides",
    description: "Create slides for the upcoming team meeting.",
    status: EnumStatus.IN_PROGRESS,
    dueDate: "09 February 2026",
  },
  {
    id: "task-6",
    title: "Close resolved support tickets",
    description: "Finalize and close tickets that were already resolved.",
    status: EnumStatus.DONE,
    dueDate: "05 February 2026",
  },
];
