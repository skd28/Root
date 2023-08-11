"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';





function Our_Development() {
    const [services, setServices] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch('https://root-blogsite.onrender.com/api/our-developments');
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
            <div className="relative overflow-hidden  bg-cover bg-center bg-no-repeat "
                style={{
                    backgroundImage: 'url("/Image/content.png")',
                }}>


                <div className='ms-32 my-5 flex-grow' >
                    <img src="/Image/Group (2).png" alt="Image Description" />
                    <ul className='ps-12 pb-10'>
                        <li className='text-white text-4xl space-x-10'>
                            <a className='underline underline-offset-8'> OUR D</a>evelopment
                        </li>
                    </ul>
                </div>
            </div >


            <div className='bg-blue-900'>

                <div className='pt-20'>
                    <ul
                        className='bg-sky-900 text-sm rounded-md  h-28 w-2/5 pb-20 ms-28  me-96'>
                        <li>
                            <p className=' text-white py-9 px-6 text-center'>
                                As one of the leading software development companies,
                                we at Root Technologies have a diverse range of services
                                for our clients, where we operate in these core areas
                                services.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center'>
                    <div className='ms-28'>
                        <div>
                            <h3 className=' h-7  w-40  text-white text-center rounded-xl border border-gray-200 bg-slate-400'>Web Development</h3>
                        </div>
                        <div>
                            <p className='mt-4 h-36 w-40 text-sm   text-center rounded-md bg-gradient-to-br from-purple-400 via-purple-300 to-transparent
                                bg-gradient-to-t from-white via-gray-200 to-gray-200' >

                                We help companies with unique and
                                comprehensive web development services
                                that empower you and your clients.
                            </p>
                        </div>
                    </div>
                    <div className=''>
                        <div className="bg-right-top bg-no-repeat h-96 w-full"
                            style={{ backgroundImage: "url('/Image/D1.png')" }}>
                            <div className='pt-20'>
                                <img
                                    src="/Image/Group (2).png"
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-24 pb-20'>
                    <div className="relative ">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex items-center justify-between ms-15">
                            <span className="bg-blue-900  text-base font-semibold leading-6 text-white">Learn More</span>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-900  py-1.5 text-sm font-semibold text-white shadow-sm  hover:bg-gray-50"
                            >
                                <span>{'>'}</span>
                            </button>
                        </div>
                    </div>
                </div>'
            </div >

        </>
    )
}

export default Our_Development