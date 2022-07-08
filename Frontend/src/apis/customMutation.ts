import { ActivityPayload } from './../stores/addActivityPayload';
import { EditTeamPayload } from './../stores/editTeamPayload';
import { CreateTeamPayload } from './../stores/addTeamPayload';
import axios, { AxiosResponse } from 'axios'
import { useMutation, UseMutationReturnType } from 'vue-query'
import client from './client'

interface Response<Data=any> {
  data: Data
}

interface ErrorResponse {
  code: number
  message: string | any
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
      handphone?: string
      officeEmail?: string
      officeEmailPassword?: string
      startWork?: number
      endWork?: number | null
      status?: string
    }
    response: string
    params: null
  }
  editEmployee: {
    url: '/employees'
    method: 'PUT'
    data: Partial<Mutation['addEmployee']['data']>
    response: string
    params: number
  }
  addRole: {
    url: '/roles/create'
    method: 'POST'
    data: {
      name: string
      detail?: string
    }
    response: string
    params: null
  }
  addTeam: {
    url: '/teams/create'
    method: 'POST'
    data: CreateTeamPayload
    response: string
    params: null
  }
  editTeam : {
    url: '/teams'
    method: 'PUT'
    data: EditTeamPayload
    response: string
    params: number
  }
  addactivity: {
    url: '/activities/create'
    method: 'POST'
    data: ActivityPayload
    response: string
    params: any
  }
}

export function useCMutation<K extends keyof Mutation, T extends Mutation>(mode: K, url: T[K]['url'], method: T[K]['method'], params?: T[K]['params']): UseMutationReturnType<AxiosResponse<Response<T[K]['response']>, unknown>['data'], ErrorResponse, T[K]['data'], any> {
  return useMutation(mode, async function(data?: T[K]['data']) {
    try {
      let uri = url as string

      if (params) uri = uri + '/' + params

      const response: AxiosResponse<Response<T[K]['response']>, unknown> = await client({ url: uri, method, data })
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