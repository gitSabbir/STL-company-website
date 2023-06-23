import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({showMenu,active}) => {
    return (
        <ul class={active? "flex flex-col inset-0 w-full backdrop-blur-lg gap-6 p-8 items-center justify-center md:hidden": "hidden"}>
            
            <div className='absolute top-2 right-6'>
                <FontAwesomeIcon onClick={()=> showMenu()} icon={faClose} size='2xl'/>
            </div>
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
    );
};

export default MenuItems;