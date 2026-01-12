import { useState } from "react";
import { useProjectStore } from "../../store/useProjectStore";
import { type Project } from "../../types/project";
import { uploadToCloudinary } from "../../utils/cloudinaryUpload";

export const UploadProjectForm = () => {
  const addProject = useProjectStore((s) => s.addProject);

  const [title, setTitle] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [difficulty, setDifficulty] =
    useState<Project["difficulty"]>("BEGINNER");

  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    if (selected.length < 3) {
      alert("Upload at least 3 images or videos.");
      return;
    }
    setFiles(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length < 3) return;

    try {
      setLoading(true);

      // 🔹 Upload to Cloudinary
      const uploadedMedia = await uploadToCloudinary(files);

      const project: Project = {
        id: crypto.randomUUID(),
        title,
        description: "",
        completionDate: new Date().toISOString(),
        technologies,
        skills: [],
        difficulty,
        media: uploadedMedia,
        createdAt: new Date().toISOString(),
      };

      addProject(project);

      setTitle("");
      setTechnologies([]);
      setFiles([]);
      } catch (error: unknown) {
        console.error("UPLOAD ERROR:", error);
        const errorMessage = error instanceof Error ? error.message : "Upload failed. Check DevTools → Console for details.";
        alert(errorMessage);
      }
      finally {
      setLoading(false);
      }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 p-6 rounded-xl space-y-4"
    >
      <h2 className="text-xl font-semibold">Add New Project</h2>

      <input
        className="w-full p-2 rounded bg-zinc-800"
        placeholder="Project name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        className="w-full p-2 rounded bg-zinc-800"
        placeholder="Technologies (comma separated)"
        onChange={(e) =>
          setTechnologies(e.target.value.split(",").map((t) => t.trim()))
        }
      />

      <select
        className="w-full p-2 rounded bg-zinc-800"
        value={difficulty}
        onChange={(e) =>
          setDifficulty(e.target.value as Project["difficulty"])
        }
      >
        <option>BEGINNER</option>
        <option>INTERMEDIATE</option>
        <option>ADVANCED</option>
      </select>

      {/* Media Upload */}
      <input
        type="file"
        multiple
        accept="image/*,video/*"
        onChange={handleFileSelect}
        className="block w-full text-sm"
      />

      <button
        disabled={loading}
        className="bg-blue-600 px-4 py-2 rounded w-full disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Save Project"}
      </button>
    </form>
  );
};
