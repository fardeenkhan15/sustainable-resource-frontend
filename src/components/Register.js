import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const [message, setMessage] = useState('');

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setMessage('Passwords do not match');
        } else {
            try {
                const res = await axiosInstance.post('/auth/register', { name, email, password });
                console.log('Response:', res);
                localStorage.setItem('token', res.data.token);
                setMessage('Registration successful!');
                // Redirect or other actions
            } catch (err) {
                console.error('Error response:', err.response);
                setMessage('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
