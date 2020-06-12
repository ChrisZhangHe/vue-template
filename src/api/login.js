import { get, post } from "./http";

export const apiLogin = params => get("/api/getUser", params);
export const apiGetUserInfo = params => post("/api/addUser", params);
