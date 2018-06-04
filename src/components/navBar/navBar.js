import React, { Component } from 'react';
import logo from '../../images/vasavi_1.png';
import signLogo from '../../images/user-circle.svg';

class NavBar extends Component {
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
                            <li className="tp-nav-list"><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="tp-search-bar">
                        <input placeholder="Search" type="text"/>
                        <button type="button"><i class="fa fa-search"></i></button>
                    </div>
                    <div className="tp-sign-in">
                        <button><img src={signLogo} alt=""/></button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;