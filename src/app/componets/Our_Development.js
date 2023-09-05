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

            <div className='bg-custom-blue relative  '>

                {/* Heading Part */}
                <div className='bg-[#0B2341] relative '>
                    <div className='pt-5 ps-10  '
                        style={{
                            width: "95%", height: '500',
                        }}>
                        {services && (
                            <img src={services[0].attributes.topbubbleImgLink} alt="Image Description"
                                className="w-full h-full object-cover" />
                        )}
                        <div className='relative bottom-24 ms-20  lg:bottom-14 lg:ms-5 md:ms-0  md:bottom-10 sm:bottom-9 sm:w-60 sm:ms-0 bs:bottom-5 bs:ms-0 ' >
                            {services && (
                                <p className="text-white text-4xl align-middle lg:text-4xl md:text-2xl sm:text-lg bs:text-base ">
                                    {services && services[0].attributes.Title}
                                </p>
                            )}
                            <div className="  w-24 h-1 pt-3 sm:pt-1 md:pt-2 sm:w-16  bs:pt-1 bs:w-16 ">
                                <div className=" bg-white w-24  h-1 rounded sm:w-16 bs:w-16 ">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            <div className='grid grid-flow-col bg-custom-blue px-2  sm:grid-flow-row bs:grid-flow-row'>
                {/* Left */}
                <div className=' relative ' >

                    {/* Upper */}
                    <div className=''>



                        <div className='bg-[#0B2341] ms-20 mt-16 text-center justify-center  items-center 
                         p-7 w-[537.1329956054688px] h-[120px]  lg:ms-10 md:p-5 md:ms-1 md:w-[420px] md:h-[80px]  sm:p-2 sm:w-[440px] sm:h-[100px]
                           sm:ms-10 bs:p-0 bs:ms-0 bs:w-[340px] bs:h-[200px]' style={{
                                borderRadius: '14px',
                            }}>

                            {services && (
                                <p className="text-white text-xs text-justify  pt-2 w-[449px] h-[94px]  md:pt-0 
                                 md:w-[380px] md:h-[100px] sm:ms-2 sm:w-[400px] sm:h-[100px] sm:text-sm  sm:pt-1 bs:text-sm bs:w-[400px]
                                 bs:h-[200px] bs:pr-40 bs:pt-0" >
                                    {services && services[0].attributes.Description}
                                </p>
                            )}
                        </div>
                    </div>
                    {/* Lower */}

                    <div className='grid grid-flow-col   sm:grid-flow-row bs:grid-flow-row ' >
                        {/* Text Part */}
                        <div className='  sm:mx-10 sm:my-5 sm:pb-8 bs:pb-8 bs:my-5'>
                            <p className=" h-10  text-white ms-20  mt-20 rounded-2xl text-center  pt-2 w-[220px] md:mt-10 md:ms-5 md:w-[200px] sm:w-[320px] sm:h-12 sm:pt-1 sm:text-2xl sm:ms-10 bs:text-lg bs:h-12 bs:mt-7 bs:w-[250px] bs:ms-10" style={{

                                border: '1px solid #EDE7E7',
                                backgroundImage: 'linear-gradient(0deg, rgba(217, 217, 217, 0.12), rgba(217, 217, 217, 0.12))',

                            }}>
                                {services && services[0].attributes.subtitle}
                            </p>

                            <div className='ms-20 mt-5 rounded-2xl w-[220px] h-[216px] sm:w-[320px] md:ms-5 md:w-[200px] sm:h-[260px] sm:ms-10 bs:ms-10 bs:w-[250px] bs:h-[225px]' style={{
                                border: '1px solid #EDE7E7',
                                background: 'linear-gradient(358deg, rgba(128, 105, 238, 0.51),3.22%, rgba(128, 105, 238, 0.1275) 77.82% ,rgba(103, 121, 191, 0) 97.64%)',

                            }}>
                                <p className='text-white text-xs text-justify  whitespace-pre-wrap px-2 py-4 pr-1 w-[170] h-[180]  sm:py-2 sm:px-5  sm:text-base bs:text-sm ' >
                                    {services && services[0].attributes.content}
                                </p>

                            </div>
                        </div>
                        {/* Gif */}
                        <div className='relative bg-contain w-[930px] h-[250px] mt-18   lg:w-[780px]  lg:h-[200px] lg:mt-8  md:w-[540px] md:mt-7 md:h-[130px]  sm:w-[490px]  sm:h-[140px] sm:ms-2 sm:mt-14 bs:ms-0 bs:mt-20 bs:w-[360px] bs:h-[100px]' style={{
                            backgroundImage: `url(${services && services[0].attributes.BubbleImgLink})`,
                        }}>
                            {services && <img src={services[0].attributes.ImgLink} alt='Image' className='ms-80 relative bottom-16 w-[30rem] h-[20rem] 
                           lg:ms-60  lg:bottom-20 md:ms-48 md:w-[280px] md:h-[300px]  md:bottom-28 sm:bottom-28 sm:w-[340px] sm:h-[240px]
                             sm:ms-20  bs:ms-44 bs:bottom-20 bs:right-40 bs:w-[300px] bs:h-[200px]' />}
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-custom-blue py-8 ps-3  sm:pt-20 bs:pt-20 '>
                <div className='px-24 lg:px-18 md:px-10  bs:px-5'>
                    <div className="relative ">
                        <div className="absolute inset-0 flex items-center ms-32 " aria-hidden="true">
                            <div className="w-full border-t border-gray-300 " />
                        </div>
                        <div className="relative flex items-center justify-between ">
                            <span className="bg-custom-blue  text-base font-semibold leading-6 text-white cursor-pointer sm:font-medium " onClick={() => router.push('development')} >Learn More</span>
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





