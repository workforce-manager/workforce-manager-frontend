import type { EnumStatus } from "@/shared/types/tasks.type";

export interface ITask {
  id: string;
  status: EnumStatus;
  title: string;
  dueDate: string;
  description: string;
}

export interface IColumn {
  id: EnumStatus;
  name: string;
  items: ITask[];
}
