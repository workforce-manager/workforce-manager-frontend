import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useState } from "react";
import { TASKS_DATA } from "./tasks";
import { IColumn } from "./kanban.types";
import { KANBAN_DATA } from "./kanban.data";
import { EnumStatus } from "@/shared/types/tasks.type";

export function TasksKanban() {
  const [columns, setColumns] = useState<IColumn[]>(() => {
    return KANBAN_DATA.map((column) => ({
      ...column,
      items: TASKS_DATA.filter((task) => task.status === column.id),
    }));
  });

  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  function handleDragStart(taskId: string) {
    setDraggedTaskId(taskId);
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleDrop(targetColumnId: EnumStatus) {
    if (!draggedTaskId) return;

    const draggedTask = columns
      .flatMap((column) => column.items)
      .find((task) => task.id === draggedTaskId);

    if (!draggedTask) return;

    const sourceColumnId = draggedTask.status;

    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.id === sourceColumnId) {
          return {
            ...column,
            items: column.items.filter((task) => task.id !== draggedTaskId),
          };
        }

        if (column.id === targetColumnId) {
          return {
            ...column,
            items: [...column.items, { ...draggedTask, status: targetColumnId }],
          };
        }

        return column;
      })
    );

    setDraggedTaskId(null);
  }

  return (
    <div className="h-full flex flex-col">
      <h1 className="font-bold py-8 text-[30px] text-[#B5A7F0]">
        Task Assignments
      </h1>
      <div className="grid grid-cols-4 justify-items-center gap-16 flex-1">
        {columns.map((column) => (
          <div
            key={column.id}
            className="w-64"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(column.id)}
          >
            <div className="rounded bg-slate-700 py-1 px-5 text-center text-lg mb-4">
              {column.name}
            </div>
            <div>
              {column.items.map((task) => (
                <Card
                  key={task.id}
                  draggable="true"
                  onDragStart={() => handleDragStart(task.id)}
                >
                  <CardHeader>{task.title}</CardHeader>
                  <CardContent>{task.description}</CardContent>
                  <CardFooter>{task.dueDate}</CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
