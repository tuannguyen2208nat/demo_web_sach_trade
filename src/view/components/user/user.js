import React from "react";
import './user.scss'

class Login extends React.Component {
    render() {
        return (
            <>
                <div className="login-container ">
                    <div className="title" >Login</div>
                    <div className="text" >Email or username</div>
                    <input type="text" placeholder="Email or username" />
                    <input type="text" placeholder="Password" />
                    <button>Login</button>
                    <div className="back">
                        <i className="fa-solid fa-angles-left"></i> Go back
                    </div>
                </div >
            </>
        )
    }
}

export default Login;