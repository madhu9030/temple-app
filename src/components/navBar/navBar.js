import React, { Component } from 'react';
import logo from '../../images/vasavi_1.png';
import signLogo from '../../images/user-circle.svg';

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
        return (
            <nav className="tp-nav-bar-container">
                <div className="tp-nav-bar-wrapper">
                    <div className="tp-background-icon">
                        <a href=""><img src={logo} alt=""/></a>
                    </div>
                    <div className="tp-na-bar-links">
                        <ul>
                            <li className="tp-nav-list"><a href="">
                                <span className="fa fa-home"></span>Home</a></li>
                            <li className="tp-nav-list"><a href="">About Us</a></li>
                            <li className="tp-nav-list"><a href="">Services</a></li>
                            <li className="tp-nav-list"><a href="">Events</a></li>
                            <li className="tp-nav-list"><a href="">Donations</a></li>
                        </ul>
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