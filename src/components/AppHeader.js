import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/header.css';

const AppHeader = () => (
    <div className="header-container">
        <div>
           <NavLink to="/"  className="header-title" exact={true}>TestTrack</NavLink>
        </div>
    </div>
);

export default AppHeader;
