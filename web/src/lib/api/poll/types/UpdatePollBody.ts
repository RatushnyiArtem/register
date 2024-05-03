import { State } from "@/types/state";

export interface UpdatePollBody {
  title?: string;
  description?: string;
  options?: {
    id: string;
    title: string;
  }[];
  state?: State;
}
