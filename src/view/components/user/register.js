import React, { useState } from "react";
import './register.scss'
import { registerApi } from "./user";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

const Register = (props) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setconfirm_password] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loadingApi, setloadingApi] = useState(false);

    const handleGoback = () => {
        history.push("/user");
    }
    const handleRegister = async () => {
        if (!email || !password) {
            toast.error("Vui lòng nhập email và password")
            return;
        }
        setloadingApi(true);
        let res = await registerApi(email, password)
        if (res && res.token) {
            localStorage.setItem("token", res.token);
            toast.success('Đăng kí thành công');
            history.push("/user/login");
        }
        else {
            if (res && res.status === 400) {
                toast.error('Đăng kí không thành công')
            }
        }
        setloadingApi(false);
    }

    return (
        <>
            <div className="register-container col-12 col-sm-4">
                <div className="title" >Register</div>
                <div className="text" >Email or username</div>
                <input type="text" placeholder="Email or username"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <div className="input-2">
                    <div className="text" >Nhập mật khẩu </div>
                    <input
                        type={isShowPassword === true ? "text" : "password"}
                        placeholder="Nhập mật khẩu mới"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <i className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                        onClick={() => setIsShowPassword(!isShowPassword)}></i>
                    <div className="text" >Xác nhận mật khẩu </div>
                    <input
                        type={isShowPassword === true ? "text" : "password"}
                        placeholder="Xác nhận lại mật khẩu"
                        value={confirm_password}
                        onChange={(event) => setconfirm_password(event.target.value)}
                    />
                </div>
                <button
                    className={email && password && confirm_password && password === confirm_password ? "active" : ""}
                    disabled={email && password && confirm_password && password === confirm_password ? false : true}
                    onClick={() => handleRegister()}
                >
                    {loadingApi ? <i className="fa-solid fa-spinner fa-spin-pulse"></i> : <span>Register</span>}
                </button>
                <br />
                <div className="back" style={{ fontSize: '12px', cursor: 'pointer' }}>
                    <i className="fa-solid fa-angles-left" onClick={() => handleGoback()}></i> <span onClick={() => handleGoback()}>Go back</span>
                </div>

            </div>
        </>
    )
}

export default Register;