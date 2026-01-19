export type UploadedMedia = {
  url: string;
  type: "IMAGE" | "VIDEO";
};

export type Media = {
  url: string;
  type: UploadedMedia;
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
