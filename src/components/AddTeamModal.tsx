import { Dispatch, SetStateAction } from "react";

interface AddTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  newTeam: {
    name: string;
    project: string;
    leader: string;
    members: number;
    department: string;
  };
  setNewTeam: Dispatch<
    SetStateAction<{
      name: string;
      project: string;
      leader: string;
      members: number;
      department: string;
    }>
  >;
  handleAdd: () => void;
  projects: string[];
  leaders: string[];
  departments: string[];
}

const AddTeamModal: React.FC<AddTeamModalProps> = ({
  isOpen,
  onClose,
  newTeam,
  setNewTeam,
  handleAdd,
  projects,
  leaders,
  departments,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Add Team</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Team Name:</label>
            <input
              type="text"
              value={newTeam.name}
              onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter team name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Assigned Project:
            </label>
            <select
              value={newTeam.project}
              onChange={(e) =>
                setNewTeam({ ...newTeam, project: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Project</option>
              {projects.map((project, index) => (
                <option key={index} value={project}>
                  {project}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Team Leader:
            </label>
            <select
              value={newTeam.leader}
              onChange={(e) =>
                setNewTeam({ ...newTeam, leader: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Leader</option>
              {leaders.map((leader, index) => (
                <option key={index} value={leader}>
                  {leader}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Total Members:
            </label>
            <input
              type="number"
              value={newTeam.members}
              onChange={(e) =>
                setNewTeam({
                  ...newTeam,
                  members: parseInt(e.target.value) || 0,
                })
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter total members"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Department:
            </label>
            <select
              value={newTeam.department}
              onChange={(e) =>
                setNewTeam({ ...newTeam, department: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Department</option>
              {departments.map((department, index) => (
                <option key={index} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAdd}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeamModal;
