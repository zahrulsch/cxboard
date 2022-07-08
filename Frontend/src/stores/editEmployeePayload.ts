import { defineStore } from "pinia";
import { Mutation } from "../apis/customMutation";

export const useEditEmployeePayload = defineStore('editEmployeePayload', {
  state: function(): Mutation['editEmployee']['data'] {
    return {
      name: '',
      email: '',
      gender: 'MALE',
      address: '',
      dateOfBirth: 0,
      marriageStatus: false,
      photo: '',
      placeOfBirth: '',
      officeEmail: '',
      startWork: 0,
      endWork: null,
      handphone: '0',
      officeEmailPassword: '',
      status: 'active',
      schools: []
    }
  }
})