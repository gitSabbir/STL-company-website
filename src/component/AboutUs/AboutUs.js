import { faCalendar, faHandsHolding, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import aboutphoto from '../images/componentsresorse/Aboutuscoverpng.png';
import border from '../images/componentsresorse/bordercropd.png';
import '../WhyChooseUs/WhyChooseUs';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
                <div>
                    <img src={border} className='w-full h-auto' alt='border'/>
                </div>
                <div className='flex flex-row justify-between items-center container max-lg:w-full max-lg:flex-col max-xl:w-5/6 text-green-600'>
                    <div>
                        <img src={aboutphoto} className=' min-w-96' alt='coverimg'/>
                    </div>

                    <div className='about-cover-image flex flex-col justify-center items-center w-3/6 max-sm:w-full text-center '>
                        <h2 className='text-3xl text-bold'>About Us</h2>
                        
                        <div className=''>
                        <p className='text-l px-10 text-bold'>Welcome to STL Accessories Ltd, where we offer a wide range of high-quality accessories for all your needs. Our company was founded with a simple mission - to provide our customers with affordable, reliable, and stylish accessories that will make their lives easier and more enjoyable.</p>
                        </div>
                    </div>

                </div>
                <hr/>
                


            <div className='container font-semibold'>
                    
        <br/><br/>
                    We understand that finding the perfect accessory can be a challenge, which is why we have curated a selection of products that cater to a variety of tastes and preferences. From phone cases and screen protectors to charging cables and headphones, we have everything you need to accessorize your life.
                    <br/><br/>
                    At STL Accessories Ltd, we pride ourselves on providing exceptional customer service. Our team is dedicated to ensuring that our customers are satisfied with their purchases and are always available to answer any questions or concerns.
                    <br/><br/>
                    We also believe in giving back to our community. That's why a portion of our proceeds goes towards supporting local charities and organizations that work to make a positive impact on people's lives.
                    <br/><br/>
                    Thank you for choosing STL Accessories Ltd. We look forward to serving you and helping you find the perfect accessories to enhance your lifestyle.
            </div>

            <div className='h-[600px] max-xl:w-full w-full salesbg text-green-600 container'>
            <div>
                <h2 className='text-green-600  text-bold text-2xl p-4'>What We've Done</h2>
                <hr className='w-[300px]'/>
            </div>
            <div className='flex flex-col  justify-start pl-20 font-semibold text-center'>

                <div className='flex flex-row p-10 space-x-2'>
                    <FontAwesomeIcon icon={faSitemap} size='3x'/>
                    <div className=''>
                        <h2 className='text-2xl'>10,403</h2>
                        <p>Product Sold</p>
                    </div>
                </div>


                <div className='flex flex-row p-10 space-x-2 h-40 pl-52'>
                    <FontAwesomeIcon icon={faHandsHolding} size='3x'/>
                    <div className=''>
                        <h2 className='text-2xl'>927</h2>
                        <p>Customer Served</p>
                    </div>
                </div>


                <div className='flex flex-row p-10 space-x-2 h-40 pl-96'>
                    <FontAwesomeIcon icon={faCalendar} size='3x'/>
                    <div className=''>
                        <h2 className='text-2xl'>592</h2>
                        <p>Last month Sold</p>
                    </div>
                </div>


                
            </div>
           

            </div>
            

        
            
        </div>
    );
};

export default AboutUs;