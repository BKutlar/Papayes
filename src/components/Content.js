import React from 'react';
import ImageOne from '../images/papayes.jpeg';
import ImageTwo from '../images/plat-papayes.jpg';

export const Content = () => {
    return (
        <>
        <div className="flex flex-col justify-content items-center bg-orange-500 h-screen font-momo py-40">
            <img src={ImageOne} alt="papayes" className="h-full rounded mb-20 shadow"/>
            
        <div className="flex flex-sol justify-center items-center">
        <h2 className="text-2xl mb-2 ml-2"> Papayes </h2>
        
        </div>
        <span className="mb-2">3$</span>
        </div>
        <div className="flex flex-col justify-content items-center bg-orange-500 h-screen font-momo py-40">
            <img src={ImageTwo} alt="papayes" className="h-full rounded mb-20 shadow"/>
            
        <div className="flex flex-sol justify-center items-center">
        <h2 className="text-2xl mb-35 ml-2"> Plat Papayes </h2>
        
        </div>
        <span className="mb-2">10$</span>
     
            </div>
        </>
    )
}
export default Content; 
