import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const AddResource = () => {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        quantity: '',
        unit: ''
    });

    const { name, type, quantity, unit } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('/resources', { name, type, quantity, unit });
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={onChange} required />
            </div>
            <div>
                <label>Type</label>
                <input type="text" name="type" value={type} onChange={onChange} required />
            </div>
            <div>
                <label>Quantity</label>
                <input type="number" name="quantity" value={quantity} onChange={onChange} required />
            </div>
            <div>
                <label>Unit</label>
                <input type="text" name="unit" value={unit} onChange={onChange} required />
            </div>
            <button type="submit">Add Resource</button>
        </form>
    );
};

export default AddResource;
