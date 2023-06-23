import { faHamburger, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../input.css';
import logo from './images/logo.png';
import MenuItems from './MenuItems';

const Header = () => {

    const [active, setActive] = useState(false);
    const showMenu = () => {
        setActive(!active);
    }

    return (
        <div className=' w-full'>
            
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <Link href="/" className="flex items-center">
                        <img src={logo} className="h-12 mr-3 sm:h-9" alt="Lts Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">STL Eccessories LTD</span>
                    </Link>
                    <div class="flex items-center max-md:hidden">
                        <Link href="tel:5541251234" className={`mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline `}>(555) 412-1234</Link>
                        {/* <img src={logo} className="h-12 mr-3 sm:h-9" alt="Lts Logo" /> */}
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </div>
                </div>
            </nav>


            <nav class="bg-gray-50 max-md:bg-white dark:bg-gray-700">
            <div className={`absolute right-6 md:hidden top-4 cursor-pointer p-1  ${active?"hidden": "block"}`} onClick={()=> showMenu()} >
                    <span>Menu</span> <FontAwesomeIcon icon={faHamburger} className='cursor-pointer' size='2xl'/>
            </div>
                <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div class="flex items-center justify-start">
                    
                        <ul class=" md:flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium text-center hidden">
                            <li>
                                <Link to="/home" className="text-gray-900 dark:text-white size" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/aboutus" className="text-gray-900 dark:text-white size">About Us</Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-gray-900 dark:text-white size">Products</Link>
                            </li>
                            
                            <li>
                                <Link to="/ourclients" className="text-gray-900 dark:text-white size">Our Clients</Link>
                            </li>
                            <li>
                                <Link to="/whyus" className="text-gray-900 dark:text-white size">Why With Us</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-gray-900 dark:text-white size">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-900 dark:text-white size">Contact</Link>
                            </li>
                        </ul>
                        <MenuItems showMenu = {showMenu} active={active} />
                    </div>
                </div>
            </nav>


















        </div>
    );
};

export default Header;