import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex space-x-4 p-4 bg-slate-50">
      <Link to="/department" className="hover:underline">
        Department
      </Link>
      <Link to="/project" className="hover:underline">
        Project
      </Link>
      <Link to="/team" className="hover:underline">
        Team
      </Link>
      <Link to="/employee" className="hover:underline">
        Employee
      </Link>
    </nav>
  );
};

export default Navbar;
