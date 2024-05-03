import { Gender } from "@/types/gender";

export interface RegisterBody {
  username: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  password: string;
}
