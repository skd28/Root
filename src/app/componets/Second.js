"use client"
import React, { useState, useEffect } from 'react';
import ServiceItem from "./ServiceItem";

function Second() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://root-blogsite.onrender.com/api/our-developments/');
                const data1 = await response.json();
                console.log(data1);
                setServices(data1.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='bg-black py-16 px-6 md:px-16'>
            <div className='text-4xl text-white mb-8'>Services</div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {services.length > 0 ? (
                    services.map((service) => (
                        <ServiceItem
                            key={service.id}
                            name={service.attributes.name}
                            description={service.attributes.description}
                            GIFlink={service.attributes.GIFlink}
                        />
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
}

export default Second;
