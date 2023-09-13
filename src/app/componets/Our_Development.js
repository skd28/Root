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

            <div className='bg-custom-blue '>

                {/* Heading Part */}
                <div className='bg-[#0B2341]  '>
                    <div className='pt-5 px-4 w-[95%] h-[500] sm:px-10'
                        style={{
                            // width: "95%", height: '500',
                            //  border: '2px solid red',
                        }}>
                        {services && (
                            <img src='https://res.cloudinary.com/dgpftd5nf/image/upload/v1693643866/Group_258_1_7737d079f7.png' alt="Image Description"
                                className="w-full h-full object-cover" />
                        )}
                        <div className='relative bottom-6 w-[60%] px-auto py-auto sm:bottom-14 sm:pl-14 md:bottom-16 lg:pl-20 lg:bottom-20' >
                            <h1 className="text-white text-lg  sm:text-xl md:text-2xl lg:text-4xl">OUR DEVELOPMENT</h1>
                            <div className="  w-[55%] h-1 pt-1  sm:w-[40%]">
                                <div className=" bg-white w-[55%] h-1 rounded  sm:w-[40%] ">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            <div className='flex flex-col bg-custom-blue  ' >
                {/* Left */}
                <div   >

                    {/* Upper */}
                    <div  >

                        <div className='bg-[#0B2341]  text-center  justify-center  items-center mx-auto w-4/5 mt-16 p-7 h-[10%] lg:w-2/5 lg:mx-28' style={{
                            borderRadius: '14px',
                            //   border: '2px solid red',
                        }}>

                            {services && (
                                <p className="text-white text-xs text-justify pt-2 w-full h-1/6" >
                                    {services && services[0].attributes.Description}
                                </p>
                            )}
                        </div>
                    </div>
                    {/* Lower */}

                    <div className=' relative  flex flex-col mx-auto  lg:flex-row ' >
                        {/* Text Part */}
                        <div className=' w-2/3 mx-auto sm:w-1/3 lg:ml-28 lg:w-1/4 ' style={{
                            //  border: '2px solid red'
                        }}>
                            <p className="  text-white   mt-20 rounded-2xl text-center py-2 w-full " style={{
                                border: '1px solid #EDE7E7',
                                backgroundImage: 'linear-gradient(0deg, rgba(217, 217, 217, 0.12), rgba(217, 217, 217, 0.12))',
                                // border: '2px solid black',
                            }}>
                                {services && services[0].attributes.subtitle}
                            </p>

                            <div className=' mt-5 rounded-2xl  w-full  px-auto' style={{
                                border: '1px solid #EDE7E7',
                                background: 'linear-gradient(358deg, rgba(128, 105, 238, 0.51),3.22%, rgba(128, 105, 238, 0.1275) 77.82% ,rgba(103, 121, 191, 0) 97.64%)',
                                //  border: '2px solid red',
                            }}>
                                <p className='text-white text-xs text-justify  whitespace-pre-wrap py-4  px-2 lg:px-4' >
                                    {services && services[0].attributes.content}
                                </p>

                            </div>
                        </div>
                        {/* Gif */}
                        <div className=' bg-contain  bg-no-repeat w-full h-1/3  relative  mt-20  sm:mt-28 lg:mt-3' style={{
                            backgroundImage: `url(${services && services[0].attributes.BubbleImgLink})`,

                        }}>
                            {services && <img src={services[0].attributes.ImgLink} alt='Image' className=' w-3/5 h-1/6 relative left-20 bottom-14 sm:bottom-28 lg:left-64
                           ' />}
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-custom-blue py-5  px-28 '>
                <div className=' '>
                    <div className="relative ">
                        <div className="absolute inset-0 flex items-center ml-32 " aria-hidden="true">
                            <div className="w-full border-t border-gray-300 " />
                        </div>
                        <div className="relative flex items-center justify-between ">
                            <span className="bg-custom-blue  text-base font-semibold leading-6 text-white cursor-pointer   " onClick={() => router.push('development')} >Learn More</span>
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





