import { HttpStatus } from "./enums"

/**
 * 响应返回实体
 */
export interface ResponseModel<T = any> {
    code: HttpStatus,
    data: T,
    message?: string
}