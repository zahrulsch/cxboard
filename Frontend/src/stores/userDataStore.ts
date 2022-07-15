import { defineStore } from 'pinia';

export interface UserData {
  centerSheetId: string
  createdAt: string
  picture: string
  email: string
  password: string
  username: string
  id: number
  oldPassword: string
  googleCredential: string
}

export const useUserData = defineStore('userData', {
  state: (): UserData => ({
    centerSheetId: "",
    createdAt: "",
    email: "",
    id: 0,
    password: "",
    picture: "",
    username: "",
    oldPassword: "",
    googleCredential: ""
  })
})