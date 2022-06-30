import { defineStore } from "pinia";
import { Mutation } from "../apis/customMutation";

type EditTeamPayload = Partial<Mutation["addTeam"]["data"]>;

export const useEditTeamPayload = defineStore('editTeamPayload', {
  state: (): EditTeamPayload => ({
    name: '',
    address: '',
    code: '',
    image: '',
    employees: []
  })
})