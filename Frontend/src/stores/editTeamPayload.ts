import { defineStore } from "pinia";
import { Mutation } from "../apis/customMutation";

type EditTeamPayloadStore = Partial<Mutation["addTeam"]["data"]>;
export interface EditTeamPayload extends Omit<EditTeamPayloadStore, "employees"> {
  employees?: {
    id: number
    employeeId: number
    code: string
    roleId: number
    name: string
    teamId: number
  }[]
}

export const useEditTeamPayload = defineStore('editTeamPayload', {
  state: (): EditTeamPayload => ({
    name: '',
    address: '',
    code: '',
    image: '',
    employees: []
  })
})