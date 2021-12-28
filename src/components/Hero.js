import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="bg-orange-500 h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-6xl md:text-7xl sm:text-5xl text-3xl font-back mb-14">
                PAPAYES
            </h1>
            <Link className="py-6 px-10 bg-yellow-500 rounded-full text-3xl 
            hover:bg-yellow-300 transition duration-300 ease-in-out felx items-center animate-bounce"
             to="/">
            Order Now
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
            </path>
            </svg>
            </Link>
        </div>
    )
}

export default Hero;
