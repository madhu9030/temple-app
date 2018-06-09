import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navBar.scss'

export default function NavbarLink({ path, label }) {
    return (<NavLink
            to={path}
            className="tp-nav-list"
        >
            {label}
        </NavLink>
    );
}

