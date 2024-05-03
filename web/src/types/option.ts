import { Vote } from "./vote";

export interface Option {
  id: string;
  title: string;
  pollId: string;
  votes?: Vote[];
  createdAt: Date;
  updatedAt: Date;
}
