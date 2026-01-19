import { useProjectStore } from "../../store/useProjectStore";

export const Dashboard = () => {
  const projects = useProjectStore((s) => s.projects);
  const progress = Math.round((projects.length / 60) * 100);

  return (
    <div className="space-y-6">
      <div className="bg-zinc-900 p-6 rounded-xl">
        <h1 className="text-2xl font-bold">Build 60 Dashboard</h1>
        <p className="mt-2">{projects.length} / 60 Projects</p>

        <div className="w-full bg-zinc-800 h-3 rounded mt-2">
            <div
                className="bg-green-500 h-3 rounded"
                style={{ width: `${progress}%` }}
            />
        </div>
      </div>

        <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p) => (
                <div
                    key={p.id} 
                    className="bg-zinc-900 p-4 rounded hover:scale-[1.02] transition"
                >
                  {p.media[0]?.type === "IMAGE" ? (
                    <img
                      src={p.media[0].url}
                      className="rounded mb-2 h-32 w-full object-cover"
                    />
                  ) : (
                    <video
                          src={p.media[0].url}
                          className="rounded mb-2 h-32 w-full object-cover"
                          muted
                          loop
                    />
                )}


                  <h3 className="font-semibold">{p.title}</h3>

                  <div className="flex gap-2 mt-2 flex-wrap">
                     {p.technologies.map((t) => (
                       <span
                        key={t}
                        className="text-xs bg-zinc-800 px-2 py-1 rounded"
                       >
                        {t}
                       </span>
                    ))}
                  </div>
                </div>
            ))}
        </div>

    </div>
  );
};
