// 这个文件用于定义请求参数的类型和响应的类型

// 验证码的响应的类型约束
interface CaptchaAPIRes {
    msg: string;
    img: string;
    code: number;
    captchaEnabled: boolean;
    uuid: string;
}

interface LoginAPIReq {
    username: string;
    password: string;
    code: string;
    uuid: string;
}

interface LoginAPIRes {
    msg: string;
    code: number;
    token: string;
}