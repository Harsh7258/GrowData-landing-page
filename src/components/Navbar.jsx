import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [ menuBurger, setMenuBurger ] = useState(false);

    const handleNav = () => {
        setMenuBurger(!menuBurger);
    }
    return (
        <div className='text flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4'>
            <h3 className='w-full text-2xl font-bold text2'>GrowData.</h3>
            <ul className='hidden md:flex justify-between'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'> Contacts</li>
            </ul>

            <div
                className='p-4 block md:hidden'
                onClick={handleNav}>
                    {!menuBurger ? 
                    <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>
                    }
                </div>
            
            <div className={!menuBurger ? 'navToggle bg-color' : 'navToggleHide'}>
                 <h3 className='w-full text-2xl font-bold text2 m-6'>GrowData.</h3>
                <ul className='uppercase pt-20'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'> Contacts</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;