import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const ResourceList = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('/resources');
                setResources(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold my-4">Resources</h2>
            <ul className="space-y-4">
                {resources.map(resource => (
                    <li key={resource._id} className="p-4 bg-gray-100 rounded shadow">
                        <h3 className="text-xl font-semibold">{resource.name}</h3>
                        <p className="text-gray-600">{resource.type}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;
