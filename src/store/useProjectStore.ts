import { create } from "zustand";
import { type Project } from "../types/project";

type ProjectStore = {
  projects: Project[];
  addProject: (project: Project) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  addProject: (project) =>
    set((state) => ({ projects: [project, ...state.projects] })),
}));
