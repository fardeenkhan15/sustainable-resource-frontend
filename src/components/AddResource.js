// src/components/AddResource.js
import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const AddResource = () => {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        quantity: '',
        unit: ''
    });

    const [message, setMessage] = useState('');

    const { name, type, quantity, unit } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log('Submitting:', formData); // Log the form data before sending
        try {
            const res = await axiosInstance.post('/resources', { name, type, quantity, unit });
            setMessage('Resource added successfully!');
            setFormData({
                name: '',
                type: '',
                quantity: '',
                unit: ''
            });
            console.log('Response:', res.data);
        } catch (err) {
            console.error('Error:', err.response ? err.response.data : err.message);
            setMessage('Failed to add resource. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Add Resource</h2>
            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <input
                        type="text"
                        name="type"
                        value={type}
                        onChange={onChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={quantity}
                        onChange={onChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Unit</label>
                    <input
                        type="text"
                        name="unit"
                        value={unit}
                        onChange={onChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    Add Resource
                </button>
            </form>
            {message && <p className="mt-4 text-lg">{message}</p>}
        </div>
    );
};

export default AddResource;
