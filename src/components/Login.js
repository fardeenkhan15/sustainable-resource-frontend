// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('/auth/login', { email, password });
            console.log('Response:', res);
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                setMessage('Login successful!');
                navigate('/resources');  // Redirect to resource page
            } else {
                setMessage('Login failed. No token received.');
            }
        } catch (err) {
            console.error('Error response:', err.response);
            if (err.response && err.response.data) {
                setMessage(err.response.data.msg || 'Login failed. Please try again.');
            } else {
                setMessage('Login failed. Please try again.');
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    Login
                </button>
            </form>
            {message && <p className="mt-4 text-lg">{message}</p>}
        </div>
    );
};

export default Login;
