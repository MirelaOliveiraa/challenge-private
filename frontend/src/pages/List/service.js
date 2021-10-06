import api from "../../services";

class ListServices {
  static list() {
    return api.get("/users");
  }
}
export default ListServices;
