import React from "react";
import Modal from "./Modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AddEmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  newEmployee: {
    name: string;
    position: string;
    department: string;
    status: string;
    teamName: string;
  };
  setNewEmployee: (employee: {
    name: string;
    position: string;
    department: string;
    status: string;
    teamName: string;
  }) => void;
  handleAdd: () => void;
}

const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({
  isOpen,
  onClose,
  newEmployee,
  setNewEmployee,
  handleAdd,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full max-w-2xl p-6">
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
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddEmployeeModal;
