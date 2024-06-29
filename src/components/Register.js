import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const navigate = useNavigate();

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match');
        } else {
            try {
                const res = await axiosInstance.post('/auth/register', { name, email, password });
                console.log(res.data);
                navigate('/login');
            } catch (err) {
                console.error(err.response.data);
            }
        }
    };

    return (
        <form onSubmit={onSubmit} className="max-w-md mx-auto my-8 p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" name="name" value={name} onChange={onChange} required className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" name="email" value={email} onChange={onChange} required className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" name="password" value={password} onChange={onChange} required className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input type="password" name="password2" value={password2} onChange={onChange} required className="w-full px-3 py-2 border rounded" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Register</button>
        </form>
    );
};

export default Register;
