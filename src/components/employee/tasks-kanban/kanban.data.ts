import { EnumStatus } from "@/shared/types/tasks.type";
import type { IColumn } from "./kanban.types";

export const KANBAN_DATA: IColumn[] = [
  {
    id: EnumStatus.TODO,
    name: "To Do",
    items: [],
  },
  {
    id: EnumStatus.IN_PROGRESS,
    name: "In Progress",
    items: [],
  },
  {
    id: EnumStatus.REVIEW,
    name: "In Review",
    items: [],
  },
  {
    id: EnumStatus.DONE,
    name: "Done",
    items: [],
  },
];
