import React from 'react';
import './Productspage.css';

const Popup = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn p-1 rounded-sm hover:bg-red-700 hover:text-white  font-semibold' onClick={()=>props.setTrigger(false)}> close X</button>
                {props.children}
            </div>
        </div>

    ): "";
};

export default Popup;