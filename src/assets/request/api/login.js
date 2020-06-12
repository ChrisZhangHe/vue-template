import axios from "axios";
import { get, post } from "../http";

const apiLogin = params => get("/api/getUser", params);
const apiGetUserInfo = params => post("/api/addUser", params);
axios
  .get("/api/blade-auth/oauth/captcha")
  .then(() => {})
  .catch(e => console.log(e));

export { apiLogin, apiGetUserInfo };
