import React from 'react';
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


class Navbar extends React.Component{


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
                    <div className="tp-na-bar-links">
                        {navbarItems}
                        {/*<ul>
                            <li className="tp-nav-list"><a href='../../containers/Home.js'>
                                <span className="fa fa-home"></span>Home</a></li>
                            <li className="tp-nav-list"><a href="">About Us</a></li>
                            <li className="tp-nav-list"><a href='../../containers/Services.js'>Services</a></li>
                            <li className="tp-nav-list"><a href="">Events</a></li>
                            <li className="tp-nav-list"><a href="">Donations</a></li>
                            <li className="tp-nav-list"><a href="">Contact</a></li>
                        </ul>*/}
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

export default Navbar;

