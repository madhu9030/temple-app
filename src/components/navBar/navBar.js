import React, { Component } from 'react';
import NavbarLink from './NavbarLink'
import logo from '../../images/vasavi_1.png';
import signLogo from '../../images/user-circle.svg';
import {Link} from 'react-router-dom';
/*import Services from '../../containers/Services';
import Home from '../../containers/Home';*/
import './navBar.scss';

const routes = [
    { path: '/home', label: 'Home'},
    { path: '/aboutUs', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/events', label: 'Events' },
    { path: '/donations', label: 'Donations' },
    { path: '/contact', label: 'Contact' },
];

class NavBar extends Component {
    constructor() {
        super();
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.state = {
            signIn: false,
            logIn:false
        }
    }

    handleSignIn(e) {
        this.setState({
            signIn: !this.state.signIn
        })
    }
    handleLogIn(e) {
        this.setState({
            logIn: !this.state.logIn
        })
    }
    render() {
        const navbarItems = routes.map((route) => (
            <NavbarLink key={route.path} to={route.path} path={route.path} label={route.label}  />
        ));
        return (
            <nav className="tp-nav-bar-container">
                <div className="tp-nav-bar-wrapper">
                    <div className="tp-background-icon">
                        <Link to="/">
                            <img src={logo} />
                        </Link>
                    </div>
                    <div className="tp-nav-bar-links">
                        {navbarItems}
                    </div>
                    <div className="tp-search-bar">
                        <input placeholder="Search" type="text"/>
                        <button type="button"><i className="fa fa-search"></i></button>
                    </div>
                    <div className="tp-sign-in">
                        {console.log(this.state.signIn)}
                        <button><img
                            src={this.state.logIn ? "https://pbs.twimg.com/profile_images/816010976659206144/Ug6isasc_bigger.jpg"
                            : signLogo}
                            onClick={this.handleSignIn}
                            alt=""/></button>
                        <div className={this.state.signIn  ? "tp-sign-in-dropdown show" : "tp-sign-in-dropdown hide"}>
                            <div className="tp-sign-in-formwrapper">
                                <div className="tp-sign-in-email">
                                    <label htmlFor="tp-sign-in-email">Email Address:</label>
                                    <input id="tp-sign-in-email" className="tp-sign-in-form email" type="text"/>
                                    <span className="tp-sign-in-eyebrow">Email Address</span>
                                </div>
                                <div className="tp-sign-in-password">
                                    <label htmlFor="tp-sign-in-password">Password:</label>
                                    <input id="tp-sign-in-password" className="tp-sign-in-form password" type="password"/>
                                    {/*<span className="tp-sign-in-eyebrow">Password</span>*/}
                                </div>
                                <button className="tp-sign-in-button tp-button">Sign Up</button>
                                <button
                                    onClick={this.handleLogIn}
                                    className="tp-log-in-button tp-button">Log In</button>
                                <a className="tp-forget-password" href="">Forget Password?</a>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;

