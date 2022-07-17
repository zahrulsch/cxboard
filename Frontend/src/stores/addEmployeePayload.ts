import validator from 'validator/es/lib/isEmail'
import { defineStore } from 'pinia'
import type { Mutation } from '../apis/customMutation'

export const useAddEmployeePayload = defineStore('addEmployeePayload', {
  state: (): Mutation['addEmployee']['data']  => {
    return {
      dateOfBirth: new Date().getTime(),
      email: '',
      gender: 'MALE',
      marriageStatus: false,
      name: '',
      placeOfBirth: '',
      address: '',
      endWork: 0,
      officeEmail: '',
      officeEmailPassword: '',
      startWork: new Date().getTime(),
      status: 'active',
      photo: '',
      handphone: '',
      schools: []
    }
  },
  actions: {
    validateAll: function() {
      const invalids = [] as { name: string }[]
      const { email, dateOfBirth, name, placeOfBirth } = this.$state

      if (!validator(email)) invalids.push({ name: 'email tidak valid' })
      if (!dateOfBirth) invalids.push({ name: 'tanggal lahir tidak valid' })
      if (!name.trim()) invalids.push({ name: 'nama tidak valid' })
      if (!placeOfBirth.trim()) invalids.push({ name: 'tempat lahir tidak valid' })

      return invalids
    }
  }
})