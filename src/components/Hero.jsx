import React from 'react';
import ReactTyped from 'react-typed';
import { heading } from '../constants/index';

const Hero = () => {
    return (
        <div className='text'>
            <div className='hero-wrapper'>
                <p className=' md:text-2xl sm:text-1xl text-xl p-1'> {`${heading.heroHeading}`} </p>
                <h3 className='hero-heading2'>
                    Grow with <span className='text2'>GrowData.</span>
                </h3>
                <div className='flex justify-center items-center'>
                     <p className='md:text-2xl sm:text-1xl text-xl p-1'> Fast, Flexible, Financing for </p>
                        <ReactTyped 
                        className='md:text-2xl sm:text-1xl text-xl p-1 '
                        strings={['Buyer to Buyer', 'Buyer to Customer', 'Software as Services']}
                        typeSpeed={60}
                        backSpeed={70}
                        loop />
                </div>
            </div>
        </div>
    );
};

export default Hero;