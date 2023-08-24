"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const Navbar = () => {
    const [services, setServices] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch('https://root-blogsite.onrender.com/api/professional-tech-for-your-businesses');
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
            <nav >

                <div className="relative overflow-hidden  bg-cover bg-center bg-no-repeat "
                    style={{
                        backgroundImage: `url(${services && services[0].attributes.imglink})`,
                    }}>
                    <div className='py-10 ps-10'>
                        {services && (
                            <img src={services[0].attributes.rootlogolink} alt="Image Description"
                            // className="items-center w-80 h-80 "
                            />
                        )}
                        {/* <img src="/Image/Logo.png" alt="Image Description" /> */}
                    </div>
                    <div className='pt-64 ps-10'>

                        <div>
                            <ul className='text-white'>
                                <li className='text-4xl space-x-10 w-[504px] h-[80px] ' style={{
                                    // border: '2px solid black',
                                }}>
                                    {services &&
                                        <p className='text-4xl space-x-10'>
                                            {services && services[0].attributes.Title}
                                        </p>}
                                </li>
                                <li className=''>
                                    {services &&
                                        <p className='text-sm'>
                                            {services && services[0].attributes.Title2}
                                        </p>}
                                </li>
                                <div className='pt-5 py-10'>
                                    <button className='text-white  rounded-full  border-2 px-2 py-2 text-sm'>GET QUOTE</button>
                                </div>

                            </ul>
                        </div>


                    </div>
                </div>
            </nav>


        </>
    );
};

export default Navbar;





