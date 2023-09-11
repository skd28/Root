"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Lotiee from 'lottie-react';
import server from '../animation/server.json';
import user from '../animation/user.json';
import virtual from '../animation/virtual.json';
import unified from '../animation/unified.json';
import security from '../animation/security.json';
import network from '../animation/network.json';
import power from '../animation/power.json';
import intergation from '../animation/intergation.json';
import datacenter from '../animation/datacenter.json';

const data = [
    { id: 3, json: datacenter },
    { id: 4, json: user },
    { id: 7, json: virtual },
    { id: 8, json: unified },
    { id: 9, json: security },
    { id: 1, json: network },
    { id: 2, json: power },
    { id: 5, json: intergation },
    { id: 6, json: server },
];

function Solutions() {


    const [services, setServices] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch('https://root-blogsite.onrender.com/api/solutions', {
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
    const handlePrev = () => {
        setCurrentSlide((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        if (services && currentSlide < services.length - 3) {
            setCurrentSlide((prevIndex) => prevIndex + 1);
        }
    };


    return (
        <>
            <div className='bg-[#164179] py-10 overflow-scroll'>
                <div className='px-10'>
                    <p className='text-white text-4xl md:text-2xl lg:text-3xl xl:text-4xl'>
                        {services && services[0].attributes.Title}
                    </p>
                    <div className="mt-3 bg-white w-24 h-1 rounded">
                    </div>
                </div>

                <div className='flex flex-col md:flex-row text-white mt-10 items-center content-center relative' style={{
                    // border: '2px solid red'
                }}>
                    {/* Arrow */}
                    <div className='my-auto mx-auto absolute left-3'>
                        <span onClick={handlePrev} className='cursor-pointer text-4xl' >{'<<'}</span>
                    </div>
                    {services &&
                        services.slice(currentSlide, currentSlide + 3).map((item, index) => (
                            <div className={`${index == 1 ? "w-full h-full" : "hidden md:block w-full h-full"}`} key={item.id}>
                                {/* {console.log('item: ' + item.id)} */}
                                <div className={`${index == 1 ? 'flex flex-col w-full mx-auto rounded-2xl justify-center space-y-4' : 'flex flex-col w-5/6 mx-auto rounded-2xl justify-center space-y-2'}`} style={{
                                    backgroundColor: 'rgba(217, 217, 217, 0.12)',
                                }}>
                                    {/* Heading */}
                                    <div className={`${index == 1 ? 'w5/6 w-full mx-auto text-center text-2xl rounded-2xl' : 'w-5/6 mx-auto text-center text-xl rounded-2xl'}`} style={{
                                        backgroundColor: 'rgba(217, 217, 217, 0.12)',
                                    }} >
                                        <span > {item.attributes.SubTitle} </span>
                                    </div>
                                    {/* Image */}

                                    <div className='mx-auto rounded-2xl border-4 border-red-900' style={{
                                        backgroundColor: 'rgba(217, 217, 217, 0.12)',
                                    }}>
                                        <img src={item.attributes.TitleGifLink} className='mx-auto w-Full h-[245px] rounded-2xl' />
                                    </div>

                                    {/* Description     */}
                                    <div className='w-full  text-justify  rounded-2xl' style={{
                                        backgroundColor: 'rgba(217, 217, 217, 0.12)',
                                    }}>
                                        <p className=' text-sm text-justify p-3' style={{
                                        }}> {item.attributes.Description}</p>

                                        <span className='rounded-2xl pt-3 flex items-end justify-end cursor-pointer' onClick={() => router.push('our_solution')} >
                                            <img src='/Image/button.png' alt='Image not Found' className='w-6 h-6' />
                                        </span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    {/* Arrow */}
                    <div className='my-auto mx-auto absolute right-1'>
                        <span onClick={handleNext} className='cursor-pointer text-4xl'>{'>>'}</span>
                    </div>
                </div>

            </div>

            {/* <div className='bg-[#164179]' >

                {data.map(item => (
                    <div key={item.id}>
                        {console.log('item: ' + item.id)}

                        Render the Lottie animation
                        <Lotiee animationData={item.json} className='w-96 h-96 items-center ' />
                        <span > {item.attributes.SubTitle} </span>
                    </div>
                ))}
            </div> */}
        </>
    )
}

export default Solutions
