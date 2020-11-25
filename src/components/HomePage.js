import React from 'react';
import { NavLink } from 'react-router-dom';


const HomePage = () => (
    <div>
        <div className="homepage-container">
            <div className="homepage-field">
                <NavLink to="/writetest">Write Test</NavLink>
            </div>
            <div className="homepage-field">
                <NavLink to="prevtestresult">Previous Test Result</NavLink>
            </div>
            <div className="homepage-field">
                <NavLink to="Favquestions">Favourite Questions</NavLink>
            </div>
        </div>
    </div>
);

export default HomePage;