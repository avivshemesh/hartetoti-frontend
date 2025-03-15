import { post } from "./base";

export default {
  login: (body: any) => post("auth/login", body),
  register: (body: any) => post("auth/register", body),
};
