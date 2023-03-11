import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="w-full bg-slate-900 px-5 h-[50px] flex justify-between items-center text-slate-100">
            <div className="flex gap-20">
                <Link to="/" className="font-extrabold text-xl">
                    MANAGESTUDENT
                </Link>
                <Link to="/">Home</Link>
                <Link to="/add">New Student</Link>
                <Link to="#">View</Link>
                <Link to="#">Dashboard</Link>
            </div>
            <div className="flex items-center">
                <FaRegUserCircle className="text-2xl" />
            </div>
        </div>
    );
};

export default Navbar;
