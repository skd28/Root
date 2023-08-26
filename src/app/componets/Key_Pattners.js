"use client"
import React, { useState, useEffect } from 'react';

function Key_Patterns() {

    const [services, setServices] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch('https://root-blogsite.onrender.com/api/key-partner/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
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
        <>
            <div>
                <div className='text-4xl text-white'>
                    <div className='   ps-10 py-10'>
                        {services && (
                            <p className="text-white text-4xl">
                                {services[0].attributes.Name}
                            </p>
                        )}
                        <div className="w-16 h-1 pt-3">
                            <div className=" bg-white w-16 h-1 rounded">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Key_Patterns