import { useProjectStore } from "../../store/useProjectStore";
import { ProjectCard } from "./ProjectsCard";


export const ProjectGrid = () => {
  const projects = useProjectStore((s) => s.projects);

  if (projects.length === 0) {
    return (
      <p className="text-zinc-400 text-center">
        No projects yet. Upload your first one 🚀
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
