import React from 'react';
import { heading } from '../constants';
import dataImg from '../assets/data-analytics.svg';

const Analytics = () => {
    return (
        <div className='analytics-wrapper'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                <img src={dataImg}
                className='w-[400px] mx-auto my-4'
                alt='Data-Analytics'/>
                <div className='flex flex-col justify-center'>

                    <p className='text2 font-bold p-1'> {`${heading.analyticsHeading}`} </p>

                    <h2 className='font-bold p-1'> {`${heading.analyticsTag}`} <span className='text2 highlight'>Centrally.</span></h2>

                    <p className='pl-1'> {`${heading.analyticsDesc}`} </p>

                    <button className='analytics-btn mx-auto md:mx-1 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;