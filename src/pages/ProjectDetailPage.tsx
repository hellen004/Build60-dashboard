import { useParams } from "react-router-dom";
import { useProjectStore } from "../store/useProjectStore";

export const ProjectDetailPage = () => {
  const { id } = useParams();

  const project = useProjectStore((s) =>
    s.projects.find((p) => p.id === id)
  );

  if (!project) {
    return <p className="p-6">Project not found</p>;
  }

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">{project.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.media.map((item) =>
          item === "video" ? (
            <video
              key={item.url}
              src={item.url}
              controls
              className="rounded-xl"
            />
          ) : (
            <img
              key={item.url}
              src={item.url}
              className="rounded-xl"
              alt=""
            />
          )
        )}
      </div>
    </div>
  );
};
