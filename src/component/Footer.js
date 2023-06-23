
import { faHashtag, faLink, faMessage, faPodcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div>
             <div class="footer-clean">
                <footer class="relative bg-green-600 pt-8 pb-6 text-white">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-6/12 px-4">
                        <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                        Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div class="mt-6 lg:mb-0 mb-6 text-black">
                        <button class="bg-white text-Blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <FontAwesomeIcon icon={faHashtag} /></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <FontAwesomeIcon icon={faMessage} /></button><button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <FontAwesomeIcon icon={faLink} /></button><button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <FontAwesomeIcon icon={faPodcast} />
                        </button>
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="flex flex-wrap items-top  mb-6">
                        <div class="w-full lg:w-6/12 px-4 ml-auto ">
                            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-5">Useful Links</span>
                            <ul class="list-unstyled">
                            <li>
                                <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm rounded" to="/aboutus">About Us</Link>
                            </li>
                            <li>
                                <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/">Blog</Link>
                            </li>
                            <li>
                                <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/whyus">Why Us</Link>
                            </li>
                            <li>
                                <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/products">Our Products</Link>
                            </li>
                            <li>
                                <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/clients">Our Clients</Link>
                            </li>
                            <li>
                                <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/faq">FAQ</Link>
                            </li>
                            </ul>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-5">Other Resources</span>
                            <ul class="list-unstyled">
                            <li>
                                <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/">MIT License</Link>
                            </li>
                            <li>
                                <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/faq">Terms &amp; Conditions</Link>
                            </li>
                            <li>
                                <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/faq">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/contact">Contact Us</Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr class="my-6 border-blueGray-300"/>
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        
                    </div>
                    </div>
                </div>
            </footer>


    </div>
        </div>
    );
};

export default Footer;