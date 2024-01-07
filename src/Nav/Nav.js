import React from 'react';
import './Nav.scss';
// Uncomment the line below if you plan to use NavLink
// import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/">
                    Home
                </a>
                <a href="/trace">Trace</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
            </div>
        );
    }
}

export default Nav;