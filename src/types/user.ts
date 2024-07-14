export type SignUpParams = {
  username: string, password: string, confirmPassword: string, email: string, wx?: string, phone?: string
}

export type LoginParams = {
  password: string, email: string
}