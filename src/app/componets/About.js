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

    // const LineBreaks = (text) => {
    //     return text.split('. ').map((sentence, index) => (
    //         <React.Fragment key={index}>
    //             {sentence}.
    //             <br />
    //         </React.Fragment>
    //     ));
    // };

    return (
        <>
            <div className='bg-black  h-screen'>

                <div className=' '>
                    <div className='   ps-10 xl:py-10  lg:py-8 md:py-7 sm:py-4'>
                        {services && (
                            <p className="text-white xl:text-4xl lg:text-3xl md:text-xl sm:text-lg ">
                                {services[0].attributes.Name}
                            </p>
                        )}
                        <div className="  xl:w-16 lg:w-14 md:w-12 sm:w-10 h-1 pt-3  sm:pt-1  md:pt-2 ">
                            <div className=" bg-white xl:w-16 lg:w-14 md:w-12 sm:w-10 h-1 rounded">
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' bg-black'>
                    <div className='grid grid-flow-col '>
                        <div className=' xl:w-[370px] xl:h-[370px] lg:w-[320px] lg:h-[320px] md:w-[270px] md:h-[270px] sm:w-[220px] sm:h-[220px] ms-16 mr-3 ' style={{
                            border: '2px solid gray',
                        }}>
                            {services && (
                                <img
                                    src={services[0].attributes.ImgLink}
                                    alt="Image Description"
                                    className='xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px]'
                                    style={{
                                        // border: '2px solid red',
                                    }}
                                />
                            )}
                        </div>
                        <div className='text-white  xl:w-[660px] xl:h-[410px] lg:w-[600px] lg:h-[370px]  md:w-[550px] md:h-[320px] sm:w-[500px] sm:h-[280px]  xl:text-sm md:text-xs lg:text-xs '
                            style={{
                                // border: '2px solid gray',whitespace-pre-wrap
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


