import React from 'react';
import { NavLink } from 'react-router'; 


function NavBar() {
    return (
        <div className="bg-dark-black fixed top-0 left-0 w-full z-50">
            <nav className="flex items-center h-12 sm:h-16 md:h-20 max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
                <div className="flex items-center justify-between w-full">
                    <ul className="flex items-center gap-2 sm:gap-4 md:gap-6">
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'text-amber-300' : 'hover:text-amber-300'
                                    }`
                                }
                            >
                                Work
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    ` nav-link ${isActive ? 'text-amber-300' : 'hover:text-amber-300'
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    ` nav-link ${isActive ? 'text-amber-300' : 'hover:text-amber-300'
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `inline-block text-xs sm:text-sm md:text-base font-anak-paud text-white border border-white rounded-3xl px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 transition-colors duration-300 ${isActive ? 'bg-amber-300 text-dark-black' : 'hover:bg-amber-300 hover:text-dark-black'
                            } focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-dark-black`
                        }
                    >
                        Reach Out
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;