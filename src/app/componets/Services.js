"use client"
import React, { useState, useEffect } from 'react';



function Services() {

    const [services, setServices] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch('https://root-blogsite.onrender.com/api/services/', {
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
            {/* Test My Code  */}

            <div className='bg-custom-blue '>
                <div className='text-white text-4xl pt-14 ps-10 pb-10'>
                    <div className='text-white'>
                        {services && (
                            <p className="text-white text-4xl">
                                {services[0].attributes.Name}
                            </p>
                        )}
                        <div className='pt-3'>
                            <img src={`/Image/Line 20.png`} alt="Image Description" />
                        </div>
                    </div>
                </div>
                <div className='text-center text-white pt-10 pb-20 '>
                    {services &&

                        services.map(item => (
                            <div key={item.id}>
                                <h3 className='font-semibold py-5 text-base'>{item.attributes.Title}</h3>
                                <div className='text-center justify-center  flex flex-col'>
                                    <p className='px-80 text-sm'>{item.attributes.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className='mt-8 flex flex-wrap justify-start gap-4  sm:mt-0 lg:justify-end text-xs text-white'
                >

                    <span>{services && <img src={services[0].attributes.LinkedinLogoLink} alt='imge not found' />}</span>
                    <span>{services && <img src={services[0].attributes.TwitterLogoLink} alt='imge not found' />}</span>
                    <span>{services && <img src={services[0].attributes.whatsaapLogoLink} alt='imge not found' />}</span>

                </div>

                <div className='bg-black py-4 px-10  drop-shadow-2xl '>

                    <div className='sm:flex sm:justify-between'>

                        <p className='text-white text-xs'>
                            Copyright © 2023 Root Technologies - All Rights Reserved.
                        </p>
                        <div className='mt-8 flex flex-wrap justify-start gap-4  sm:mt-0 lg:justify-end text-xs text-white'

                        >

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
