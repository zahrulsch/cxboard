import { defineStore } from 'pinia'
import type { Mutation } from '../apis/customMutation'

export const useAddEmployeePayload = defineStore('addEmployeePayload', {
  state: (): Mutation['addEmployee']['data'] => {
    return {
      dateOfBirth: 0,
      email: '',
      gender: 'MALE',
      marriageStatus: false,
      name: '',
      placeOfBirth: '',
      address: '',
    }
  }
})