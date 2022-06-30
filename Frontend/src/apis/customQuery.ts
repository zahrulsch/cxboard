import axios, { AxiosResponse } from 'axios'
import { useQuery, UseQueryOptions, UseQueryReturnType } from 'vue-query'
import client from './client'

interface Response<Data=any> {
  data: Data
}

interface ErrorResponse {
  code: number
  message: string | Object
  status: string
}

export interface Query {
  getEmployees: {
    url: "/employees/list/"
    method: "get"
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
      schools: {
        id: number
        name: string
        level: string
        schoolId: number
        graduateYear: number
      }[]
      roles: any[]
      teams: { name: string; role: string }[]
    }[]
    params: any
    query: null
  }
  getEmployee: {
    url: "/employees"
    method: "get"
    response: {
      id: number
      name: string
      email: string
      gender: "MALE" | "FEMALE"
      placeOfBirth: string
      dateOfBirth: string
      marriageStatus: boolean
      photo: string
      address: string
      createdAt: string
      updatedAt: string
      schools: {
        id: number
        name: string
        level: "tk" | "sd" | "smp" | "sma" | "pts" | "ptn"
        schoolId: number
        graduateYear: number
      }[]
      roles: { name: string; id: number }[]
      teams: { name: string; role: string }[]
    } | null
    params: number
    query: null
  }
  getSchools: {
    url: "/schools/list"
    method: "get"
    response: {
      id: number
      name: string
      level: "tk" | "sd" | "smp" | "sma" | "pts" | "ptn"
      address: string
      createdAt: string
      updatedAt: string
    }[]
    params: null
    query: {
      limit?: number
      name?: string
      level?: "tk" | "sd" | "smp" | "sma" | "pts" | "ptn"
    }
  }
  getRoles: {
    url: "/roles/list"
    method: "get"
    response: {
      createdAt: string
      detail: string
      id: number
      name: string
      updatedAt: string
      employees: { employeeId: number }[]
    }[]
    params: null
    query: any
  }
  getTeams: {
    url: "/teams/list"
    method: "get"
    response: {
      address: string
      code: string
      id: number
      image: string | null
      name: string
      _count: { employees: number }
    }[]
    params: null
    query: any
  }
  getTeam: {
    url: "/teams"
    method: "get"
    response: {
      id: number
      name: string
      code: string
      address: string
      image: string
      employees:
          {
            name: string
            photo: string | null
            role: string
            id: number
            roleId: number
            employeeCode: string
          }[]
        | null
    }
    params: number
    query: any
  }
}

type QueryOptions<T> = Omit<UseQueryOptions<T, ErrorResponse>, 'queryKey'|'queryFn'>

export function useCQuery<K extends keyof Query, T extends Query>(mode: K, url: T[K]['url'], method: T[K]['method'], params?: T[K]['params'], query?: T[K]['query'], options?: QueryOptions<Response<T[K]['response']>>): UseQueryReturnType<Response<T[K]['response']>, ErrorResponse> {
  return useQuery<Response<T[K]["response"]>, ErrorResponse, Response<T[K]["response"]>, any>([mode, params], async () => {
    try {
      let uri = url as string
      if (params) {
        uri = url + '/' + params
      }
      const res: AxiosResponse<Response<T[K]['response']>, any> = await client({ url: uri, method, params: query })
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
