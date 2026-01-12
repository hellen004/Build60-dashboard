import { UploadProjectForm } from "./components/projects/UploadProjectForm";
import { Dashboard } from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <UploadProjectForm />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
