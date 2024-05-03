import { Option } from "./option";
import { State } from "./state";

export interface Poll {
  id: string;
  title: string;
  description: string | null;
  state: State;
  options: Option[];
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}
