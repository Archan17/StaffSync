import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Department from "./pages/Department";
import Project from "./pages/Project";
import Team from "./pages/Team";
import Employee from "./pages/Employee";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/department" element={<Department />} />
          <Route path="/project" element={<Project />} />
          <Route path="/team" element={<Team />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
