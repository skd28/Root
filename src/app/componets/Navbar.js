"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const Navbar = () => {
    const [services, setServices] = useState(null);

    useEffect(() => {


        const fetchData = async () => {

            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch('https://root-blogsite.onrender.com/api/professional-tech-for-your-businesses', {
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
            <nav >

                <div className="relative overflow-hidden  bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${services && services[0].attributes.imglink})`,
                    }}>
                    <div className='xl:py-10 ps-10 md:py-6 lg:py-8  sm:py-4  bs:py-2  bs:ps-5' style={{
                        // border: '2px solid red',
                    }} >
                        {services && (
                            <img src={services[0].attributes.rootlogolink} alt="Image Description"
                                className=" xl:w-[170px] xl:h-[90px] lg:w-[150xp] lg:h-[72px] md:w-[120px] md:h-[60px] sm:w-[100px] sm:h-[48px] bs:w-[70px] bs:h-[30px]  "
                                style={{
                                    // border: '2px solid red',
                                }}
                            />
                        )}
                    </div>


                    <div className='xl:pt-64 ps-10 lg:pt-64  md:pt-64  sm:pt-60 bs:pt-16 bs:ps-5 '>

                        <div>
                            <div className=''>

                                <div className='xl:text-4xl xl:space-x-10 xl:w-[504px] xl:h-[80px] lg:text-2xl lg:space-x-5  lg:w-[400px] lg:h-[60px]  md:text-xl md:space-x-2  md:w-[300px] md:h-[50px] 
                               sm:text-lg sm:space-x-0  sm:w-[250px] sm:h-[35px] bs:w-[220px] bs:h-[35px]  ' style={{
                                        // border: '2px solid black',
                                    }}>
                                    {services &&
                                        <p className=' text-white xl:text-4xl xl:space-x-10 lg:text-2xl lg:space-x-5  md:text-xl md:space-x-2  sm:text-lg sm:space-x-0 bs:text-sm '>
                                            {services && services[0].attributes.Title}
                                        </p>}
                                </div>


                                <div className='sm:pt-3 bs:pt-3' style={{
                                    //  border:'2px solid black',
                                }}>
                                    {services &&
                                        <p className='text-sm text-white bs:text-xs'>
                                            {services && services[0].attributes.Title2}
                                        </p>}
                                </div>

                                <div className='pt-5 py-10 '>
                                    <button className='text-white  rounded-full  border-2 px-2 py-2 text-sm bs:text-xs bs:px-1 bs:py-1'>GET QUOTE</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </nav>


        </>
    );
};

export default Navbar;





