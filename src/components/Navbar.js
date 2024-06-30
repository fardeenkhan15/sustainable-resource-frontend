// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    <Link to="/">Resource Management</Link>
                </div>
                <div className="space-x-4">
                    <Link to="/register" className="text-white">Register</Link>
                    <Link to="/login" className="text-white">Login</Link>
                    <Link to="/resources" className="text-white">Resources</Link>
                    <Link to="/add-resource" className="text-white">Add Resource</Link>
                    <Link to="/predict" className="text-white">Predict</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
