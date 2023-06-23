import React, { useState } from 'react';
import Popup from './Popup';
import './Productspage.css';

const ProductsList = (props) => {
    const [buttonPopup, setButtonPopup] = useState(false);

    const {image, id, name, category, stock, quality} = props.data;
    return (
        <div>
            <div >
                <div>
                <img onClick={()=> setButtonPopup(true)} className='w-72 h-72 p-2 cursor-pointer hover:border-2 hover:border-green-600' src={image}/>
                </div>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div>
                    <div className='font-semibold z-0 '>
                    <img className='w-full max-h-96 p-2' src={image} alt={category}/>
                    <p>Product Name: {name}</p>
                    <p>Product Details: Details Hare</p>
                    <p>Qualitu: {quality}</p>
                    <p>Category: {category}</p>
                    <p>Stock: {stock}</p>
                    </div>
                </div>
            </Popup>
        </div>
    );
};

export default ProductsList;