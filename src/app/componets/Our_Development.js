"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'




function Our_Development() {
    const [services, setServices] = useState(null);
    const router = useRouter();




    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch(' https://root-blogsite.onrender.com/api/our-developments', {
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

            <div className='bg-custom-blue relative'>

                {/* Heading Part */}
                <div className='bg-[#0B2341]  relative'>
                    <div
                        //  className='-mt-10'
                        style={{
                            // border: "2px solid blue",
                            width: "100%",
                            height: '500'
                        }}>
                        {services && (
                            <img src={services[0].attributes.BubbleImgLink} alt="Image Description"
                                className="w-full h-full object-cover" />
                        )}
                        <div className=' w-80 relative bottom-28 ms-20' >
                            {services && (
                                <p className="text-white text-3xl align-middle">
                                    {services && services[0].attributes.Title}
                                </p>
                            )}
                            <div className="pt-3">
                                <img src={`/Image/Line 20.png`} alt="Image Description" />
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            <div className='grid grid-flow-col bg-custom-blue' style={{
                // border: '2px solid black',
            }}>
                {/* Left */}
                <div className=' relative' style={{
                    // border: '2px solid green',
                }}>

                    {/* Upper */}
                    <div style={{
                        // border: '2px solid green',
                    }}>
                        <div className='bg-[#0B2341] text-xs  ms-20  mt-16  text-center justify-center items-center  p-7  w-[537.1329956054688px] h-[120px]   ' style={{

                            borderRadius: '14px',
                        }}>
                            {services && (
                                <p className="text-white text-justify pt-2  " style={{
                                    width: '449px',
                                    height: '94px',
                                    // top: '4271px',
                                    // left: '143px',
                                }}>
                                    {services && services[0].attributes.Description}
                                </p>
                            )}
                        </div>
                    </div>
                    {/* Lower */}

                    <div style={{
                        // border: '2px solid black', bg-gradient-to-r from-cyan-500 to-blue-500 
                    }}>
                        <p class=" h-10  text-white ms-20  mt-20 rounded-2xl text-center pt-2  bg-gradient-to-r from-[#D9D9D9] to-[#6779BF]" style={{
                            width: '220px',
                            border: '1px solid #EDE7E7',
                            //   backgroundImage: 'linear-gradient(to top, var(from-cyan-500))'
                        }}>
                            {services && services[0].attributes.subtitle}
                        </p>



                        <div className='ms-20 mt-5 rounded-2xl bg-gradient-to-r from-[#8069EE] to-[#6779BF] ' style={{
                            border: '1px solid #EDE7E7',

                            width: '220px', height: '216px',

                        }}>
                            <p className='text-white text-xs text-justify  whitespace-pre-wrap px-2 py-4 pr-1 ' style={{
                                width: '170', height: '180',
                            }}>
                                {services && services[0].attributes.content}
                            </p>

                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className='relative' >

                    <div className=' w-[645px] h-[200px]  mt-44' style={{
                        // border: "2px solid black",
                    }}>
                        <div className='w-[970px] h-[230px] -ms-80' style={{
                            backgroundImage: `url(${services && services[0].attributes.BubbleImgLink})`,

                        }} >
                            <div className='ps-72  relative bottom-20'>
                                {services && <img src={services[0].attributes.ImgLink} alt='Image'
                                    className=' ' style={{
                                        // border: "2px solid black",
                                    }} />}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-custom-blue pt-7 ps-3'>
                <div className='px-24 pb-20'>
                    <div className="relative ">
                        <div className="absolute inset-0 flex items-center ms-32 " aria-hidden="true">
                            <div className="w-full border-t border-gray-300 " />
                        </div>
                        <div className="relative flex items-center justify-between ">
                            <span className="bg-custom-blue  text-base font-semibold leading-6 text-white cursor-pointer " onClick={() => router.push('development')} >Learn More</span>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-4 rounded-full bg-custom-blue  py-3 text-sm font-semibold text-white shadow-sm  hover:bg-custom-blue "
                            >
                                <span>{'>'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Our_Development



