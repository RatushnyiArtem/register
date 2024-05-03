import StorageUtil from "@/lib/utils/StorageUtil";
import AuthAPI from "@/lib/api/auth/AuthAPI";
import { LoginBody } from "../../api/auth/types/LoginBody";

class AuthService {
  static async login(data: LoginBody) {
    const { accessToken } = await AuthAPI.login(data);
    StorageUtil.setToken(accessToken);
  }

  static async logout() {
    StorageUtil.removeToken();
  }
}

export default AuthService;
