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


            <div className="relative overflow-hidden  w-full h-full bg-cover bg-center bg-no-repeat "
                style={{
                    backgroundImage: `url(${services && services[0].attributes.imglink})`,
                }}>

                <div style={{
                    backgroundImage: 'background: linear-gradient(342.74deg, rgba(242, 245, 248, 0.033) 72.06%, rgba(255, 255, 255, 0) 145.85%)',
                }}>
                    <img src='https://res.cloudinary.com/dgpftd5nf/image/upload/v1691838114/root_logo_f630515d1d.png'
                        alt="Image Description"
                        className="w-2/5 h-1/6 px-7 py-7 lg:w-1/5 lg:h-1/5"
                    />
                </div>



                <div className='px-7 mt-32 py-14'>

                    <div className='pt-10' style={{

                    }}>
                        {services &&
                            <h1 className=' text-white text-4xl  w-1/2  lg:w-2/5 '>
                                {services && services[0].attributes.Title}
                            </h1>}
                    </div>
                    <div className='pt-3'>
                        {services &&
                            <p className='text-sm text-white '>
                                {services && services[0].attributes.Title2}
                            </p>}
                    </div>
                    <div className='pt-5 py-10 '>
                        <button className='text-white  rounded-full  border-2 p-1 '>GET QUOTE</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;





