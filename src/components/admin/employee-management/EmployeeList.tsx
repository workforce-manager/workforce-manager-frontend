import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import { Employee } from "@/shared/interfaces/employee.interface";

export function EmployeeList({ employees }: { employees: Employee[] }) {
  if (!employees.length) {
    return <p className="text-center py-6">No results.</p>;
  }

  return (
    <div>
      <Card className="p-0 rounded gap-0 w-[350px] border-0 bg-[#4A4458]">
        <CardHeader className="flex items-center justify-between px-6 py-4 border-b border-[#836fd240]">
          <h1 className="text-xl font-semibold text-[#B5A7F0]">
            John Doe
          </h1>
          <MoreVertical className="size-6 text-[#B5A7F0] cursor-pointer" />
        </CardHeader>
        <CardContent className="p-0 divide-y divide-[#836fd240] text-[#E0E0E0]">
          <div className="grid grid-cols-[120px_1fr] px-6 py-4">
            <span className="font-medium">Email</span>
            <span className="truncate">john.doe@example.com</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] px-6 py-4">
            <span className="font-medium">Mobile</span>
            <span>+1 (555) 101-0101</span>
          </div>
        </CardContent>
        <CardFooter className="p-0">
          <button className="w-full px-6 py-4 text-[16px] font-semibold rounded-none bg-[#B5A7F0] text-[#2C2638] transition-all duration-300 hover:bg-[#9B8AE8] cursor-pointer">
            Send a message
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
