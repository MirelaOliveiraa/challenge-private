import api from "../../services";

class LoginServices {
  static list() {
    return api.get("/login");
  }

  static create(data) {
    return api.post("/login", data);
  }
}
export default LoginServices;
