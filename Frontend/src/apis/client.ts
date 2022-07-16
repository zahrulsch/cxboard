import axios from 'axios'

let baseURL = 'http://localhost:8000/apis'

if (import.meta.env.PROD) {
  baseURL = 'https://karyawan-service-dot-shopeepdc.et.r.appspot.com/apis'
}

const client = axios.create({
  baseURL: baseURL
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