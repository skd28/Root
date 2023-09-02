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
                    <div className='pt-5 ps-10'
                        style={{
                            // border: "2px solid blue",
                            width: "95%",
                            height: '500'
                        }}>
                        {services && (
                            <img src={services[0].attributes.topbubbleImgLink} alt="Image Description"
                                className="w-full h-full object-cover" />
                        )}
                        <div className=' w-96 relative bottom-24 ms-20 sm:bottom-16 sm:ms-5 bs:bottom-5 bs:ms-0 ' >
                            {services && (
                                <p className="text-white text-4xl align-middle sm:text-xl bs:text-base ">
                                    {services && services[0].attributes.Title}
                                </p>
                            )}
                            <div className="  w-24 h-1 pt-3 sm:pt-2 bs:pt-1 bs:w-16 ">
                                <div className=" bg-white w-24  h-1 rounded bs:w-16 ">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            <div className='grid grid-flow-col bg-custom-blue sm:grid-flow-row bs:grid-flow-row' style={{
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
                        <div className='bg-[#0B2341]   ms-20  mt-16  text-center justify-center items-center  p-7  w-[537.1329956054688px] h-[120px] md:ms-1  sm:ms-10 bs:ms-3 bs:w-[340px] ' style={{
                            borderRadius: '14px',
                        }}>
                            {services && (
                                <p className="text-white text-xs text-justify pt-2 w-[449px] h-[94px] sm:text-sm sm:pt-1 bs:w[300px] bs:pr-40 bs:pt-0" >
                                    {services && services[0].attributes.Description}
                                </p>
                            )}
                        </div>
                    </div>
                    {/* Lower */}

                    <div className='grid grid-flow-col bs:grid-flow-row'>
                        <div>
                            <p className=" h-10  text-white ms-20  mt-20 rounded-2xl text-center pt-2 w-[220px] md:ms-1  sm:w-[320px] sm:h-12 sm:pt-1 sm:text-2xl sm:ms-40 bs:text-lg bs:h-12 bs:mt-7 bs:w-[250px] bs:ms-10" style={{

                                border: '1px solid #EDE7E7',
                                backgroundImage: 'linear-gradient(0deg, rgba(217, 217, 217, 0.12), rgba(217, 217, 217, 0.12))',

                            }}>
                                {services && services[0].attributes.subtitle}
                            </p>

                            <div className='ms-20 mt-5 rounded-2xl w-[220px] h-[216px] sm:w-[320px] md:ms-1  sm:h-[260px] sm:ms-40 bs:ms-10 bs:w-[250px] bs:h-[225px]' style={{
                                border: '1px solid #EDE7E7',
                                background: 'linear-gradient(358deg, rgba(128, 105, 238, 0.51),3.22%, rgba(128, 105, 238, 0.1275) 77.82% ,rgba(103, 121, 191, 0) 97.64%)',

                            }}>
                                <p className='text-white text-xs text-justify  whitespace-pre-wrap px-2 py-4 pr-1 w-[170] h-[180] sm:py-2 sm:px-5  sm:text-base bs:text-sm ' >
                                    {services && services[0].attributes.content}
                                </p>

                            </div>
                        </div>

                        <div className='-mx-10 mr-2 relative ' style={{
                            backgroundImage: `url(${services && services[0].attributes.BubbleImgLink})`,
                            width: '61rem',
                            height: '15rem',
                            //  border: "2px solid black",
                        }}>
                            {services && <img src={services[0].attributes.ImgLink} alt='Image' className='ms-80 relative bottom-20' style={{
                                width: '30rem',
                                height: '25rem',
                                // border: "2px solid black",
                            }}
                            />}
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






//     < div className = 'relative' style = {{
//     // border: "2px solid black",
// }} >
// {/* <div className='mt-40 ' style={{
//                         backgroundImage: `url(${services && services[0].attributes.BubbleImgLink})`,
//                         width: '65rem',
//                         height: '15rem',
//                         border: "2px solid black",
//                     }}>
//                         {services && <img src={services[0].attributes.ImgLink} alt='Image'
//                             style={{
//                             }} />}

//                     </div> */}

// {/* <div className=' w-[645px] h-[200px]  mt-44  md:w-[500px] md:h-[] bs:mt-32 bs:w-[340px]' style={{
//                         border: "2px solid black",
//                     }}>
//                         <div className='w-[970px] h-[230px] -ms-80 md:-ms-0 md:w-full  md:h-full  bs:w-[300px] bs:ms-40' style={{
//                             backgroundImage: `url(${services && services[0].attributes.BubbleImgLink})`,
//                             width: "90%",
//                             //  border: "2px solid black",
//                         }} >
//                             <div className='ps-72  relative bottom-20'>
//                                 {services && <img src={services[0].attributes.ImgLink} alt='Image'
//                                     style={{
//                                         // border: "2px solid black",
//                                     }} />}
//                             </div>

//                         </div>
//                     </div> */}
//                 </ >



