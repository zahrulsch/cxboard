import client from './client'
import axios from 'axios'

export interface RequesterOptions<Data=any, Err=Error> {
  onSuccess?: (data: Data) => void
  onError?: (e?: Err) => void
  onLoading?: (loading: boolean) => void
}

type Methods = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";

export function requester<DataResponse=any, ErrorResponse=any, Variable=any>(endpoint: string, method: Methods, data?: Variable, query?: any, options?: RequesterOptions<DataResponse, ErrorResponse>) {
  options?.onLoading?.(true)
  client[method]<DataResponse>(endpoint, { data, params: query })
    .then(response => options?.onSuccess?.(response.data))
    .catch(error => {
      if (axios.isAxiosError(error)) {
        options?.onError?.((error.response?.data as ErrorResponse))
      }
    })
    .finally(() => options?.onLoading?.(false))
}