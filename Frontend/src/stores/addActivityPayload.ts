import { defineStore } from 'pinia'

export interface ActivityPayload {
  name: string
  detail?: string
  startDate?: number
  endDate?: number
  status?: string
  venue?: string
  photo?: string
  employees?: number[]
}

export const useAddActivityPayload = defineStore('useAddActivityPayload', {
  state: function(): ActivityPayload {
    return {
      name: '',
      detail: '',
      employees: [],
      endDate: 0,
      startDate: new Date().getTime(),
      photo: '',
      status: 'ongoing',
      venue: ''
    }
  }
})