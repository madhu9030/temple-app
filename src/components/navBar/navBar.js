import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="tp-nav-bar-container">
                <div className="tp-nav-bar-wrapper">
                    <div className="tp-na-bar-links">
                        <ul>
                            <li className="tp-nav-list"><a href="">Home</a></li>
                            <li className="tp-nav-list"><a href="">About Us</a></li>
                            <li className="tp-nav-list"><a href="">Services</a></li>
                            <li className="tp-nav-list"><a href="">Events</a></li>
                            <li className="tp-nav-list"><a href="">Contact</a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;