import axios from 'axios'

const client = axios.create({
  baseURL: 'https://a4a4-2001-448a-5040-463b-f0bc-9a45-8d70-1b98.ap.ngrok.io/apis'
})

let interceptor: number = 1

if (localStorage.cx_token) {
  setInterceptor({ Authorization: localStorage.cx_token })
}

export function setInterceptor(data: {[key: string]: string}) {
  interceptor = client.interceptors.request.use(config => {
    config.headers = {
      ...config.headers,
      ...data
    }
    return config
  })
}

export default client