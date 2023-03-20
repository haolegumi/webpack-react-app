import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getCookie } from '@src/hooks'

type UserInfo = {
  email: string
  password: string
  token: string
  role: number
}

const AXIOS_CONFIG = {
  TOKEN: 'bearer'
}

const apiService = (dispatch?: any) => {
  const axiosClient = axios.create({
    baseURL: 'http://localhost:5050',
    headers: { 'X-Custom-Header': 'foobar' }
  })

  axiosClient.interceptors.request.use(
    (request: any) => {
      // dispatch && dispatch(showLoader(true))

      const userInfo: UserInfo = getCookie(AXIOS_CONFIG.TOKEN) || null

      const partUserInfo: UserInfo = userInfo ? JSON.parse(userInfo as any) : {}

      if (partUserInfo.token) request.headers.Authorization = `Bearer ${partUserInfo.token}`

      return request
    },
    (err) => {
      // dispatch && dispatch(showLoader(false))

      return { status: err.request.status, request: err.request.data.errors }
    }
  )

  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
      // dispatch && dispatch(showLoader(false))

      return response
    },
    (error) => {
      // dispatch && dispatch(showLoader(false))

      console.log(error.response.status)

      if (error.response.status === 401) {
        // handle logout: clear cookies, move to login page
      }
      if (error.response.status === 500) {
        // handle notification for user server error
      }
      return Promise.reject(error)
    }
  )

  const client = {
    get: <T>(url: string, obj?: object) => axiosClient.get<T>(url, obj),
    post: <T>(url: string, obj: object, config?: AxiosRequestConfig) => axiosClient.post<T>(url, obj, config),
    patch: <T>(url: string, obj: object) => axiosClient.patch<T>(url, obj),
    put: <T>(url: string, obj: object) => axiosClient.put<T>(url, obj),
    delete: <T>(url: string, obj?: object) => axiosClient.delete<T>(url, obj)
  }

  return client
}

export default apiService
