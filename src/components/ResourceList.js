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
        <div>
            <h2>Resources</h2>
            <ul>
                {resources.map(resource => (
                    <li key={resource._id}>{resource.name} - {resource.type}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;
