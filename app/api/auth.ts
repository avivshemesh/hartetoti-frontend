import { post } from "./base";

export default {
    login: (data: any) => post('/login', data)
}