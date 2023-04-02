import styles from './login.module.scss'
import './login.less'
import initLoginBg from './init'
import {ChangeEvent, useEffect, useState} from "react";
import {Input, Space, Button, message} from 'antd';
import {captchaAPI, LoginAPI} from "@/request/api";
import {Simulate} from "react-dom/test-utils";
import {useNavigate} from "react-router-dom";

const View = () => {
    const navigate = useNavigate();
    // 在组件加载完后进行加载背景的操作
    useEffect(()=>{
        initLoginBg()
        // 窗口变换会重新加载背景
        window.onresize = function () {initLoginBg()}
        // 获取验证码图片
        getCaptchImg()
    },[])
    // 获取用户输入的信息
    const [usernameVal, setUsernameVal] = useState("")    // 定义用户输入用户名这个变量
    const [passwordVal, setPasswordVal] = useState("")    // 定义用户输入密码这个变量
    const [captchVal, setCaptchVal] = useState("")    // 定义用户输入验证码这个变量
    // 定义一个变量保存验证码图片信息
    const [captchaImg,setCaptchaImg] = useState("")
    const usernameChange = (e:ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value)
        // 修改usernameVal这个变量为用户输入的那个值
        setUsernameVal(e.target.value)
    }
    const passwordChange = (e:ChangeEvent<HTMLInputElement>) => {
        setPasswordVal(e.target.value)
    }
    const captchChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCaptchVal(e.target.value)
    }
    // 点击登录按钮的事件
    const goLogin = async() => {
        // 验证是否有空值
        if(!usernameVal.trim() || !passwordVal.trim() || !captchVal.trim()) {
            message.warning('请完整输入信息')
            // alert('请完整输入信息！')
            return
        }
        // 发起登录请求
        let loginAPIRes = await LoginAPI({
            username: usernameVal,
            password: passwordVal,
            code: captchVal,
            uuid: localStorage.getItem('uuid')
        })
        if (loginAPIRes.code == 200) {
            // 提示登录成功
            message.success('登录成功！')
            // 保存token
            localStorage.setItem('youli-token',loginAPIRes.token)
            // 跳转到page1
            navigate('/page1')
            // 删除uuid
            localStorage.removeItem('uuid')
        }
    }

    // 验证码图片请求的事件函数
    const getCaptchImg = async() => {
        // 验证码图片的请求
        // captchaAPI().then((res)=>{
        //     console.log(res)
        // })
        let captchaAPIRes = await captchaAPI();
        if (captchaAPIRes.code == 200) {
            // 把图片数据显示在img上面
            setCaptchaImg('data:image/gif;base64,' + captchaAPIRes.img)
            // 本地保存uuid，给登录的时候用
            localStorage.setItem('uuid',captchaAPIRes.uuid)
        }

    }

    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id='canvas' style={{display:'block'}}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox+ ' loginbox'}>
                {/* 标题部分 */}
                <div className={styles.title}>
                    <h1>幽离&nbsp;·&nbsp;通用后台管理系统</h1>
                    <p>Happy Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className='from'>
                    <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                        <Input placeholder="用户名" onChange={usernameChange}/>
                        <Input.Password placeholder="密码" onChange={passwordChange}/>
                        <div className='captchaBox'>
                            <Input placeholder="验证码" onChange={captchChange}/>
                            <div className='captchaImg' onClick={getCaptchImg}>
                                <img height='38' src={captchaImg}/>
                            </div>
                        </div>
                        <Button type="primary" className='loginBtn' block onClick={goLogin}>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default View