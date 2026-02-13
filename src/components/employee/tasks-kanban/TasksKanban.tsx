import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useState } from "react";
import { TASKS_DATA } from "./tasks";
import { ITask } from "./kanban.types";
import { KANBAN_DATA } from "./kanban.data";
import { EnumStatus } from "@/shared/types/tasks.type";

export function TasksKanban() {
  const [tasks, setTasks] = useState<ITask[]>(TASKS_DATA);
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  function handleDragStart(taskId: string) {
    setDraggedTaskId(taskId);
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleDrop(columnId: EnumStatus) {
    if (!draggedTaskId) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === draggedTaskId
          ? { ...task, status: columnId }
          : task
      )
    );

    setDraggedTaskId(null);
  }

  return (
    <div className="h-full flex flex-col">
      <h1 className="font-bold py-8 text-[30px] text-[#B5A7F0]">
        Task Assignments
      </h1>
      <div className="grid grid-cols-4 justify-items-center gap-16 flex-1">
        {KANBAN_DATA.map((column) => (
          <div
            key={column.id}
            className="max-w-64"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(column.id)}
          >
            <div className="rounded bg-slate-700 py-1 px-5 text-center text-lg mb-4">
              {column.name}
            </div>
            <div>
              {tasks.filter((task) => task.status === column.id).map((task) => (
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
