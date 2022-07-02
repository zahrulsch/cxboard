import axios from 'axios'

const client = axios.create({
  baseURL: 'https://4e58-2001-448a-5040-983b-a138-1199-5427-70e6.ap.ngrok.io/apis'
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