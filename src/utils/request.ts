import axios, { AxiosResponse } from "axios"
import { set } from "lodash"
import { HttpStatus } from "@/constraint/enums"
import { ResponseModel } from "@/constraint/response"

/**
 * 创建axios实例
 */
const service = axios.create({
    headers: { "Content-Type": "application/json;charset=utf-8" },
    withCredentials: true
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
    (config: any) => {
        set(config.headers, "Authorization", "")

        return config
    }
)

/**
 * 响应拦截器
 */
service.interceptors.response.use(
    (response: AxiosResponse<ResponseModel<any>>) => {
        if (response.status >= 400) {
            return Promise.reject(response.statusText)
        }

        const json = response.data

        if (json.code !== HttpStatus.Success) {
            return Promise.reject(json.message)
        }

        return Promise.resolve(json.data)
    },
    (error: any) => {
        if (error.response.status === 401) {
            // 登出
        }

        return Promise.reject(error.message)
    }
)

export default service