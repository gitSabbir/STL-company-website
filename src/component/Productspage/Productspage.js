import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { productData } from './productData';
import ProductsList from './ProductsList';
import './Productspage.css';

const Productspage = () => {
    const {category} = useParams();
    console.log(category);

    

    let selectedProduct = productData.filter(pd => pd.category === category);

    if(category === undefined){
        selectedProduct = productData;
    }

    return (
        <div>
            <div className=''>
                <div className='w-full h-56 bg-green-700 flex items-center justify-center '>
                    <h3 className='text-white text-3xl text-bold'>View Our Products</h3>

                </div>
                <div>
                    <div className='flex justify-center items-center category font-semibold'>
                        <ul>
                            <li className=''><Link className='active' to='/products'>View All</Link></li>
                            <li><Link to='/products/buttons'>Buttons</Link></li>
                            <li><Link to='/products/cottons'>Zippers</Link></li>
                            <li><Link to='/products/tag'>Snaps</Link></li>
                            <li><Link to='/products/label'>Velcro</Link></li>
                            <li><Link to='/products/strip'>Hooks and Eyes</Link></li>
                            <li><Link to='/products/buttons'>Buckles</Link></li>
                            <li><Link to='/products/tag'>Eyelets</Link></li>
                        </ul>
                        
                    </div>
                    <hr/>
                </div>
                <div className='flex items-center justify-center p-10'>
                <div className='flex flex-wrap justify-center items-center w-4/5'>
                    
                    {
                        selectedProduct.map(pd => <ProductsList data={pd}></ProductsList>)
                    }
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default Productspage;