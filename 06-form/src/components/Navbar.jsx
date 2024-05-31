import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-center space-x-6">
                <li>
                    <NavLink exact to="/" className={`text-white hover:text-gray-300 ${activeLink === '/' && 'text-yellow-400'}`} onClick={() => handleLinkClick('/')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/normal" className={`text-white hover:text-gray-300 ${activeLink === '/normal' && 'text-yellow-400'}`} onClick={() => handleLinkClick('/normal')}>Normal Form</NavLink>
                </li>
                <li>
                    <NavLink to="/react-hook-form" className={`text-white hover:text-gray-300 ${activeLink === '/react-hook-form' && 'text-yellow-400'}`} onClick={() => handleLinkClick('/react-hook-form')}>React Hook Form</NavLink>
                </li>
                <li>
                    <NavLink to="/formik" className={`text-white hover:text-gray-300 ${activeLink === '/formik' && 'text-yellow-400'}`} onClick={() => handleLinkClick('/formik')}>Formik Form</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
