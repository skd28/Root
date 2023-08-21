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
                const response = await fetch('https://root-blogsite.onrender.com/api/our-developments');
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

            <div className='bg-custom-blue'>

                {/* Heading Part */}
                <div className='bg-[#0B2341] '>
                    <div className='-mt-24' style={{
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
                        <div className='bg-[#0B2341] text-xs  ms-20  mt-16  text-center justify-center items-center  p-7 w-[537.1329956054688px] h-[120px]   ' style={{

                            borderRadius: '14px',
                        }}>
                            {services && (
                                <p className="text-white text-justify  " style={{
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
                        // border: '2px solid black',
                    }}>
                        <p class=" h-10  text-white ms-20  mt-20 rounded-md text-center pt-1 bg-gradient-to-r from-[rgba(217, 217, 217, 0.12)] via-[#EDE7E7] to-[#EDE7E7] " style={{
                            width: '220px',
                            border: '1px solid #EDE7E7',

                        }}>
                            {services && services[0].attributes.subtitle}
                        </p>

                        {/* <p class="h-10 text-white ms-20 mt-20 rounded-md text-center pt-1 border-1 border-[#EDE7E7] w-220"
                            style={{
                                background: 'linear-gradient(0deg, rgba(217, 217, 217, 0.12), rgba(217, 217, 217, 0.12)), linear-gradient(0deg, #EDE7E7, #EDE7E7)',
                            }}
                        >
                            {services && services[0].attributes.subtitle}
                        </p> */}






                        <div className='ms-20 mt-5 rounded ' style={{
                            border: '1px solid #EDE7E7',
                            // border: '0.1px solid black',
                            width: '220px', height: '205px',
                            // top: '4486.067px', left: '96.767px',
                        }}>
                            <p className='text-white text-xs text-justify  px-5 py-2 ' style={{
                                width: '200px', height: '200px',

                                // top: '4507px',
                                // left: '118px',
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








// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';





// function Our_Development() {
//     const [services, setServices] = useState(null);

//     useEffect(() => {

//         const fetchData = async () => {

//             try {
//                 const response = await fetch('https://root-blogsite.onrender.com/api/our-developments');
//                 const data1 = await response.json();
//                 console.log(data1);
//                 setServices(data1.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);


//     return (
//         <>
//             <div className="relative overflow-hidden  bg-cover bg-center bg-no-repeat "
//                 style={{
//                     backgroundImage: 'url("/Image/content.png")',
//                 }}>


//                 <div className='ms-32 my-5 flex-grow' >
//                     <img src="/Image/Group (2).png" alt="Image Description" />
//                     <ul className='ps-12 pb-10'>
//                         <li className='text-white text-4xl space-x-10'>
//                             <a className='underline underline-offset-8'> OUR D</a>evelopment
//                         </li>
//                     </ul>
//                 </div>
//             </div >


//             <div className='bg-blue-900'>

//                 <div className='pt-20'>
//                     <ul
//                         className='bg-sky-900 text-sm rounded-md  h-28 w-2/5 pb-20 ms-28  me-96'>
//                         <li>
//                             <p className=' text-white py-9 px-6 text-center'>
//                                 As one of the leading software development companies,
//                                 we at Root Technologies have a diverse range of services
//                                 for our clients, where we operate in these core areas
//                                 services.
//                             </p>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className='flex items-center'>
//                     <div className='ms-28'>
//                         <div>
//                             <h3 className=' h-7  w-40  text-white text-center rounded-xl border border-gray-200 bg-slate-400'>Web Development</h3>
//                         </div>
//                         <div>
//                             <p className='mt-4 h-36 w-40 text-sm   text-center rounded-md bg-gradient-to-br from-purple-400 via-purple-300 to-transparent
//                                 bg-gradient-to-t from-white via-gray-200 to-gray-200' >

//                                 We help companies with unique and
//                                 comprehensive web development services
//                                 that empower you and your clients.
//                             </p>
//                         </div>
//                     </div>
//                     <div className=''>
//                         <div className="bg-right-top bg-no-repeat h-96 w-full"
//                             style={{ backgroundImage: "url('/Image/D1.png')" }}>
//                             <div className='pt-20'>
//                                 <img
//                                     src="/Image/Group (2).png"
//                                     alt="Image"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

        //         <div className='px-24 pb-20'>
        //             <div className="relative ">
        //                 <div className="absolute inset-0 flex items-center" aria-hidden="true">
        //                     <div className="w-full border-t border-gray-300" />
        //                 </div>
        //                 <div className="relative flex items-center justify-between ms-15">
        //                     <span className="bg-blue-900  text-base font-semibold leading-6 text-white">Learn More</span>
        //                     <button
        //                         type="button"
        //                         className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-900  py-1.5 text-sm font-semibold text-white shadow-sm  hover:bg-gray-50"
        //                     >
        //                         <span>{'>'}</span>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //    // </div >

//         </>
//     )
// }

// export default Our_Development