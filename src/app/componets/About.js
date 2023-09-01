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
            <div className='bg-black  h-screen'>

                <div className=' '>
                    <div className='ps-10 py-10 sm:ps-5 sm:py-5 bs:ps-5 bs:py-5'>
                        {services && (
                            <p className="text-white text-4xl sm:text-2xl bs:text-xl ">
                                {services[0].attributes.Name}
                            </p>
                        )}
                        <div className="  w-16 h-1 pt-3 sm:pt-2 bs:w-10 ">
                            <div className=" bg-white w-16  h-1 rounded bs:w-10 ">
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' bg-black'>
                    <div className='grid grid-flow-col md:grid-flow-row md:ms-10 sm:grid-flow-row bs:grid-flow-row '>
                        <div className=' w-[370px] h-[370px] ms-16 mr-3  md:ms-3 md:w-[670px] md:h-[400px] sm:ms-2 sm:w-[410px] sm:h-[300px] bs:ms-3 bs:w-[340px] bs:h-[380px] ' style={{
                            border: '2px solid gray',
                        }}>
                            {services && (
                                <img
                                    src={services[0].attributes.ImgLink}
                                    alt="Image Description"
                                    className='w-[600px] h-[360px] bs:w-[330px] bs:h[290px] '
                                    style={{
                                        // border: '2px solid red',
                                    }}
                                />
                            )}
                        </div>
                        <div className='text-white text-sm w-[660px] h-[390px] md:pt-10 md:text-xl md:w-[680px] md:h-[700px] sm:mt-5 sm:ms-2 sm:w-[410px] sm:h-[600px] bs:ms-3 bs:text-small bs:w-[340px] bs:h-[600px] bs:mt-10'
                            style={{
                                //  border: '2px solid gray',
                            }}
                        >
                            {services && (
                                <p className=" whitespace-pre-wrap text-justify text-white">
                                    {services[0].attributes.Description}

                                </p>
                            )}
                        </div>
                    </div>
                </div>


            </div>



        </>
    );
}

export default About;


