import Dexie, { type Table } from "dexie";
import { type Project } from "../types/project";

class OfflineDB extends Dexie {
  projects!: Table<Project, string>;

  constructor() {
    super("Build60DB");
    this.version(1).stores({
      projects: "id, createdAt",
    });
  }
}

export const offlineDB = new OfflineDB();
