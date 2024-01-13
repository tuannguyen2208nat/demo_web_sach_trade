import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../customize-axios";

const User = (props) => {
    const history = useHistory();
    const [state, setState] = useState(null);

    const handleLogin = () => {
        history.push("/user/login");
        setState(null);
    }

    const handleRegister = () => {
        history.push("/user/register");
        setState(null);
    }

    const handleLogout = () => {
        setState(null);
        props.handleChangeLog();
    }

    return (
        <>
            {props.user_loggin === false && (
                <div >
                    <button onClick={() => setState(true)} >Đăng kí</button>
                    &nbsp;
                    <button onClick={() => setState(false)} >Đăng nhập</button>
                </div>
            )}
            {state === true && (
                <>{handleRegister()} </>
            )}
            {state === false && (
                <>{handleLogin()}</>
            )}
            {props.user_loggin === true && <button onClick={handleLogout} style={{ cursor: 'pointer', height: '100px', width: '200px', marginTop: '60px', fontSize: '30px' }}>Logout</button>}
        </>
    )
}

const loginApi = (email, password) => {
    return axios.post("/api/login", { email, password })
}

const registerApi = (email, password) => {
    return axios.post("/api/register", { email, password })
}



export { User, loginApi, registerApi };
