import { defineStore } from 'pinia'

export interface AddEmployeePayload {
  code: string
  dateOfBirth: number
  email: string
  gender: string
  marriageStatus: boolean
  name: string
  placeOfBirth: string
  address: string
  photo: string
  schools?: {
    
  }
}

export const useAddEmployeePayload = defineStore('addEmployeePayload', {
  state: () => {
    return {

    }
  }
})