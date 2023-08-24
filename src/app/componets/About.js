"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';



function About() {
    const [services, setServices] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            // setServices(data1.data[0].attributes);
            try {
                const response = await fetch('https://root-blogsite.onrender.com/api/about-uses');
                const data1 = await response.json();
                console.log(data1);
                setServices(data1.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const LineBreaks = (text) => {
        return text.split('. ').map((sentence, index) => (
            <React.Fragment key={index}>
                {sentence}.
                <br />
            </React.Fragment>
        ));
    };

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


