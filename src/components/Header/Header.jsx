import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

function Header() {
    return (
        <div className='header-container'>
            <img src = {logo} alt = 'logo'/>
            <h1>Mentor Mate Logo Test</h1>
        </div>
    )
}
export default Header;