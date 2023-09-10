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
                        <div className='relative bottom-24   bottom-14    bottom-10 bottom-9 w-60  bottom-5  ' >
                            {services && (
                                <p className="text-white text-4xl align-middle text-4xl text-2xl text-lg text-base ">
                                    {services && services[0].attributes.Title}
                                </p>
                            )}
                            <div className="  w-24 h-1 pt-3 pt-1 pt-2 w-16  pt-1 w-16 ">
                                <div className=" bg-white w-24  h-1 rounded w-16 w-16 ">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            <div className='grid grid-flow-col bg-custom-blue px-2  grid-flow-row grid-flow-row'>
                {/* Left */}
                <div className=' relative ' >

                    {/* Upper */}
                    <div className=''>

                        <div className='bg-[#0B2341]  mt-16 text-center  justify-center  items-center
                         p-7 w-[537.1329956054688px] h-[120px]   p-5  w-[420px] h-[80px]  p-2 w-[440px] h-[100px]
                            p-3  w-[340px] h-[150px]' style={{
                                borderRadius: '14px',
                            }}>

                            {services && (
                                <p className="text-white text-xs text-justify  pt-2 w-[449px] h-[94px]  pt-0
                                 w-[380px] h-[100px]  w-[400px] h-[100px] text-sm  pt-1 text-sm w-[300px]
                                 h-[120px] pr-0 pt-0" >
                                    {services && services[0].attributes.Description}
                                </p>
                            )}
                        </div>
                    </div>
                    {/* Lower */}

                    <div className='grid grid-flow-col   grid-flow-row grid-flow-row ' >
                        {/* Text Part */}
                        <div className='  mx-10 my-5 pb-8 pb-8 my-5'>
                            <p className=" h-10  text-white   mt-20 rounded-2xl text-center  pt-2 w-[220px] mt-10  w-[200px] w-[320px] h-12 pt-1 text-2xl  text-lg h-12 mt-7 w-[250px] " style={{

                                border: '1px solid #EDE7E7',
                                backgroundImage: 'linear-gradient(0deg, rgba(217, 217, 217, 0.12), rgba(217, 217, 217, 0.12))',

                            }}>
                                {services && services[0].attributes.subtitle}
                            </p>

                            <div className=' mt-5 rounded-2xl w-[220px] h-[216px] w-[320px]  w-[200px] h-[260px]   w-[250px] h-[225px]' style={{
                                border: '1px solid #EDE7E7',
                                background: 'linear-gradient(358deg, rgba(128, 105, 238, 0.51),3.22%, rgba(128, 105, 238, 0.1275) 77.82% ,rgba(103, 121, 191, 0) 97.64%)',

                            }}>
                                <p className='text-white text-xs text-justify  whitespace-pre-wrap px-2 py-4 pr-1 w-[170] h-[180]  py-2 px-5  text-base text-sm ' >
                                    {services && services[0].attributes.content}
                                </p>

                            </div>
                        </div>
                        {/* Gif */}
                        <div className='relative bg-contain w-[930px] h-[250px] mt-18   w-[780px]  h-[200px] mt-8  w-[540px] mt-7 h-[130px]  w-[490px]  h-[140px]  mt-14  mt-20 w-[360px] h-[100px]' style={{
                            backgroundImage: `url(${services && services[0].attributes.BubbleImgLink})`,
                        }}>
                            {services && <img src={services[0].attributes.ImgLink} alt='Image' className=' relative bottom-16 w-[30rem] h-[20rem]
                             bottom-20  w-[280px] h-[300px]  bottom-28 bottom-28 w-[340px] h-[240px]
                                bottom-16 right-40 w-[300px] h-[200px]' />}
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-custom-blue py-8 ps-3  pt-20 pt-20 '>
                <div className='px-24 px-18 px-10  px-5'>
                    <div className="relative ">
                        <div className="absolute inset-0 flex items-center  " aria-hidden="true">
                            <div className="w-full border-t border-gray-300 " />
                        </div>
                        <div className="relative flex items-center justify-between ">
                            <span className="bg-custom-blue  text-base font-semibold leading-6 text-white cursor-pointer font-medium " onClick={() => router.push('development')} >Learn More</span>
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





