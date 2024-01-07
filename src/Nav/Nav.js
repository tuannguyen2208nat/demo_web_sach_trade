import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/trace" activeClassName="active">
                    Trace
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    User
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
            </div>
        );
    }
}

export default Nav;