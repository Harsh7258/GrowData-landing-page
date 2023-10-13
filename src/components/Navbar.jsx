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
                <li className='p-4'><a href='/'> Home </a></li>
                <li className='p-4'><a href='/'> Company </a></li>
                <li className='p-4'><a href='/'> Resources </a></li>
                <li className='p-4'><a href='/'> About </a></li>
                <li className='p-4'><a href='/'> Contacts </a></li>
            </ul>

            <div
                className='p-4 block md:hidden'
                onClick={handleNav}>
                    {!menuBurger ? 
                    <AiOutlineMenu size={20} /> : <AiOutlineClose size={20}/>
                    }
                </div>
            
            <div className={!menuBurger ?  
                'navToggleHide' : 
                'navToggle bg-color'}>
                 <h3 className='w-full text-2xl font-bold text2 m-6'>GrowData.</h3>
                <ul className='uppercase pt-20'>
                    <li className='p-4 border-b border-gray-600'><a href='/'> Home </a></li>
                    <li className='p-4 border-b border-gray-600'><a href='/'> Company </a></li>
                    <li className='p-4 border-b border-gray-600'><a href='/'> Resources </a></li>
                    <li className='p-4 border-b border-gray-600'><a href='/'> About </a></li>
                    <li className='p-4 border-b border-gray-600'><a href='/'> Contacts </a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;