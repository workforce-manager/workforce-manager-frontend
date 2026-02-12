import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { TASKS_DATA } from "./tasks";
import { KANBAN_DATA } from "./kanban.data";

export function TasksKanban() {
  return (
    <div>
      <h1 className="font-bold py-8 text-[30px] text-[#B5A7F0]">
        Task Assignments
      </h1>
      <div className="grid grid-cols-4 justify-items-center gap-16">
        {KANBAN_DATA.map((column) => (
          <div key={column.id} className="max-w-64">
            <div className="rounded bg-slate-700 py-1 px-5 text-center text-lg mb-4">
              {column.name}
            </div>
            <div>
              {TASKS_DATA.filter((task) => task.status === column.id).map((task) => (
                <Card key={task.id}>
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
