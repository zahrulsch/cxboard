import axios from 'axios'

const client = axios.create({
  baseURL: 'https://942d-2001-448a-5040-51ff-3865-e037-bf2f-f81f.ap.ngrok.io/apis'
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