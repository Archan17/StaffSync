import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import AddEmployeeModal from "../components/AddEmployee";
import { employees } from "../utility/employeeData";

const Employee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    department: "",
    status: "",
    teamName: "",
  });

  const handleDelete = (employeeName: string) => {
    console.log(
      `Employee ${employeeName} deleted successfully. Status code: 200`
    );
  };

  const handleAdd = () => {
    console.log(
      `Employee ${newEmployee.name} added successfully. Status code: 200`
    );
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">Employee Management</h1>
          <h2 className="text-gray-600">Manage your employees effectively</h2>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white"
        >
          Onboard Employee
        </Button>
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Team Name</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-lg">
                {employee.name}
              </TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.status}</TableCell>
              <TableCell className="text-right">{employee.teamName}</TableCell>
              <TableCell className="text-right">
                <button
                  className="mr-2"
                  onClick={() => handleDelete(employee.name)}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button onClick={() => handleDelete(employee.name)}>
                  <i className="fas fa-trash"></i>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AddEmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        newEmployee={newEmployee}
        setNewEmployee={setNewEmployee}
        handleAdd={handleAdd}
      />
    </div>
  );
};

export default Employee;
