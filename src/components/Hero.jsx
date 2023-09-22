import React from 'react';
import ReactTyped from 'react-typed';
import { heading } from '../constants/index';

const Hero = () => {
    return (
        <div className='text'>
            <div className='hero-wrapper'>
                <p className=' md:text-2xl sm:text-1xl text-xl p-1 font-semibold '> {`${heading.heroHeading}`} </p>
                <h3 className='hero-heading2'>
                    Grow with <span className='text2'>GrowData.</span>
                </h3>
                <div className='flex justify-center items-center'>
                     <p className='md:text-2xl sm:text-1xl text-xl p-1 font-semibold '> Fast, Flexible, Financing for </p>
                        <ReactTyped 
                        className='md:text-2xl sm:text-1xl text-xl p-1 '
                        strings={['Buyer to Buyer', 'Buyer to Customer', 'Software as Services']}
                        typeSpeed={60}
                        backSpeed={70}
                        loop />
                </div>
                <p className='md:text-xl text-lg text-gray-500 pl-2'> 
                    {`${heading.heroDesc}`} 
                </p>
                <button 
                className='hero-btn'>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;