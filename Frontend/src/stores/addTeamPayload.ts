import { defineStore } from 'pinia';

export interface CreateTeamPayload {
  name: string
  code: string
  address?: string
  image?: string | ArrayBuffer
  employees?: {
    employeeId: number
    role: string
    roleId: number
    employeeCode: string
    name?: string
  }[]
}

export const useAddTeamPayload = defineStore('addTeamPayload', {
  state: (): CreateTeamPayload => ({
    code: '',
    name: '',
    address: '',
    employees: [],
    image: ''
  })
})