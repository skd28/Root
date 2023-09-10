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
                    <div className='py-10 ps-10 py-6 py-8  py-4  py-2  ps-5'  >
                        {services && (
                            <img src={services[0].attributes.rootlogolink} alt="Image Description"
                                className=" w-[170px] h-[90px] w-[150xp] h-[72px] w-[120px] h-[60px] w-[100px] h-[48px] w-[70px] h-[30px]  "
                            />
                        )}
                    </div>


                    <div className='pt-64 ps-10 pt-56  pt-48   pt-36 pt-16 ps-5 '>

                        <div>
                            <div className=''>

                                <div className='text-4xl space-x-10 w-[504px] h-[80px] text-2xl space-x-5  w-[400px] h-[60px]  text-xl space-x-2  w-[300px] h-[50px]
                               text-lg space-x-0  w-[250px] h-[35px] w-[220px] h-[35px]  ' style={{
                                        // border: '2px solid black',
                                    }}>
                                    {services &&
                                        <p className=' text-white text-4xl space-x-10 text-2xl space-x-5  text-xl space-x-2  text-lg space-x-0 text-sm '>
                                            {services && services[0].attributes.Title}
                                        </p>}
                                </div>


                                <div className='pt-3 pt-3'>
                                    {services &&
                                        <p className='text-sm text-white text-xs'>
                                            {services && services[0].attributes.Title2}
                                        </p>}
                                </div>

                                <div className='pt-5 py-10 '>
                                    <button className='text-white  rounded-full  border-2 px-2 py-2 text-sm text-xs px-1 py-1'>GET QUOTE</button>
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





