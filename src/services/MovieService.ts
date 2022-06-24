import http from '@/infra/http-common'

import { HttpResponse } from '@/types/Http'
import { IMovies } from '@/types/Movies'

type Query = {
  size: number
  search: string
}
export const getAllMovies = async ({
  size,
  search
}: Query): Promise<HttpResponse<IMovies[]>> => {
  let params: string = ''
  params += `_page=${1}`
  params += `&_limit=${size}`
  if (search.length > 3) {
    params += `&title=${search}`
  }
  return await http.get<IMovies[]>(`movies?${params}`)
}
