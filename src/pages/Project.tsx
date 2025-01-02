import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Button } from "../components/ui/button";
import AddProjectModal from "../components/AddProject";
import { projects } from "../utility/projectData";

interface ProjectType {
  name: string;
  department: string;
  manager: string;
  startDate: string;
  endDate: string;
  status: string;
  description: string;
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState<ProjectType>({
    name: "",
    department: "",
    manager: "",
    startDate: "",
    endDate: "",
    status: "",
    description: "",
  });

  const handleDelete = (projectName: string) => {
    console.log(
      `Project ${projectName} deleted successfully. Status code: 200`
    );
  };

  const handleAdd = () => {
    console.log(
      `Project ${newProject.name} added successfully. Status code: 200`
    );
    setIsModalOpen(false);
  };

  const departments = ["IT", "HR", "Finance", "Marketing"];
  const managers = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Project Management</h1>
          <p className="text-sm text-gray-600">
            Manage your projects effectively
          </p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white"
        >
          Add Project
        </Button>
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Project Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Project Manager</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project: ProjectType, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-lg">
                {project.name}
              </TableCell>
              <TableCell>{project.department}</TableCell>
              <TableCell>{project.manager}</TableCell>
              <TableCell>{project.startDate}</TableCell>
              <TableCell>{project.endDate}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell className="text-right">
                <button
                  className="mr-2"
                  onClick={() => handleDelete(project.name)}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button onClick={() => handleDelete(project.name)}>
                  <i className="fas fa-trash"></i>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        newProject={newProject}
        setNewProject={setNewProject}
        handleAdd={handleAdd}
        departments={departments}
        managers={managers}
      />
    </div>
  );
};

export default Project;
