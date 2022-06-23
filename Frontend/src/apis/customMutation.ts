import axios, { AxiosResponse } from 'axios'
import { useMutation, UseMutationReturnType } from 'vue-query'
import client from './client'

interface Response<Data=any> {
  data: Data
}

interface ErrorResponse {
  code: number
  message: string | Object
  status: string
}

export interface Mutation {
  login: {
    url: '/users/login/'
    method: 'POST'
    data: {
      email: string
      password: string
      username?: string
    }
    response: {
      accessToken: string
    }
    params: null
  }
  addEmployee: {
    url: '/employees/create/'
    method: 'POST'
    data: {
      dateOfBirth: number
      email: string
      gender: "MALE" | "FEMALE"
      name: string
      placeOfBirth: string
      marriageStatus: boolean
      address?: string
      schools?: {
        id: number
        name: string
        level: 'tk' | 'smp' | 'sma' | 'ptn' | 'pts' | 'sd'
        graduateYear: number
        schoolId: number
      }[]
      photo?: string
    }
    response: string
    params: null
  }
}

export function useCMutation<K extends keyof Mutation, T extends Mutation>(mode: K, url: T[K]['url'], method: T[K]['method'], params?: T[K]['params']): UseMutationReturnType<AxiosResponse<Response<T[K]['response']>, unknown>['data'], ErrorResponse, T[K]['data'], any> {
  return useMutation(mode, async function(data?: T[K]['data']) {
    try {
      const response: AxiosResponse<Response<T[K]['response']>, unknown> = await client({ url, method, data, params })
      return response.data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw e.response?.data
      } else {
        throw {
          status: 'unhandled error',
          code: 500,
          message: 'internal server error'
        }
      }
    }
  })
}