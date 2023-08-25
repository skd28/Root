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

                <div className=' bg-black'>
                    <div className='grid grid-flow-col '>
                        <div className='text-white w-[370px] h-[370px] ms-16 mr-3 ' style={{
                            border: '2px solid gray',
                        }}>
                            {services && (
                                <img
                                    src={services[0].attributes.ImgLink}
                                    alt="Image Description"
                                    className='w-[350px] h-[350px]'
                                    style={{
                                        // border: '2px solid red',
                                    }}
                                />
                            )}
                        </div>
                        <div className='text-white  w-[660px] h-[410px] text-sm '
                            style={{
                                // border: '2px solid gray',whitespace-pre-wrap
                            }}
                        >
                            {services && (
                                <p className=" whitespace-pre-wrap text-justify">
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


