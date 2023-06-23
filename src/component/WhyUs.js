import React from 'react';
import { Link } from 'react-router-dom';

const WhyUs = () => {
    return (
        <div className='flex text-center justify-center '>
            <div className='flex text-center flex-col justify-center items-center my-10 w-2/4'>
            <h3 className='text-center text-3xl font-poppins m-4 mt-7 text-bold'>Why With Us?</h3>
            <p className='text-xl font-semibold'>Welcome to our Garments Accessories Seller webpage, where we take great pride in providing our customers with high-quality accessories that enhance the overall appearance of their garments. Our passion for fashion and dedication to customer satisfaction are what sets us apart from other accessory sellers.<br/>
            <Link to='/whyus' className='text-green-600 w-20 text-center text-gray'>See More</Link></p>
            </div>
            
        </div>
    );
};

export default WhyUs;