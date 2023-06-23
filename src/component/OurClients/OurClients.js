import React from 'react';
import logo1 from '../images/company logo/logo1.png';

import logo11 from '../images/company logo/logo11.png';
import logo2 from '../images/company logo/logo2.png';
import logo3 from '../images/company logo/logo3.png';
import logo4 from '../images/company logo/logo4.png';
import logo5 from '../images/company logo/logo5.png';
import logo6 from '../images/company logo/logo6.png';
import logo7 from '../images/company logo/logo7.png';
import logo8 from '../images/company logo/logo8.png';
import logo9 from '../images/company logo/logo9.jpg';
import './OurClients.css';


const OurClients = () => {
    return (
        <div>
            <div className='clientcover flex justify-center items-center'>
                <h2 className='text-center text-6xl text-bold text-white '> Meet Your<br/> Reputed Clients</h2>
            </div>
            <div><h2 className='text-center text-2xl container'>Our Valued Clients: See the impressive list of companies and organizations we've had the pleasure of working with.</h2></div>
            <div className='logos flex flex-wrap justify-center items-center'>
                <img src={logo1}/>
                <img src={logo2}/>
                <img src={logo3}/>
                <img src={logo4}/>
                <img src={logo5}/>
                <img src={logo6}/>
                <img src={logo7}/>
                <img src={logo8}/>
                <img src={logo9}/>
                
                <img src={logo11}/>
                
            </div>
        </div>
    );
};

export default OurClients;