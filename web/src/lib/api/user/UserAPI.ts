import { User } from "@/types/user";
import { client } from "../instance";

class UserAPI {
  async getUserById(id: string) {
    const { data } = await client.get<User>(`/users/${id}`);
    return data;
  }
}

export default new UserAPI();
