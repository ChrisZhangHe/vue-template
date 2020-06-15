/* eslint-disable import/prefer-default-export */
import { isPhone as phoneRule } from "./validate";

export function isPhone(rule, value, callback) {
  if (phoneRule(value)) {
    callback();
  } else {
    callback(new Error("请输入11位正确的手机号"));
  }
}
