import request from "@/utils/request";


export function articles() {
  return request.get('/articles')
}

