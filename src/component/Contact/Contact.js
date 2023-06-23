import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React } from 'react';
import './Contact.css';

const Contact = () => {


    return (
        <div>
            <div className='contactcover flex flex-col justify-center items-center'>
                    <h2 className='text-4xl text-center max-sm:p-5 text-bold bg-green-600 text-black border-2 rounded-lg border-black  p-5'>Feel Free To Contact<br/> With Us</h2>
                </div>
            <div className='contactpage container max-sm:flex-col space-x-11 '>
                <div className=' text-center flex justify-center items-center flex-col pb-12'>
                    <h4 className='font-bold text-4xl p-4'>Contact our sales team</h4>
                    <p className='font-bold text-xl'>Let us know what is your queries!</p>
                    <p className='font-bold text-xl'>Our sales team will contact you.</p>
                </div>
                <form className='border-2 border-green-600'>
                    <h3>Contact Us Now</h3>
                    <input type='text' id='name' placeholder='Your Name' required/>
                    <input type='text' id='email' placeholder='Enter Email Address' required/>
                    <input type='text' id='subject' placeholder='Subject' required/>
                    <textarea id='massage' rows='4' placeholder='Input Text'></textarea>
                    <button type='submit'>Send</button>

                </form>
            </div>



            <div className='flex flex-col justify-center items-center min-h-screen w-screen font-semibold bg-slate-700' >
                <div className='flex justify-between max-lg:flex-col items-center text-white max-xl:w-screen p-40  w-4/5 text-center'>
                    <div className=''>
                        <ul className='text-center'>
                            <li className='text-center text-xl'><FontAwesomeIcon icon={faLocationDot} size='xl'/> </li>
                            <li className='text-xl text-bold'>Location</li>
                            <li className='text-xl '>Office:</li>
                            <li className='text-xl '>House: 255, Road: 5,<br/> Avenue: 3, Mirpur DOHS</li>
                            <li className='text-xl '>Dhaka, Bangladesh</li>
                        </ul>
                    </div>
                    
                    <div className=''>
                        <ul>
                        <li className='text-center text-xl'><FontAwesomeIcon icon={faEnvelope} size='xl'/> </li>
                            <li className='text-xl text-bold'>Email</li>
                            <li className='text-xl '>Marketing Head:</li>
                            <li className='text-xl '>lts.ltslimited@stl.com</li>
                            <li className='text-xl '>Marketing Executive:</li>
                            <li className='text-xl '>lts.ltslimited@stl.com</li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul>
                        <li className='text-center text-xl'><FontAwesomeIcon icon={faPhone} size='xl'/> </li>
                            <li className='text-xl text-bold'>Phone</li>
                            <li className='text-xl '>Marketing Head:</li>
                            <li className='text-xl '>+88094682216</li>
                            <li className='text-xl '>Marketing Executive:</li>
                            <li className='text-xl '>+88094682216</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center justify-center h-96 w-full' >
                <iframe className='w-4/6 h-96' src="https://maps.google.com/maps?q=mirpur%20dohs&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"  marginheight="0" marginwidth="0"></iframe>
                </div>

            </div>
        
        
        </div>
    );
}


export default Contact;