import React from 'react';
import {Link} from 'react-router-dom'; 

const DropDown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-orange-500" : 'hidden'}
            onClick={toggle}
        
        >
            <Link className="p-4 italic " to="/">Home</Link>
            <Link className="p-4 italic" to="/menu">Menu</Link>
            <Link className="p-4 italic" to="/about">About</Link>
            <Link className="p-4 italic" to="/contact">Contact</Link>
        </div>
    )
}

export default DropDown;
