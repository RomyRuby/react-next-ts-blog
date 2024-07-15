import request from "@/utils/request";
import { SignUpParams, LoginParams } from "@/types/user";


export function signUp(params: SignUpParams) {
  return request.post('http://localhost:8080/users/signUp', params)
}


export function login(params: LoginParams) {
  return request.post('http://localhost:8080/users/login', params)
}


export function getUserInfo(token: string) {
  return request.get('http://localhost:8080/users/info', {
    headers: {
      'Authorization': token
    }
  })
}