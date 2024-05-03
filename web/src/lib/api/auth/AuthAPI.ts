import { Token } from "@/types/token";
import { client } from "../instance";
import { LoginBody } from "./types/LoginBody";
import { RegisterBody } from "./types/RegisterBody";
import { User } from "@/types/user";
import { getAuthorizationHeader } from "../utils";

class AuthAPI {
  async register(body: RegisterBody) {
    const { data } = await client.post<void>("/auth/register", body);
    return data;
  }

  async login(body: LoginBody) {
    const { data } = await client.post<Token>("auth/login", body);
    return data;
  }

  async getMe() {
    const { data } = await client.get<User>(
      "/auth/me",
      getAuthorizationHeader()
    );
    return data;
  }
}

export default new AuthAPI();
