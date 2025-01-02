interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 max-w-2xl w-full">
        {children}
      </div>
    </div>
  );
};

export default ProjectModal;
