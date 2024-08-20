import request from "@/utils/request";


export function qwenChat(params: { message: string }) {
  return request.post('/qwen', params)
}

