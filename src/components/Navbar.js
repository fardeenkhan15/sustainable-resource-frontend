import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">Resource Management Dashboard</div>
                <div className="space-x-4">
                    <Link to="/resources" className="hover:text-gray-300">Resources</Link>
                    <Link to="/add-resource" className="hover:text-gray-300">Add Resource</Link>
                    <Link to="/login" className="hover:text-gray-300">Login</Link>
                    <Link to="/register" className="hover:text-gray-300">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
