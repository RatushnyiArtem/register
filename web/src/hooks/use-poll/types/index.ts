import { Poll } from "@/types/poll";

export interface PollContextProps {
  id?: string;
  isUpdatePage?: boolean;
  poll: Poll | null;
  update: () => Promise<void>;
}

export type PollProviderProps = Pick<PollContextProps, "id" | "isUpdatePage">;
