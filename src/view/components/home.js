import React from "react";
import logo from '../../asset/images/logo.png';

class Home extends React.Component {
    render() {
        return (
            <>
                <img
                    src={logo}
                    alt="Lil Nat Logo"
                    style={{ width: '200px', height: '200px' }}
                />
                <div style={{ color: 'black' }}>
                    Hello , Welcome to " Sách Trace "
                </div>
            </>
        )
    }
}

export default Home;