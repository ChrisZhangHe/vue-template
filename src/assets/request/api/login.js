import { get, post } from "../http";

const apiLogin = params => get("/api/getUser", params);
const apiGetUserInfo = params => post("/api/addUser", params);

export { apiLogin, apiGetUserInfo };
