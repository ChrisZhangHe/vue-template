import { get, post } from "../http";

const apiLogin = params => get("", params);
const apiGetUserInfo = params => post("", params);

export { apiLogin, apiGetUserInfo };
