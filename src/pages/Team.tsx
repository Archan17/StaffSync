import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Button } from "@/components/ui/button";
import AddTeamModal from "@/components/AddTeamModal";
import { teams } from "../utility/teamData";

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTeam, setNewTeam] = useState({
    name: "",
    project: "",
    leader: "",
    members: 0,
    department: "",
  });

  const handleDelete = (teamName: string) => {
    console.log(`Team ${teamName} deleted successfully. Status code: 200`);
  };

  const handleAdd = () => {
    console.log(`Team ${newTeam.name} added successfully. Status code: 200`);
    setIsModalOpen(false);
  };

  const projects = ["Project Alpha", "Project Beta", "Project Gamma"];
  const leaders = ["John Doe", "Jane Smith", "Alice Johnson"];
  const departments = ["IT", "HR", "Finance", "Marketing"];

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Team Management</h1>
          <p className="text-sm text-gray-600">Manage your teams effectively</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white"
        >
          Add Team
        </Button>
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Team Name</TableHead>
            <TableHead>Assigned Project</TableHead>
            <TableHead>Team Leader</TableHead>
            <TableHead>Total Members</TableHead>
            <TableHead>Department</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-lg">{team.name}</TableCell>
              <TableCell>{team.project}</TableCell>
              <TableCell>{team.leader}</TableCell>
              <TableCell>{team.members}</TableCell>
              <TableCell>{team.department}</TableCell>
              <TableCell className="text-right">
                <button
                  className="mr-2"
                  onClick={() => handleDelete(team.name)}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button onClick={() => handleDelete(team.name)}>
                  <i className="fas fa-trash"></i>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AddTeamModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        newTeam={newTeam}
        setNewTeam={setNewTeam}
        handleAdd={handleAdd}
        projects={projects}
        leaders={leaders}
        departments={departments}
      />
    </div>
  );
};

export default Team;
