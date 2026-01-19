import { Link } from "react-router-dom";
import { type Project } from "../../types/project";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="block bg-zinc-900 p-4 rounded-xl hover:ring-2 ring-blue-500 transition"
    >
      <h3 className="font-semibold text-lg">{project.title}</h3>

      <p className="text-sm text-zinc-400 mt-1">
        {project.technologies.join(", ")}
      </p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-xs bg-zinc-800 px-2 py-1 rounded">
          {project.difficulty}
        </span>

        <span className="text-xs text-zinc-500">
          {new Date(project.createdAt).toLocaleDateString()}
        </span>
      </div>
    </Link>
  );
};
