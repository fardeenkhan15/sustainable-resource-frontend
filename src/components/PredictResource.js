// src/components/PredictResource.js
import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const PredictResource = () => {
    const [features, setFeatures] = useState({});
    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        setFeatures({
            ...features,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('/predict', { features });
            setPrediction(res.data.prediction);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Predict Resource</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Feature 1</label>
                    <input type="text" name="feature1" onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Feature 2</label>
                    <input type="text" name="feature2" onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                </div>
                {/* Add more features as necessary */}
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Predict</button>
            </form>
            {prediction && <p className="mt-4 text-lg">Prediction: {prediction}</p>}
        </div>
    );
};

export default PredictResource;
