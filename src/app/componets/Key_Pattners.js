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
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
        <>
            <div className='bg-custom-blue h-screen'>
                <div className='ps-10 py-10'>
                    {services && (<p className="text-white text-4xl">
                        {services[0].attributes.Name}
                    </p>)}
                    <div className="w-20 h-1 pt-3"> <div className=" bg-white w-20 h-1 rounded"> </div> </div>
                </div>

                <div className='bg-[#0B2341] border-4 mt-12' style={{
                    //  border: '2px solid red',
                    boxShadow: 'inset 0 -15px 5px black ,inset 0 15px 5px black ',
                }} >
                    <div className='relative flex items-center'>
                        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideLeft} size={40} />
                        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>

                            {services && services.map((item, index) => (
                                <img key={index} className='w-[300px] inline-block p-10 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.attributes.companylogolink
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