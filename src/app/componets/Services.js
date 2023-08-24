"use client"
import React, { useState, useEffect } from 'react';

const data1 =
{
    "data": [
        {
            "id": 1,
            "attributes": {
                "Name": "Network Support & Maintenance",
                "Description": "We can set up and maintain your business's network, or help troubleshoot and maintain your existing network. ",
                "createdAt": "2023-07-29T05:37:12.532Z",
                "updatedAt": "2023-07-29T05:37:14.550Z",
                "publishedAt": "2023-07-29T05:37:14.542Z"
            }
        },
        {
            "id": 2,
            "attributes": {
                "Name": "IT Support",
                "Description": "We are available to consult with you or your staff when problems arise with your software. This service can be either remote or on-site assistance.",
                "createdAt": "2023-07-29T05:38:09.713Z",
                "updatedAt": "2023-07-29T05:38:12.362Z",
                "publishedAt": "2023-07-29T05:38:12.358Z"
            }
        },
        {
            "id": 3,
            "attributes": {
                "Name": "Cloud Services & Data Management",
                "Description": "We will work with you to establish the appropriate cloud size and available resources for your business. ",
                "createdAt": "2023-07-29T05:49:22.644Z",
                "updatedAt": "2023-07-29T05:49:24.431Z",
                "publishedAt": "2023-07-29T05:49:24.425Z"
            }
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 3
        }
    }
};
// const apiEndpoint = 'Api link';

function Services() {

    const [use, setUse] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setUse(data1.data.map(item => item.attributes));
            // try {
            //      const response = await fetch(apiEndpoint);
            //      const data1 = await response.json();
            //     setServices(data1.data);
            // } catch (error) {
            //     console.error('Error fetching data:', error);
            // }
        };

        fetchData();
    }, [])

    return (
        <>
            {/* Test My Code  */}

            <div className='bg-custom-blue '>
                <div className='text-white text-4xl pt-14 ps-10 pb-10'>
                    <div className='text-white'>
                        <h1>Services</h1>
                        <div className='pt-3'>
                            <img src={`/Image/Line 20.png`} alt="Image Description" />
                        </div>
                    </div>
                </div>
                <div className='text-center text-white pt-10 pb-20 '>
                    {use.map(item => (
                        <div key={item.id}>
                            <h3 className='font-semibold py-5 text-base'>{item.Name}</h3>
                            <div className='text-center justify-center  flex flex-col'>
                                <p className='px-80 text-sm'>{item.Description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='bg-black py-4 px-10  drop-shadow-2xl '>
                    <div className='sm:flex sm:justify-between'>
                        <p className='text-white text-xs'>
                            Copyright © 2023 Root Technologies - All Rights Reserved.
                        </p>
                        <div className='mt-8 flex flex-wrap justify-start gap-4  sm:mt-0 lg:justify-end text-xs text-white' >

                            <span>  Powered by
                                <a href='https://www.godaddy.com/en-in/websites/website-builder?isc=pwugc&utm_source=
                                wsb&utm_medium=applications&utm_campaign=en-in_corp_applications_base' target="_blank" ><u>GoDaddy</u></a>
                            </span>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
