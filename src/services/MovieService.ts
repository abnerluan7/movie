import http from '@/infra/http-common'

import { HttpResponse } from '@/types/Http'
import { IMovies } from '@/types/Movies'

export const getAllMovies = async (): Promise<HttpResponse<IMovies[]>> => {
  let params: string = ''
  params += `_page=${1}`
  params += `&_limit=${20}`
  if (false) {
    params += `&title=${'name'}`
  }
  return await http.get<IMovies[]>(`movies?${params}`)
}
