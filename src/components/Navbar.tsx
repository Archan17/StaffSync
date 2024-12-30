import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-slate-50 mb-6">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <span className="font-bold text-lg">Logo</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-sm px-2 py-1"
            >
              Overview{" "}
              <i
                className={`fas fa-chevron-${
                  isDropdownOpen ? "up" : "down"
                } ml-1`}
              ></i>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-50">
                <Link
                  to="/department"
                  className="block px-2 py-1 text-sm hover:bg-gray-100"
                >
                  Department
                </Link>
                <Link
                  to="/project"
                  className="block px-2 py-1 text-sm hover:bg-gray-100"
                >
                  Project
                </Link>
                <Link
                  to="/team"
                  className="block px-2 py-1 text-sm hover:bg-gray-100"
                >
                  Team
                </Link>
                <Link
                  to="/employee"
                  className="block px-2 py-1 text-sm hover:bg-gray-100"
                >
                  Employee
                </Link>
              </div>
            )}
          </div>
          <Link to="/management" className="px-2 py-1 text-sm hover:underline">
            Management
          </Link>
          <Link to="/support" className="px-2 py-1 text-sm hover:underline">
            Support
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-1 border rounded"
          />
          <button className="hover:underline">Profile</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
