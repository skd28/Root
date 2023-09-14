"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';



function About() {
    const [services, setServices] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch('https://root-blogsite.onrender.com/api/about-uses/', {
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
            <div className='bg-black pb-20'>

                <div className=' py-5 px-7 '>
                    {services && (
                        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            ABOUT US!
                        </p>
                    )}
                    <div className="  w-16 h-1 pt-1 lg:pt-3 lg:w-24">
                        <div className=" bg-white w-16  h-1 rounded lg:w-24">
                        </div>
                    </div>
                </div>

                <div className='flex flex-col px-10 lg:flex-row'>
                    <div className=' w-90% h-[50%] mt-10 lg:mt-14' style={{
                        border: '2px solid gray',
                    }}>
                        {services && (
                            <img
                                src='https://res.cloudinary.com/dgpftd5nf/image/upload/v1691578148/about_us_9aabba9fab.png'
                                //  src={services[0].attributes.ImgLink}
                                alt="Image Description"
                                className='w-full h-full '
                            />
                        )}
                    </div>
                    <div className='text-white text-sm  mt-10 w-full h-full lg:px-7 lg:mt-14 '  >
                        {services && (
                            <p className=" whitespace-pre-wrap text-justify  w-full h-full text-white">
                                {services[0].attributes.Description}</p>
                        )}
                    </div>
                </div>
            </div>



        </>
    );
}

export default About;


