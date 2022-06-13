import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8000/apis'
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