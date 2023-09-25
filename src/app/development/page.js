"use client"
import React, { useState, useEffect } from 'react';
import Lotiee from 'lottie-react';
import animation from './animation.json';
import { useRouter } from 'next/navigation'

function Home() {
    const [services, setServices] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch('https://root-blogsite.onrender.com/api/our-development-2nds', {
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
    const handlePrev = () => {
        setCurrentSlide((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        if (services && currentSlide < services.length - 3) {
            setCurrentSlide((prevIndex) => prevIndex + 1);
        }
    };
    const handleBackButtonClick = () => {
        if (typeof window !== 'undefined') {
            router.push('/');
        }
    };

    return (
        <>
            <div className='bg-[#0B2341]' style={{
                // border: '2px solid red',
            }}>
                <div className="  bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('https://res.cloudinary.com/dgpftd5nf/image/upload/v1691386777/background_img_1443f7bf67.png')` }}>
                    < div className=' py-[250px]   w-[60%] mx-auto relative  sm:w-[38%] md:w-[40%] md:py-[400px]  lg:w-[30%] lg:py-[500px]'>
                        <div className='text-xl text-white text-center  sm:text-2xl md:text-3xl lg:text-4xl ' style={{
                            // border: '2px solid yellow'
                        }} >
                            {services && services[0].attributes.Title}
                            <p className=' w-20 h-1 items-center bg-white rounded ml-4 absolute  ' ></p>
                        </div>
                        {/* <div className=' w-20 h-1 bg-white rounded  '  ></div> */}
                    </div>
                </div>
            </div>

            <div className='bg-[#0B2341]' style={{
                // background: '2px solid green',
            }}>
                <div className=' relative  bg-cover bg-no-repeat lg:bg-contain  ' style={{
                    //  backgroundImage: `url('https://res.cloudinary.com/dgpftd5nf/image/upload/v1691393550/background_img_bottom_73ea7913ab.png')`,
                    backgroundColor: "#0B234",
                    backgroundImage: 'url("/Image/our.png")',
                    //  backgroundPosition: 'right 50px top 10px',
                }}>
                    <div className='flex lg:flex-col md:flex-row '>
                        <div className='flex flex-col w-full pt-20 relative lg:flex-row  ' style={{
                            // border: '2px solid yellow',
                        }}>
                            {/* GIF */}
                            <div className=' lg:w-5/6' >
                                <Lotiee animationData={animation} className='w-full h-full' />
                            </div>

                            {/* Text Area */}
                            <div className=' ' >
                                <div className='grid grid-flow-col ' style={{
                                    //  border: '2px solid yellow',
                                }}>
                                    <div className='grid grid-flow-row text-white  px-10 pt-10 sm:px-24 md:px-40  lg:px-0 lg:pt-40'>
                                        <div className=''>
                                            {services &&
                                                services.slice(currentSlide, currentSlide + 3).map((item, index) => (
                                                    <div key={item.id}>
                                                        <span className='bg-[#0B2341]  rounded-2xl'>
                                                            <span className='  rounded-2xl text-xs  justify-center items-center text-center py-2 px-3 mt-5 lg:text-lg lg:mt-8'
                                                                style={{
                                                                    backgroundImage: 'linear-gradient(0deg, rgba(217, 217, 217, 0.12), rgba(217, 217, 217, 0.12))',
                                                                }} >
                                                                {item.attributes.subtitle2}
                                                            </span>
                                                        </span>

                                                        <div className=' rounded-2xl  w-3/4 bg-[#0B2341]  my-5 lg:my-10' >
                                                            <p className='rounded-2xl   justify-center items-center text-justify py-3 px-3 lg:text-base '
                                                                style={{
                                                                    fontSize: '11px',
                                                                    background: 'linear-gradient(358deg, rgba(128, 105, 238, 0.51),3.22%, rgba(128, 105, 238, 0.1275) 77.82% ,rgba(103, 121, 191, 0) 97.64%)',
                                                                }} >
                                                                {item.attributes.Description}  </p>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                    <div className=' flex flex-col justify-center items-center text-center '>
                                        <input type="radio" name="radioGroup" onClick={handlePrev} className="form-radio text-blue-500" />
                                        <input type="radio" name="radioGroup" className="form-radio text-blue-500" />
                                        <input type="radio" name="radioGroup" onClick={handleNext} className="form-radio text-blue-500" />
                                    </div>
                                </div>
                                <div className='text-right  text-white cursor-pointer  lg:hidden' style={{
                                    background: 'linear-gradient(180deg, #0B2341 0%, #000000 100%)',
                                }} >
                                    <span class="text-3xl sm:pr-8 " onClick={handleBackButtonClick} >{'←'}</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-right  text-white cursor-pointer md:hidden sm:hidden hidden lg:block' style={{
                            background: 'linear-gradient(180deg, #0B2341 0%, #000000 100%)',
                        }} >
                            <span class="text-3xl sm:pr-8 " onClick={handleBackButtonClick} >{'←'}</span>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Home













// <>
//         <div className='bg-[#0B2341]' style={{ border: '2px solid red', }}>
//             <div className="  bg-cover bg-center bg-no-repeat w-full h-full  "
//                 style={{ backgroundImage: `url('https://res.cloudinary.com/dgpftd5nf/image/upload/v1691386777/background_img_1443f7bf67.png')` }}>
//                 <div className=' text-center text-white py-[500px]'>
//                     <p className='text-4xl' style={{
//                         // border: '2px solid yellow'
//                     }} >
//                         {services && services[0].attributes.Title}
//                     </p>
//                     <div className='bg-white mx-auto h-1 w-[8%] rounded '></div>
//                 </div>
//             </div>
//         </div>

//         <div className='bg-[#0B2341]' style={{
//             // background: '2px solid green',
//         }}>
//             <div className=' relative  w-full  lg:right-[650px] lg:bg-cover  bg-cover bg-no-repeat right-[100px]' style={{
//                 backgroundImage: `url('https://res.cloudinary.com/dgpftd5nf/image/upload/v1691393550/background_img_bottom_73ea7913ab.png')`,
//                 backgroundColor: "#0B234",
//             }}>
//                 <div className='flex flex-col w-full pt-40 relative lg:left-[650px] lg:flex-row  left-[100px]  ' style={{
//                     border: '2px solid red',
//                 }}>
//                     {/* GIF */}
//                     <div className='lg:ml-40' >
//                         <Lotiee animationData={animation} className='w-full h-full' />
//                     </div>

//                     {/* Text Area */}
//                     <div className='' >
//                         <div className='grid grid-flow-col ' style={{
//                             // border: '2px solid red',
//                         }}>
//                             <div className='grid grid-flow-row text-white  px-20  '>
//                                 <div className=''>
//                                     {services &&
//                                         services.slice(currentSlide, currentSlide + 3).map((item, index) => (
//                                             <div key={item.id}>
//                                                 <div className='bg-[#0B234]'>
//                                                     <span className='  rounded-2xl text-xs   justify-center items-center text-center py-2 px-4 mt-5'
//                                                         style={{
//                                                             backgroundImage: 'linear-gradient(0deg, rgba(217, 217, 217, 0.12), rgba(217, 217, 217, 0.12))',
//                                                         }} >
//                                                         {item.attributes.subtitle2}
//                                                     </span>
//                                                 </div>

//                                                 <div className=' rounded-2xl  w-3/4 bg-[#0B234]  my-5' >
//                                                     <p className='rounded-2xl   justify-center items-center text-justify py-3 px-8'
//                                                         style={{
//                                                             fontSize: '11px',
//                                                             background: 'linear-gradient(358deg, rgba(128, 105, 238, 0.51),3.22%, rgba(128, 105, 238, 0.1275) 77.82% ,rgba(103, 121, 191, 0) 97.64%)',
//                                                         }} >
//                                                         {item.attributes.Description}  </p>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                 </div>
//                             </div>
//                             <div className=' flex flex-col justify-center items-center text-center '>
//                                 <input type="radio" name="radioGroup" onClick={handlePrev} className="form-radio text-blue-500" />
//                                 <input type="radio" name="radioGroup" className="form-radio text-blue-500" />
//                                 <input type="radio" name="radioGroup" onClick={handleNext} className="form-radio text-blue-500" />
//                             </div>
//                         </div>
//                         <div className='text-right  text-white cursor-pointer ' style={{
//                             background: 'linear-gradient(180deg, #0B2341 0%, #000000 100%)',
//                         }} >
//                             <span class="text-3xl pr-20" onClick={handleBackButtonClick} >{'←'}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </>




// <>
//         <div className='bg-[#0B2341]' style={{ border: '2px solid red', }}>
//             <div className="  bg-cover bg-center bg-no-repeat "
//                 style={{ backgroundImage: `url('https://res.cloudinary.com/dgpftd5nf/image/upload/v1691386777/background_img_1443f7bf67.png')` }}>
//                 < div className=' flex flex-col items-center justify-center py-[250px] border-4 md:py-[300px] lg:py-[500px]'>
//                     <p className='text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl ' style={{
//                         // border: '2px solid yellow'
//                     }} >
//                         {services && services[0].attributes.Title}
//                     </p>
//                     <div className=' w-20 h-1 bg-white rounded '  ></div>
//                 </div>
//             </div>
//         </div>

//         <div className='bg-[#0B2341]' style={{
//             // background: '2px solid green',
//         }}>
//             <div className=' relative  w-full    bg-cover bg-no-repeat lg:right-[500px] ' style={{
//                 backgroundImage: `url('https://res.cloudinary.com/dgpftd5nf/image/upload/v1691393550/background_img_bottom_73ea7913ab.png')`,
//                 backgroundColor: "#0B234",
//                 backgroundPosition: 'right 50px top 10px',
//             }}>
//                 <div className='flex flex-col w-full pt-20 relative lg:flex-row lg:left-[500px] ' style={{
//                     border: '2px solid yellow',
//                 }}>
//                     {/* GIF */}
//                     <div className=' lg:w-5/6' >
//                         <Lotiee animationData={animation} className='w-full h-full' />
//                     </div>

//                     {/* Text Area */}
//                     <div className=' ' >
//                         <div className='grid grid-flow-col ' style={{
//                             border: '2px solid yellow',
//                         }}>
//                             <div className='grid grid-flow-row text-white  px-10 pt-10 sm:px-24 md:px-40  lg:px-0 lg:pt-40'>
//                                 <div className=''>
//                                     {services &&
//                                         services.slice(currentSlide, currentSlide + 3).map((item, index) => (
//                                             <div key={item.id}>
//                                                 <div className='bg-[#0B234]'>
//                                                     <span className='  rounded-2xl text-xs   justify-center items-center text-center py-2 px-3 mt-5'
//                                                         style={{
//                                                             backgroundImage: 'linear-gradient(0deg, rgba(217, 217, 217, 0.12), rgba(217, 217, 217, 0.12))',
//                                                         }} >
//                                                         {item.attributes.subtitle2}
//                                                     </span>
//                                                 </div>

//                                                 <div className=' rounded-2xl  w-3/4 bg-[#0B234]  my-5' >
//                                                     <p className='rounded-2xl   justify-center items-center text-justify py-3 px-3'
//                                                         style={{
//                                                             fontSize: '11px',
//                                                             background: 'linear-gradient(358deg, rgba(128, 105, 238, 0.51),3.22%, rgba(128, 105, 238, 0.1275) 77.82% ,rgba(103, 121, 191, 0) 97.64%)',
//                                                         }} >
//                                                         {item.attributes.Description}  </p>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                 </div>
//                             </div>
//                             <div className=' flex flex-col justify-center items-center text-center '>
//                                 <input type="radio" name="radioGroup" onClick={handlePrev} className="form-radio text-blue-500" />
//                                 <input type="radio" name="radioGroup" className="form-radio text-blue-500" />
//                                 <input type="radio" name="radioGroup" onClick={handleNext} className="form-radio text-blue-500" />
//                             </div>
//                         </div>
//                         <div className='text-right  text-white cursor-pointer lg:mt-8 border-4 ' style={{
//                             background: 'linear-gradient(180deg, #0B2341 0%, #000000 100%)',
//                         }} >
//                             <span class="text-3xl sm:pr-8 " onClick={handleBackButtonClick} >{'←'}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </>

































