import { UploadProjectForm } from "../components/projects/UploadProjectForm";
import { ProjectGrid } from "../components/projects/ProjectGrid";

export const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6">
      <UploadProjectForm />
      <ProjectGrid />
    </div>
  );
};
