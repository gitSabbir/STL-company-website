import React from 'react';
import logo1 from './images/company logo/logo1.png';
import logo11 from './images/company logo/logo11.png';
import logo12 from './images/company logo/logo12.png';
import logo2 from './images/company logo/logo2.png';
import logo3 from './images/company logo/logo3.png';
import logo4 from './images/company logo/logo4.png';
import logo5 from './images/company logo/logo5.png';
import logo6 from './images/company logo/logo6.png';
import logo7 from './images/company logo/logo7.png';
import logo8 from './images/company logo/logo8.png';
import logo9 from './images/company logo/logo9.jpg';


const ClientsBar = () => {
    
    return (
        <div>
            <h2 className='text-center p-5 text-2xl bg-green-600 text-bold text-white m-4 rounded'>Our Clients</h2>
            <div className="slider">
                <div className="slide-track-1">
                    <div className="slide">
                        <img src={logo1} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={logo2} alt=""/>
                    </div>

                    <div className="slide">
                        <img src={logo3} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={logo4} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={logo5} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={logo6} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={logo7} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={logo8} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={logo9} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={logo11} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={logo12} alt=""/>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default ClientsBar;