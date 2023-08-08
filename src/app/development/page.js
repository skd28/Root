"use client"
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Image from 'next/image';





function Home() {
    const [services, setServices] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch('https://root-blogsite.onrender.com/api/our-developments/');
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

    return (
        <>
            <div className='bg-[#0B2341]'>
                <div className=" relative overflow-hidden  bg-cover bg-center bg-no-repeat px-36 py-36 "
                    style={{ backgroundImage: `url(${services && services[0].attributes.backgorudImglinkTop})` }}>
                    <div className=' text-center  py-96 text-3xl  text-white'>
                        {/* <h1>Our Devlopment</h1>

                        <div className='ps-96 pt-3'>
                            <img src="/Image/Line 20.png" alt="Image Description" className='items-center' />
                        </div> */}
                    </div>
                </div>



                <div className=' grid grid-flow-col gap-x-10 '>
                    <div className='m-6'>

                        {services && <img src={services[0].attributes.GIFlink} alt="Image Description" />}
                        {/* <img src="/Image/Deve1.png" alt="Image Description" className='items-center m-10' className='items-center m-10' /> */}
                    </div>
                    <div className='grid grid-flow-col  mt-16'>
                        <div className='grid grid-flow-row text-white  '>
                            <div className=''>
                                {services &&
                                    services.slice(currentSlide, currentSlide + 3).map((item, index) => (
                                        <div key={item.id}>
                                            <button className='bg-[#8069EE] m-2 rounded-xl p-3 px-12 justify-center items-center text-center '>
                                                {item.attributes.name}
                                            </button>

                                            <p className=' bg-[#8069EE] m-2 rounded  justify-center items-center text-justify  w-5/6 h-24 p-5 py-3 mb-5' >
                                                {item.attributes.description}  </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-center mr-20'>
                            <input type="radio" name="radioGroup" onClick={handlePrev} className="form-radio text-blue-500" />
                            <input type="radio" name="radioGroup" class="form-radio text-blue-500" />
                            <input type="radio" name="radioGroup" onClick={handleNext} className="form-radio text-blue-500" />
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Home






// GIFlink   backgorudImgbottomlink    backgorudImglinkTop







// < button className = " bg-[#EDE7E7] rounded-xl p-4" >
//     Custom Web Development
//                             </ >
// <p className='bg-[#8069EE] mr-60 p-7 rounded-xl my-5 '>Providing unique web apps and websites, guaranteeing quality and on-time delivery to match your specific requirements with 100% results.</p>
//                         </div >
//                         <div>
//                             <button className=" bg-[#EDE7E7] rounded-xl p-4">
//                                 Custom Web Development
//                             </button>

//                             <p className='bg-[#8069EE] mr-60 p-7 rounded-xl my-5 '>Empowering flexibility, Leverage customizable solutions to observe, learn, and modify content, ensuring complete control and tailored web development.</p>
//                         </div>
//                         <div>
//                             <button className=" bg-[#EDE7E7] rounded-xl p-4">
//                                 Custom Web Development
//                             </button>
//                             <p className='bg-[#8069EE] mr-60 p-7 rounded-xl my-5 '>Our skilled team creates user-friendly and visually appealing websites, making sure they look great and interactive to the end user.

//                             </p>

// < input type = "radio" name = "radioGroup" class="form-radio text-blue-500" />
//                         <input type="radio" name="radioGroup" class="form-radio text-blue-500" />
//                         <input type="radio" name="radioGroup" class="form-radio text-blue-500" />





// className = 'bg-cyan-700 p-4 rounded-full justify-center m-2'


//     < div className = "relative overflow-hidden  bg-cover bg-center bg-no-repeat "
// style = {{
//     backgroundImage: 'url("/Image/R1.png")',
//                                                 }}>
//     <button className='bg-cyan-700 rounded-full  justify-center p-4'>
//         {item.attributes.name}
//     </button>
//                                             </ >

//     <div className="relative overflow-hidden  bg-cover bg-center bg-no-repeat "
//         style={{
//             backgroundImage: 'url("/Image/R1.png")',
//         }}>
//         <p className='bg-cyan-800 rounded-2xl justify-center items-center text-center mx-5 mr-60 p-7 my-5  ' >
//             {item.attributes.description}  </p>

//     </div>


{/* <div className="relative overflow-hidden  bg-cover bg-center bg-no-repeat  "
                                                style={{
                                                    backgroundImage: 'url("/Image/R1.png")',
                                                }}>
                                                <button className=''>
                                                    {item.attributes.name}
                                                </button>
                                            </div>

                                            <div className="relative overflow-hidden  bg-cover bg-center bg-no-repeat m-5"
                                                style={{
                                                    backgroundImage: 'url("/Image/R1.png")',
                                                }}>
                                            </div> */}