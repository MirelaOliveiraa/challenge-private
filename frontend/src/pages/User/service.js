import api from "../../services";

class UserServices {
  static list(id) {
    return api.get(`/users/${id}`);
  }
}
export default UserServices;
