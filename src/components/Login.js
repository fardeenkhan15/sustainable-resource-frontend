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
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
