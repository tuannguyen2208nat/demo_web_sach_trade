import React from "react";
import logo from '../../../asset/images/logo.png';

class Home extends React.Component {
    render() {
        return (
            <>
                <div style={{ width: '400px', margin: '0 auto' }}>
                    <img
                        src={logo}
                        alt="Lil Nat Logo"
                        style={{
                            width: '200px', height: '200px'
                        }}
                    />
                </div>

                < div style={{ color: 'black' }}>
                    Hello , Welcome to " Sách Trade"
                </div >
            </>
        )
    }
}

export default Home;