import request from "@/utils/request";


export function articles() {
  return request.get('/articles')
}

export function getArticle(id: string) {
  return request.get('/article/' + id)
}