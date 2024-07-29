import request from "@/utils/request";
import { SignUpParams, LoginParams } from "@/types/user";


export function signUp(params: SignUpParams) {
  return request.post('http://localhost:8080/users/signUp', params)
}

export function login(params: LoginParams) {
  return request.post('http://localhost:8080/users/login', params)
}

export function getUserInfo() {
  return request.get('http://localhost:8080/users/info')
}

export function createRequest(cookiesMethod?: any) {
  if (cookiesMethod) {
    const token = cookiesMethod().get("token")?.value || "";
    request.defaults.headers.common["Authorization"] = token;
  } else {
    request.defaults.headers.common["Authorization"] = '';
  }

  return request;
}

export function userModel(cookiesMethod?: any) {
  const request = createRequest(cookiesMethod);

  function signUp(params: SignUpParams) {
    return request.post('http://localhost:8080/users/signUp', params)
  }

  function login(params: LoginParams) {
    return request.post('http://localhost:8080/users/login', params)
  }

  function getUserInfo() {
    return request.get('http://localhost:8080/users/info')
  }

  return { signUp, login, getUserInfo }
}