import api from "../../services";

class LoginServices {
  static list() {
    return api.get("/login");
  }
}
export default LoginServices;
