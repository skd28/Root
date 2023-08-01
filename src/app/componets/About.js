"use client"
import React, { useState, useEffect } from 'react';

const data1 = {
    "data": [
        {
            "id": 1,
            "attributes": {
                "Name": "ABOUT US!",
                "description": "Root Technologies is a leading IT Services Integrator delivering world-class IT infrastructure services to customers PAN India. We are a team of dedicated professionals and certified engineers focusing on innovation to provide cost-effective solutions and efficient services.\n\nWe work together with our customers to deliver and deploy highly sophisticated IT infrastructure in order to reduce the complexities and increase value in the business.",
                "imglink": "https://www.figma.com/file/Yg7U9j4h5McaRG6JMundVE/Untitled?type=design&node-id=1145-3020&mode=design&t=B9JRPt6Ras6gAiQo-0",
                "createdAt": "2023-07-28T06:46:09.688Z",
                "updatedAt": "2023-07-28T06:47:55.317Z",
                "publishedAt": "2023-07-28T06:46:11.767Z"
            }
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 1
        }
    }
};

// const apiEndpoint = 'Api link'; 

function About() {
    const [services, setServices] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            setServices(data1.data[0].attributes);
            // try {
            //      const response = await fetch(apiEndpoint);
            //      const data1 = await response.json();
            //     setServices(data1.data);
            // } catch (error) {
            //     console.error('Error fetching data:', error);
            // }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='bg-black py-16 px-16'>
                <div className='text-4xl  '>
                    <ul className='text-white '>
                        <li>{services && services.Name}</li>
                        <li className='pt-3'>
                            <img src={`/Image/Line 20.png`} alt="Image Description" />
                        </li>
                    </ul>
                </div>
                <div className='flex flex-row items-center  px-10'>
                    <div className='border border-solid border-gray-300 m-14'>
                        <img src={`/Image/Frame 38.png`} alt="Image Description" />
                    </div>
                    <div className='text-white w-96 text-justify'>
                        <p >{services && services.description}</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;





