import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/project/:id" element={<ProjectDetailPage />} />
    </Routes>
  );
}

export default App;
