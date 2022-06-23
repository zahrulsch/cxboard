import axios, { AxiosResponse } from 'axios';
import { useQuery, UseQueryOptions, UseQueryReturnType } from 'vue-query';
import client from './client';

interface Response<Data=any> {
  data: Data
}

interface ErrorResponse {
  code: number
  message: string | Object
  status: string
}

interface Query {
  getEmployees: {
    url: '/employees/list/'
    method: 'get'
    response: {
      id: number
      name: string
      email: string
      gender: string
      placeOfBirth: string
      dateOfBirth: string
      marriageStatus: boolean
      photo: string | null
      address: string | null
      createdAt: string
      updatedAt: string
      schools: 
        {
          id: number
          name: string
          level: string
          schoolId: number
          graduateYear: number
        }[]
      roles: any[]
      teams: any[]
    }[]
    params: any
  }
}

type QueryOptions<T> = Omit<UseQueryOptions<T, ErrorResponse>, 'queryKey'|'queryFn'>

export function useCQuery<K extends keyof Query, T extends Query>(mode: K, url: T[K]['url'], method: T[K]['method'], params?: T[K]['params'], options?: QueryOptions<Response<T[K]['response']>>): UseQueryReturnType<Response<T[K]['response']>, ErrorResponse> {
  return useQuery<Response<T[K]["response"]>, ErrorResponse, Response<T[K]["response"]>, any>(mode, async () => {
    try {
      const res: AxiosResponse<Response<T[K]['response']>, any> = await client({ url, method, params})
      return res.data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw e.response?.data
      }
      throw {
        message: 'unpredictable error occurred!',
        code: 500,
        status: 'internal server error'
      }
    }
  }, { ...options })
}
