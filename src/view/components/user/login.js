import React, { useState } from "react";
import './user.scss'
import { loginApi } from "../trade/trade";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";


const Login = (props) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loadingApi, setloadingApi] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Vui lòng nhập email hoặc password")
            return;
        }
        setloadingApi(true);
        let res = await loginApi(email, password)
        if (res && res.token) {
            localStorage.setItem("token", res.token);
            toast.success('Đăng nhập thành công');
            props.handleChangeLog();
            history.push("/trade");
        }
        else {
            if (res && res.status === 400) {
                toast.error('User not found')
            }
        }
        setloadingApi(false);
    }

    const handleGoback = () => {
        history.push("/user");
    }

    return (
        <>
            {
                props.user_loggin === false && <div className="login-container col-12 col-sm-4">
                    <div className="title" >Login</div>
                    <div className="text" >Email or username</div>
                    <input type="text" placeholder="Email or username"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <div className="input-2">
                        <input
                            type={isShowPassword === true ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <i className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                            onClick={() => setIsShowPassword(!isShowPassword)}></i>
                    </div>
                    <button
                        className={email && password ? "active" : ""}
                        disabled={email && password ? false : true}
                        onClick={() => handleLogin()}
                    >
                        {loadingApi ? <i className="fa-solid fa-spinner fa-spin-pulse"></i> : <span>Login</span>}
                    </button>
                    <div className="back">
                        <i className="fa-solid fa-angles-left" onClick={() => handleGoback()} style={{ cursor: 'pointer' }}></i> <span onClick={() => handleGoback()} style={{ cursor: 'pointer' }}>Go back</span>
                    </div>
                </div >
            }



        </>
    )

}

export default Login;