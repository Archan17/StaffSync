import ProjectModal from "./ProjectModal";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  newProject: {
    name: string;
    department: string;
    manager: string;
    startDate: string;
    endDate: string;
    status: string;
    description: string;
  };
  setNewProject: React.Dispatch<
    React.SetStateAction<{
      name: string;
      department: string;
      manager: string;
      startDate: string;
      endDate: string;
      status: string;
      description: string;
    }>
  >;
  handleAdd: () => void;
  departments: string[];
  managers: string[];
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  newProject,
  setNewProject,
  handleAdd,
  departments,
  managers,
}) => {
  return (
    <ProjectModal isOpen={isOpen} onClose={onClose}>
      <div className="w-full max-w-2xl p-6 relative">
        <h2 className="text-xl mb-4">Add Project</h2>

        <Input
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
          className="mb-4"
        />

        <label className="block text-sm font-medium mb-1">Department</label>
        <select
          value={newProject.department}
          onChange={(e) =>
            setNewProject({ ...newProject, department: e.target.value })
          }
          className="mb-4 p-2 border border-gray-300 rounded text-sm"
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <label className="block text-sm font-medium mb-1">Manager</label>
        <select
          value={newProject.manager}
          onChange={(e) =>
            setNewProject({ ...newProject, manager: e.target.value })
          }
          className="mb-4 p-2 border border-gray-300 rounded text-sm"
        >
          {managers.map((manager) => (
            <option key={manager} value={manager}>
              {manager}
            </option>
          ))}
        </select>

        <label className="block text-sm font-medium mb-1">Start Date</label>
        <Input
          type="date"
          value={newProject.startDate}
          onChange={(e) =>
            setNewProject({ ...newProject, startDate: e.target.value })
          }
          className="mb-4"
        />

        <label className="block text-sm font-medium mb-1">End Date</label>
        <Input
          type="date"
          value={newProject.endDate}
          onChange={(e) =>
            setNewProject({ ...newProject, endDate: e.target.value })
          }
          className="mb-4"
        />

        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          value={newProject.status}
          onChange={(e) =>
            setNewProject({ ...newProject, status: e.target.value })
          }
          className="mb-4 p-2 border border-gray-300 rounded text-sm"
        >
          <option value="On Hold">On Hold</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Postponed">Postponed</option>
        </select>

        <label className="block text-sm font-medium mb-1">Description</label>
        <Input
          placeholder="Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
          className="mb-4"
        />

        <div className="flex justify-end space-x-4 mt-6">
          <Button onClick={handleAdd} className="bg-black text-white px-4 py-2">
            Add
          </Button>
          <Button
            variant="secondary"
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2"
          >
            Cancel
          </Button>
        </div>
      </div>
    </ProjectModal>
  );
};

export default AddProjectModal;
