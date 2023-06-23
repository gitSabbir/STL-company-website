import React from 'react';
import { Link } from 'react-router-dom';

const Cover = () => {
    return (
        <div className='w-[100%] h-[100vh] grid items-center'>
            <div className='imgSlider flex flex-col items-center justify-center'>
                <div className='min-w-2/4 flex justify-center items-center flex-col p-2 bg-green-600 rounded'>
                <h1 className='text-7xl text-white font-extrabold text-center'>Experience The</h1>
                <h1 className='text-7xl text-center text-white font-extrabold'>Revolution</h1>
                <h3 className='text-3xl text-center text-white font-bold'>Number One Garments Accessories saller Band <br/>In Bangladesh!</h3>
                <br/>
                <Link to='/contact'> <button className='contactButton rounded font-bold text-center hover:bg-gray-300 hover:text-white'>Contact with Us</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default Cover;