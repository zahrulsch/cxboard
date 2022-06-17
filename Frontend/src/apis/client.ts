import axios from 'axios'

const client = axios.create({
  baseURL: 'https://0b52-125-166-8-115.ap.ngrok.io/apis'
})

let interceptor: number = 1

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