"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';





function Our_Development() {
    const [services, setServices] = useState(null);

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
                        <div className=' w-80 relative bottom-28 ms-28' >
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

                {/* Content Part */}
                <div className='' >

                    <div className='bg-custom-blue relative' style={{ width: '50%', float: "left", height: '2500', border: "2px solid blue", }}>

                        <div className='bg-[#0B2341] text-xs  ms-28  mt-16  text-center justify-center items-center  p-7 w-[537.1329956054688px] h-[120px]   ' style={{

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

                        <div className='w-52 h-10 ms-28 mt-20' style={{
                            border: '2px solid red',
                            // with: '60',
                            // height: '20',
                            // top: '4432',
                            // left: '97',
                        }}>
                            <p class="w-40 h-8 top-4443 left-97 text-white  " style={{
                                // border: '2px solid yellow',
                            }}>
                                {services && services[0].attributes.subtitle}
                            </p>
                        </div>

                        <div className='ms-28 mt-5' style={{
                            width: '212.409px', height: '213.696px', top: '4486.067px', left: '96.767px', border: '0.1px solid black',
                        }}>
                            <p className='text-white text-sm text-justify m-5' style={{
                                width: '170px', height: '185px', top: '4507px',
                                left: '118px',
                            }}>
                                {services && services[0].attributes.content}
                            </p>

                        </div>

                        <h1 className='text-white'>Left Part</h1>
                    </div>


                    <div className='bg-custom-blue relative' style={{ width: '50%', float: 'right', height: '1000', border: "2px solid green", }}>

                        <div
                            style={{
                                backgroundImage: `url(${services && services[0].attributes.ImgLink})`, backgroundSize: "cover", height: "200", width: "400",
                                top: '20',
                            }}
                        >

                        </div>
                        <h1>Right Part</h1>
                    </div>
                </div>


            </div >








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

//                 <div className='px-24 pb-20'>
//                     <div className="relative ">
//                         <div className="absolute inset-0 flex items-center" aria-hidden="true">
//                             <div className="w-full border-t border-gray-300" />
//                         </div>
//                         <div className="relative flex items-center justify-between ms-15">
//                             <span className="bg-blue-900  text-base font-semibold leading-6 text-white">Learn More</span>
//                             <button
//                                 type="button"
//                                 className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-900  py-1.5 text-sm font-semibold text-white shadow-sm  hover:bg-gray-50"
//                             >
//                                 <span>{'>'}</span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>'
//             </div >

//         </>
//     )
// }

// export default Our_Development