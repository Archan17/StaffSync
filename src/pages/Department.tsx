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
import DepartmentModal from "@/components/AddDepartmentModal";
import { departments } from "../utility/departmentData";

const Department = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDepartment, setNewDepartment] = useState({
    name: "",
    director: "",
    numberOfTeams: 0,
    numberOfProjects: 0,
    employeesCount: 0,
  });

  const handleDelete = (departmentName: string) => {
    console.log(
      `Department ${departmentName} deleted successfully. Status code: 200`
    );
  };

  const handleAdd = () => {
    console.log(
      `Department ${newDepartment.name} added successfully. Status code: 200`
    );
    setIsModalOpen(false);
  };

  const directors = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Department Management</h1>
          <p className="text-sm text-gray-600">
            Manage your departments effectively
          </p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white"
        >
          Add Department
        </Button>
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Department Name</TableHead>
            <TableHead className="w-[200px]">Director</TableHead>
            <TableHead className="w-[250px] text-center">
              Number of Projects
            </TableHead>
            <TableHead className="w-[200px] text-center">
              Number of Teams
            </TableHead>
            <TableHead className="w-[200px] text-center">
              Employees Count
            </TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {departments.map((department, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-lg">
                {department.name}
              </TableCell>
              <TableCell>{department.director}</TableCell>
              <TableCell className="text-center w-[250px]">
                {department.projects}
              </TableCell>
              <TableCell className="text-center w-[200px]">
                {department.teams}
              </TableCell>
              <TableCell className="text-center w-[200px]">
                {department.employeesCount}
              </TableCell>
              <TableCell className="text-right">
                <button
                  className="mr-2"
                  onClick={() => handleDelete(department.name)}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button onClick={() => handleDelete(department.name)}>
                  <i className="fas fa-trash"></i>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <DepartmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        newDepartment={newDepartment}
        setNewDepartment={setNewDepartment}
        handleAdd={handleAdd}
        directors={directors}
      />
    </div>
  );
};

export default Department;
