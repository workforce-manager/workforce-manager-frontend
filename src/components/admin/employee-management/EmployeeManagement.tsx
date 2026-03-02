import { columns } from "./columns";
import { EmployeeList } from "./EmployeeList";
import { EmployeeTable } from "./EmployeeTable";
import { useQuery } from "@tanstack/react-query";
import { getAllEmployees, GET_ALL_EMPLOYEES } from "@/api/employees";

export function EmployeeManagement() {
  const {
    data: employees,
    error: employeesError,
    isError: isEmployeesError,
  } = useQuery({
    queryKey: [GET_ALL_EMPLOYEES],
    queryFn: () => getAllEmployees(),
  });

  return (
    <>
      <div className="hidden md:block">
        <EmployeeTable
          columns={columns}
          employees={employees ?? []}
          employeesError={employeesError}
          isEmployeesError={isEmployeesError}
        />
      </div>
      <div className="md:hidden">
        <EmployeeList employees={employees ?? []} />
      </div>
    </>
  )
}
