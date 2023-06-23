import React from 'react';

import './Faq.css';

const Faq = () => {
    return (
        <div className='text-center '>
                <div className=' faqcover max-lg:h-[600px] flex flex-row justify-center items-center max-sm:items-center  max-sm:p-0 text-green-600 '>
                    <div className='w-1/6 h-[600px] max-sm:none'></div>
                    <h2 className='text-4xl text-bold max-w-[400px] border-2 border-green-600 max-sm:bg-green-600 text-black p-10 rounded-md comp'>We have compiled a list of frequently asked questions to help you better understand our products and services.</h2>
                </div>
            <div className='text-center container font-semibold'>
            

            <h4 className='text-2xl text-bold'>Q: What types of accessories do you offer?</h4><br/>

            <span className='text-bold'>Answer: </span> We offer a wide range of accessories including phone cases, screen protectors, charging cables, headphones, and more.<br/><br/>

            <h4 className='text-2xl text-bold'>Q: Do you offer international shipping?</h4><br/>

            <span className='text-bold'>Answer:</span> Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary depending on your location.<br/><br/>

            <h4 className='text-2xl text-bold'>Q: What is your return policy?</h4><br/>

            <span className='text-bold'>Answer:</span> We accept returns within 30 days of purchase for products that are in new, unused condition. Shipping charges are not refundable and return shipping is the responsibility of the customer..<br/><br/>

            <h4 className='text-2xl text-bold'>Q: How can I track my order?</h4><br/>

            <span className='text-bold'>Answer:</span> Once your order is processed and shipped, you will receive an email with tracking information. You can also log in to your account on our website to view the status of your order.<br/><br/>

            <h4 className='text-2xl text-bold'>Q: What payment methods do you accept?</h4><br/>

            <span className='text-bold'>Answer:</span> We accept most major credit cards, PayPal, and Apple Pay.<br/><br/>

            <h4 className='text-2xl text-bold'>Q: How can I contact customer service?</h4><br/>

            <span className='text-bold'>Answer:</span> You can contact customer service through our website's contact form or by emailing us at [insert email address]. We strive to respond to all inquiries within 24-48 hours.<br/><br/>

            <h4 className='text-2xl text-bold'>Q: Do you offer bulk discounts?</h4><br/>

            <span className='text-bold'>Answer:</span>A: Yes, we offer bulk discounts for orders of 10 or more items. Please contact us for more information.<br/><br/>

            <h4 className='text-2xl text-bold'>Q: How do I know if a product will fit my device?</h4><br/>

            <span className='text-bold'>Answer:</span> We provide product descriptions and specifications on our website to help you choose the correct product for your device. If you have any questions or concerns, please contact our customer service team for assistance.<br/><br/>

            

             Thank you for visiting the STL Accessories Ltd FAQ page. If you have any additional questions or concerns, please do not hesitate to contact us.<br/><br/>

            </div>
        </div>
    );
};

export default Faq;