<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import googleImage from '../../assets/google.png'

const props = defineProps<{
  containerClass?: string
  buttonClass?: string
  text?: string
}>()

const emits = defineEmits<{
  ( e: 'credential', data?: string ): void
}>()

const attributes = computed(() => ({
  class: props.containerClass
}))

const gapi = (window as any).gapi
const google = (window as any).google
let tokenClient:any

async function initializeGapi() {
  await gapi.client.init({
    apiKey: 'AIzaSyA6BwB4iZAHBXE7n7JNoLDUKIq0o1cnS8U',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4']
  })
}

function initializeTokenClient() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: '680985954441-79brl8t5ir27uhkrapqa63ckkelnq562.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    callback: '',
    access_type: 'offline',
    prompt: 'consent',
    grant_type: 'authorization_code'
  })
}

function onRequest() {
  tokenClient.callback = async(resp: any) => {
    if (resp.error !== undefined) throw (resp)
    console.log(resp)
    if (resp.access_token) {
      emits('credential', (resp.access_token as string))
    }
  }
  if (gapi.client.getToken() === null) {
    
    tokenClient.requestAccessToken({ prompt: 'consent', response_type: 'token', access_type: 'offline', approval_prompt: 'forces', grant_type: 'authorization_code' })
  } else {
    tokenClient.requestAccessToken({ prompt: '' })
  }
}

onMounted(() => {
  gapi.load('client', initializeGapi)
  initializeTokenClient()
})
</script>

<template>
  <div v-bind="attributes">
    <div :class="props.buttonClass || 'g-pick-btn px-2 py-1'" @click="onRequest">
      <img width="14" height="14" :src="googleImage" alt="google-logo"/>
      <span class="size-4 font-secondary has-text-weight-medium">{{props.text || "Gunakan akun Google saya"}}</span>
    </div>
  </div>
</template>

<style lang="scss">
.g-pick-btn {
  height: 25px;
  width: 100%;
  display: flex;
  column-gap: var(--space-3);
  align-items: center;
  justify-content: center;
  background-color: rgba(231, 231, 231, 0.95);
  color: rgb(5, 5, 5);
  cursor: pointer;
  transition: 250ms ease;
  &:hover, &:active {
    background-color: rgb(231, 231, 231);
  }
}
</style>