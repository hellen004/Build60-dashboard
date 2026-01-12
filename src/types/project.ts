export type MediaType = "IMAGE" | "VIDEO";

export type Media = {
  url: string;
  type: MediaType;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  completionDate: string;
  liveUrl?: string;
  repoUrl?: string;
  technologies: string[];
  skills: string[];
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  media: Media[];
  createdAt: string;
};
