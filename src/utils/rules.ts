// 引入vant组件:rules=[] 的类型
import type { FieldRule } from 'vant'

// 表单校验
export const mobileRules: FieldRule[] = [
    { required: true, message: '请输入手机号' },
    { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' }
]

export const declareRules: FieldRule[] = [
    { required: true, message: '请先同意我们的条款' },
    { pattern: /^(同意|不同意)$/, message: '请先同意我们的条款' }
]

export const cnameRules: FieldRule[] = [
    { required: true, message: '请先输入姓名' },
    { pattern: /^[\u4e00-\u9fa5]{1,10}$/, message: '请正确的输入姓名' }
]

export const enameRules: FieldRule[] = [
    { required: true, message: '请先输入英文名' },
    { pattern: /^[A-Za-z]{1,50}$/, message: '请正确的输入英文名' }
]

export const timeRules: FieldRule[] = [
    { required: true, message: '请先选择时间' }
]


export const stuwayRules: FieldRule[] = [
    { required: true, message: '请填写学习方式' },
    { pattern: /^(全日制|非全日制)$/, message: '请填写全日制或非全日制' }
]

export const quaRules: FieldRule[] = [
    { required: true, message: '请填写学历' }
]

export const majRules: FieldRule[] = [
    { required: true, message: '请填写专业' }
]

export const snameRules: FieldRule[] = [
    { required: true, message: '请填写学校' }
]

export const comRules: FieldRule[] = [
    { required: true, message: '请填写关系' }
]

export const wpRules: FieldRule[] = [
    { required: true, message: '请填写单位' }
]

export const addressRules: FieldRule[] = [
    { required: true, message: '请填写地址' }
]

export const apjobRules: FieldRule[] = [
    { required: true, message: '请填写申请职位' }
]

export const priRules: FieldRule[] = [
    { required: true, message: '请填写期望待遇' }
]

export const nationRules: FieldRule[] = [
    { required: true, message: '请填写民族' }
]

export const edulevelRules: FieldRule[] = [
    { required: true, message: '请填写最高学历' }
]

export const wxRules: FieldRule[] = [
    { required: true, message: '请填写微信号' }
]

export const IDcardRules: FieldRule[] = [
    { required: true, message: '请填写身份证号码' },
    { pattern: /^\d{17}[\dXx]$/, message: '请正确填写18位身份证号码' }
]

export const emailRules: FieldRule[] = [
    { required: true, message: '请填写邮箱' },
    { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: '请正确填写邮箱' }
]

export const helRules: FieldRule[] = [
    { required: true, message: '请填写健康状况' }
]

export const healRules: FieldRule[] = [
    { required: true, message: '请如实告知' }
]

export const hobbyRules: FieldRule[] = [
    { required: true, message: '请填写兴趣爱好' }
]

