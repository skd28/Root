"use client"
import React, { useState, useEffect, useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
function Key_Patterns() {

    const [services, setServices] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch('https://root-blogsite.onrender.com/api/key-partner/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                // if (!response.ok) {
                //     throw new Error('Network response was not ok');
                // }
                const data1 = await response.json();

                // console.log(data1);
                setServices(data1.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 300;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 300;
    };
    return (
        <>
            <div className='bg-custom-blue h-screen md:h-[600px] sm:h-[600px] bs:h-[600px]'>
                <div className=' pt-8 ps-10 pb-10 lg:pt-12 md:pt-10 sm:pt-8 bs:pt-6 sm:ps-7 bs:ps-5 sm:pb-7 bs:pb-5'>
                    {services && (<p className="text-white text-4xl lg:text-3xl md:text-2xl sm:text-xl bs:text-xl ">
                        {services[0].attributes.Name}
                    </p>)}
                    <div className="w-20 h-1 pt-3 lg:w-14 md:w-12 md:pt-2  sm:w-10  sm:pt-1 bs:w-10 bs:pt-1 ">
                        <div className=" bg-white w-20 h-1 rounded lg:w-14 md:w-12 sm:w-10 bs:pt-1 bs:w-10 "> </div> </div>
                </div>

                <div className='bg-[#0B2341]  mt-12' style={{
                    // border: '2px solid red',
                    boxShadow: 'inset 0 -15px 5px black ,inset 0 15px 5px black ',
                }} >
                    <div className='relative flex items-center'>
                        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideLeft} size={40} />
                        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>

                            {services && services.map((item, index) => (
                                <img key={index} className='w-[300px] inline-block  p-10 cursor-pointer hover:scale-105 ease-in-out duration-300 ' src={item.attributes.companylogolink
                                } alt='Image not found' />
                            ))
                            }

                        </div>
                        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideRight} size={40} />

                    </div>
                </div>

            </div>
        </>
    )
}

export default Key_Patterns