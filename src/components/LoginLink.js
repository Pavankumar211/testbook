import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return(
            <div>
                <NavLink to="/login" className="login-button-link">Login</NavLink>          
            </div>
    )
};

export default Header;