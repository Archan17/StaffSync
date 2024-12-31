import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="bg-slate-50 mb-6">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <span className="font-bold text-lg">Logo</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center text-sm px-2 py-1 bg-slate-50">
                  Overview
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute mt-2 w-64 rounded shadow-lg z-50">
                  <NavigationMenuLink asChild>
                    <Link to="/department" className="block px-4 py-2 text-sm ">
                      Department
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/project" className="block px-4 py-2 text-sm ">
                      Project
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/team" className="block px-4 py-2 text-sm ">
                      Team
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/employee"
                      className="block px-4 py-2 mb-2 text-sm "
                    >
                      Employee
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/management"
                    className="px-2 py-1 text-sm hover:underline"
                  >
                    Management
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/support"
                    className="px-2 py-1 text-sm hover:underline"
                  >
                    Support
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
