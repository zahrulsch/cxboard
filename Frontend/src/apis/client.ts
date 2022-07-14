import axios from 'axios'

const client = axios.create({
  baseURL: 'https://karyawan-service-dot-shopeepdc.et.r.appspot.com/apis'
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