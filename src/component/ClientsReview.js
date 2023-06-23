import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import photo1 from './images/company logo/logo7.png';

const ClientsReview = () => {
    return (
        <div className='bg-gray-800 p-5 text-white font-semibold'>
            <h2 className='text-center text-2xl'>Clients Review</h2>
            <hr/>
                <div className=' flex flex-row max-sm:flex-col justify-center items-center max-sm:space-x-0 max-sm:space-y-3 container space-x-3 max-lg:w-full'>
                <div className='border-2 border-white-600   w-96 min-h-96 p-5 rounded-2xl'>
                    <div className='flex flex-row  w-90 justify-between '>
                        <img className='w-20 rounded-full' src={photo1} alt='review'/>
                        <div>
                        <FontAwesomeIcon icon={faStar} className='rounded'/>
                        <p>5.00</p>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className='text-bold pt-2'>Androw Tete</h2>
                        <p className='text-bold text-sm'>Businessman</p>
                        <p className='font-semibold'>This is he review of the clirnts. This is he review of the clirnts.This is he review of the clirnts.</p>
                    </div>
                </div>

                <div className='border-2 border-white-600 w-96 min-h-96 p-5 rounded-2xl'>
                    <div className='flex flex-row w-90 justify-between'>
                        <img className='w-20 rounded-full' src={photo1} alt='review'/>
                        <div>
                        <FontAwesomeIcon icon={faStar} className='rounded'/>
                        <p>5.00</p>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className='text-bold pt-2'>Androw Tete</h2>
                        <p className='text-bold text-sm'>Businessman</p>
                        <p>This is he review of the clirnts. This is he review of the clirnts.This is he review of the clirnts.</p>
                    </div>
                </div>

                <div className='border-2 border-white-600 w-96 min-h-96 p-5 rounded-2xl'>
                    <div className='flex flex-row w-90 justify-between'>
                        <img className='w-20 rounded-full' src={photo1} alt='review'/>
                        <div>
                        <FontAwesomeIcon icon={faStar} className='rounded'/>
                        <p>5.00</p>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className='text-bold pt-2'>Androw Tete</h2>
                        <p className='text-bold text-sm'>Businessman</p>
                        <p>This is he review of the clirnts. This is he review of the clirnts.This is he review of the clirnts.</p>
                    </div>
                </div>

                <div className='border-2 border-white-600 w-96 min-h-96 p-5 rounded-2xl'>
                    <div className='flex flex-row w-90 justify-between'>
                        <img className='w-20 rounded-full' src={photo1} alt='review'/>
                        <div>
                        <FontAwesomeIcon icon={faStar} className='rounded'/>
                        <p>5.00</p>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className='text-bold pt-2'>Androw Tete</h2>
                        <p className='text-bold text-sm'>Businessman</p>
                        <p>This is he review of the clirnts. This is he review of the clirnts.This is he review of the clirnts.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsReview;