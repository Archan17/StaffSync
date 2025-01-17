import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface DepartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  newDepartment: {
    name: string;
    director: string;
  };
  setNewDepartment: React.Dispatch<
    React.SetStateAction<{
      name: string;
      director: string;
    }>
  >;
  handleAdd: () => void;
  directors: string[];
}

const DepartmentModal: React.FC<DepartmentModalProps> = ({
  isOpen,
  onClose,
  newDepartment,
  setNewDepartment,
  handleAdd,
  directors,
}) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        !isOpen && "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 max-w-2xl w-full">
        <h2 className="text-xl mb-4">Add Department</h2>
        <Input
          placeholder="Department Name"
          value={newDepartment.name}
          onChange={(e) =>
            setNewDepartment({ ...newDepartment, name: e.target.value })
          }
          className="mb-4"
        />
        <label className="block text-sm font-medium mb-1">Director</label>
        <select
          value={newDepartment.director}
          onChange={(e) =>
            setNewDepartment({ ...newDepartment, director: e.target.value })
          }
          className="mb-4 p-2 border border-gray-300 rounded text-sm"
        >
          {directors.map((director) => (
            <option key={director} value={director}>
              {director}
            </option>
          ))}
        </select>
        <div className="flex justify-end">
          <Button onClick={handleAdd} className="mr-2">
            Add
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentModal;
