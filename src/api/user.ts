import request from "@/utils/request";
import { SignUp } from "@/types/user";


export function signUp(params: SignUp) {
  return request.post('http://localhost:8080/users/signUp', params)
}



