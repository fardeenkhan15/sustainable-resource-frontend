// src/components/ResourceList.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import ResourceChart from './ResourceChart';

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
        <div>
            <h2 className="text-2xl font-bold mb-4">Resources</h2>
            <ul>
                {resources.map(resource => (
                    <li key={resource._id}>{resource.name} - {resource.type}</li>
                ))}
            </ul>
            <ResourceChart data={resources} />
        </div>
    );
};

export default ResourceList;
