
import request from "@/utils/request";

export function photos() {
  return request.get('/photos')
}