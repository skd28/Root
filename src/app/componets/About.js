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
            <div className='bg-black pb-20 pb-5 pb-5 pb-5'>

                <div className='ps-10 py-10 ps-5 py-5 ps-5 py-5'>
                    {services && (
                        <p className="text-white text-4xl text-2xl text-xl ">
                            {services[0].attributes.Name}
                        </p>
                    )}
                    <div className="  w-16 h-1 pt-3 pt-2 w-10 ">
                        <div className=" bg-white w-16  h-1 rounded w-10 ">
                        </div>
                    </div>
                </div>

                <div className='grid grid-flow-col grid-flow-row   grid-flow-row grid-flow-row '>
                    <div className=' w-[370px] h-[370px]  mr-3 border-4   w-[670px] h-[400px]
                          w-[410px] h-[300px]  w-[340px] h-[380px] ' style={{
                            border: '2px solid gray',
                        }}>
                        {services && (
                            <img
                                src={services[0].attributes.ImgLink}
                                alt="Image Description"
                                className='w-[600px] h-[360px] w-[330px] h[290px] '
                            />
                        )}
                    </div>
                    <div className='text-white text-sm w-[660px] h-[390px]  pt-10 text-xl w-[680px]
                         h-[700px] mt-5  w-[410px] h-[600px]  text-small w-[340px] h-[650px] mt-10'  >
                        {services && (
                            <p className=" whitespace-pre-wrap text-justify  text-white">
                                {services[0].attributes.Description}</p>
                        )}
                    </div>
                </div>
            </div>



        </>
    );
}

export default About;


