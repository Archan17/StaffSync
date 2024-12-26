import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router";
import Employee from "./pages/Employee";
import Project from "./pages/Project";
import Team from "./pages/Team";
import Department from "./pages/Department";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/department" element={<Department />} />
      <Route path="/project" element={<Project />} />
      <Route path="/team" element={<Team />} />
      <Route path="/employee" element={<Employee />} />
    </Routes>
  );
};

export default App;
