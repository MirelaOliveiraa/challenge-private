import api from "../../services";

class LoginServices {
  static create(data) {
    return api.post("/login", data);
  }
}
export default LoginServices;
