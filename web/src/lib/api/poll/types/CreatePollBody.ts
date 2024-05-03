export interface CreatePollBody {
  title: string;
  description: string;
  options: { title: string }[];
}
