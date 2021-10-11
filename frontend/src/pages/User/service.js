import api from "../../services";

class UserServices {
  static list(id) {
    return api.get(`/user/${id}`);
  }
}
export default UserServices;
