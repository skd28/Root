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
                        <p className="text-white text-4xl lg:text-3xl md:text-2xl sm:text-xl ">
                            {services[0].attributes.Name}
                        </p>
                    )}
                    <div className="  w-16 h-1 pt-3  ">
                        <div className=" bg-white w-16  h-1 rounded ">
                        </div>
                    </div>
                </div>

                <div className='flex flex-row px-10   py-10 lg:py-10 lg:flex-row md:flex-col md:py-5 sm:py-5 sm:flex-col'>
                    <div className=' w-90% h-[50%] mt-10 ' style={{
                        border: '2px solid gray',
                    }}>
                        {services && (
                            <img
                                src='https://res.cloudinary.com/dgpftd5nf/image/upload/v1691578148/about_us_9aabba9fab.png'
                                //  src={services[0].attributes.ImgLink}
                                alt="Image Description"
                                className='w-90% h-[70%] '
                            />
                        )}
                    </div>
                    <div className='text-white text-sm mx-10 lg:mx-10 md:mx-0  sm:mx-0  mt-10 w-full h-full '  >
                        {services && (
                            <p className=" whitespace-pre-wrap text-justify  w-full h-full   text-white">
                                {services[0].attributes.Description}</p>
                        )}
                    </div>
                </div>
            </div>



        </>
    );
}

export default About;


