import React from "react";
import { useState } from "react";
import LOGO from '../assets/logo.png'
import { useNavigate } from "react-router-dom";
const Header = ({ square }) => {
    const navigate = useNavigate();
    return (
        <div className="z-50 flex items-center justify-around  border-b border-black sticky top-0 bg-gray-300">
            <div>
                <img src={LOGO} className="h-[80px] w-[80px]"/>
            </div>
            <div className="flex gap-2">
                <p className='cursor-pointer' onClick={ () => navigate('/') }>Home</p>
                <p className='cursor-pointer' onClick={ () => navigate('/contact') }>Contact us</p>
                <p className='cursor-pointer' onClick={ () => navigate('/about') }>About us</p>
            </div>
            <div>Cart</div>
        </div>
    )
}

export default Header;