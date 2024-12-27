import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Modal from "../utility/Modal";
import { Input } from "@/components/ui/input";
import Navbar from "./Navbar";

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

  const employees = [
    {
      name: "Person 1",
      position: "Software Engineer",
      department: "Engineering",
      status: "Active",
      teamName: "Alpha1",
    },
    {
      name: "Person 2",
      position: "Product Manager",
      department: "Product",
      status: "On Leave",
      teamName: "Alpha2",
    },
    {
      name: "Person 3",
      position: "Designer",
      department: "Design",
      status: "Active",
      teamName: "Beta1",
    },
    {
      name: "Person 4",
      position: "QA Engineer",
      department: "Quality Assurance",
      status: "Inactive",
      teamName: "Beta2",
    },
    {
      name: "Person 5",
      position: "HR Manager",
      department: "Human Resources",
      status: "Active",
      teamName: "Gamma1",
    },
    {
      name: "Person 6",
      position: "Marketing Specialist",
      department: "Marketing",
      status: "Active",
      teamName: "Gamma2",
    },
    {
      name: "Person 7",
      position: "Data Analyst",
      department: "Data",
      status: "Active",
      teamName: "Delta1",
    },
    {
      name: "Person 8",
      position: "DevOps Engineer",
      department: "Operations",
      status: "Inactive",
      teamName: "Delta2",
    },
    {
      name: "Person 9",
      position: "Business Analyst",
      department: "Business",
      status: "Active",
      teamName: "Epsilon1",
    },
    {
      name: "Person 10",
      position: "Project Manager",
      department: "Project Management",
      status: "Active",
      teamName: "Epsilon2",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <Button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600"
        >
          <i className="fas fa-plus"></i>
        </Button>
        <div className="flex items-center">
          <Table className="w-[900px]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
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
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.status}</TableCell>
                  <TableCell className="text-right">
                    {employee.teamName}
                  </TableCell>
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
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl mb-4">Add Employee</h2>
          <Input
            placeholder="Name"
            value={newEmployee.name}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, name: e.target.value })
            }
            className="mb-2"
          />
          <Input
            placeholder="Position"
            value={newEmployee.position}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, position: e.target.value })
            }
            className="mb-2"
          />
          <Input
            placeholder="Department"
            value={newEmployee.department}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, department: e.target.value })
            }
            className="mb-2"
          />
          <Input
            placeholder="Status"
            value={newEmployee.status}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, status: e.target.value })
            }
            className="mb-2"
          />
          <Input
            placeholder="Team Name"
            value={newEmployee.teamName}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, teamName: e.target.value })
            }
            className="mb-2"
          />
          <div className="flex justify-end">
            <Button onClick={handleAdd} className="mr-2">
              Add
            </Button>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Employee;
