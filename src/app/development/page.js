"use client"
import React, { useState, useEffect } from 'react';






function Home() {
    const [services, setServices] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch('https://root-blogsite.onrender.com/api/our-development-2nds');
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
                <div className=" relative overflow-hidden  bg-cover bg-center bg-no-repeat px-36 py-20 "
                    style={{ backgroundImage: `url(${services && services[0].attributes.backgroundimgtopLink})` }}>
                    <div className=' text-center  py-96 text-3xl pr-12  text-white'>
                        <p >
                            {services && services[0].attributes.Title}
                        </p>

                        <div className="w-20 h-1 ms-80 pt-2">
                            <div className=" bg-white w-20 h-1 rounded">
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className='bg-[#0B2341] '>

                <div className='relative  '>
                    <div className='relative right-3/4' style={{
                        backgroundImage: `url(${services && services[0].attributes.backgorudImgbottomlink})`,
                        height: '750px', width: '1800px',
                        backgroundColor: "#0B234",
                    }}>


                        <div className='relative left-1/2 ms-14 text-white pt-32' style={{
                            width: "69%",
                            //  border: '2px solid red',

                        }}>
                            <div className='grid grid-flow-col gap-20 '>
                                <div className='pt-44 ps-40'
                                    style={{
                                        //  border: '2px solid red',
                                    }}>
                                    {services && <img src={services[0].attributes.GIFlink} alt="Image Description" className='w-96 h-96' />}
                                </div>
                                <div style={{
                                    // border: '2px solid red',
                                }}>
                                    <div className='grid grid-flow-col mt-28 ms-16 '>
                                        <div className='grid grid-flow-row text-white  '>
                                            <div className=''>
                                                {services &&
                                                    services.slice(currentSlide, currentSlide + 3).map((item, index) => (
                                                        <div key={item.id}>
                                                            <span className='bg-[#8069EE] m-2 rounded-2xl text-xs  p-2 px-12 justify-center items-center text-center'
                                                            >
                                                                {item.attributes.subtitle2}
                                                            </span>

                                                            <p className=' bg-[#8069EE] m-2 rounded-2xl   justify-center items-center text-justify  w-5/6 h-24 p-5 py-3 mb-5 mt-5'
                                                                style={{
                                                                    fontSize: '11px'
                                                                }} >
                                                                {item.attributes.Description}  </p>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center text-center mr-5'>
                                            <input type="radio" name="radioGroup" onClick={handlePrev} className="form-radio text-blue-500" />
                                            <input type="radio" name="radioGroup" class="form-radio text-blue-500" />
                                            <input type="radio" name="radioGroup" onClick={handleNext} className="form-radio text-blue-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className='grid grid-flow-col relative  '>
                            <div className=' w-96 h-96'>
                                {services && <img src={services[0].attributes.GIFlink} alt="Image Description" className='' />}
                            </div>

                            <div>
                                <div className=' text-white w-1/2 ' style={{
                                    // width: '35%',
                                    // float: 'right',
                                    //  height: '650px',
                                }}>
                                    <div className='grid grid-flow-col mt-28 ms-16 '>
                                        <div className='grid grid-flow-row text-white  '>
                                            <div className=''>
                                                {services &&
                                                    services.slice(currentSlide, currentSlide + 3).map((item, index) => (
                                                        <div key={item.id}>
                                                            <span className='bg-[#8069EE] m-2 rounded-xl text-xs p-2 px-12 justify-center items-center text-center '>
                                                                {item.attributes.subtitle2}
                                                            </span>

                                                            <p className=' bg-[#8069EE] m-2 rounded text-xs justify-center items-center text-justify  w-5/6 h-24 p-5 py-3 mb-5 mt-5' >
                                                                {item.attributes.Description}  </p>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center text-center mr-5'>
                                            <input type="radio" name="radioGroup" onClick={handlePrev} className="form-radio text-blue-500" />
                                            <input type="radio" name="radioGroup" class="form-radio text-blue-500" />
                                            <input type="radio" name="radioGroup" onClick={handleNext} className="form-radio text-blue-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> */}


                    </div>
                </div>



                <div>
                    {/* <div className='bg-[#0B2341] text-white relative ' style={{ width: '65%', float: 'left', height: '650px', }}>

                        <div className='relative  right-full bottom-28 ' style={{ backgroundImage: `url(${services && services[0].attributes.backgorudImgbottomlink})`, height: '750px', width: '1800px', }}>
                            {services && <img src={services[0].attributes.GIFlink} alt="Image Description" className=' w-96 h-96' />}
                        </div>
                    </div> */}


                    {/* <div className='bg-[#0B2341] text-white' style={{ width: '35%', float: 'right', height: '650px', }}>
                        <div className='grid grid-flow-col mt-28 ms-16 '>
                            <div className='grid grid-flow-row text-white  '>
                                <div className=''>
                                    {services &&
                                        services.slice(currentSlide, currentSlide + 3).map((item, index) => (
                                            <div key={item.id}>
                                                <span className='bg-[#8069EE] m-2 rounded-xl text-xs p-2 px-12 justify-center items-center text-center '>
                                                    {item.attributes.subtitle2}
                                                </span>

                                                <p className=' bg-[#8069EE] m-2 rounded text-xs justify-center items-center text-justify  w-5/6 h-24 p-5 py-3 mb-5 mt-5' >
                                                    {item.attributes.Description}  </p>
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div className=' flex flex-col justify-center items-center text-center mr-5'>
                                <input type="radio" name="radioGroup" onClick={handlePrev} className="form-radio text-blue-500" />
                                <input type="radio" name="radioGroup" class="form-radio text-blue-500" />
                                <input type="radio" name="radioGroup" onClick={handleNext} className="form-radio text-blue-500" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Home






// GIFlink   backgorudImgbottomlink    backgorudImglinkTop





// < div className = 'bg-[#0B234]' >
//     <div>
//         <div className='bg-[#0B2341] text-white relative ' style={{ width: '65%', float: 'left', height: '650px', }}>

//             <div className='relative  right-full bottom-28 ' style={{ backgroundImage: `url(${services && services[0].attributes.backgorudImgbottomlink})`, height: '750px', width: '1800px', }}>
//                 {services && <img src={services[0].attributes.GIFlink} alt="Image Description" className=' w-96 h-96' />}
//             </div>
//         </div>


//         <div className='bg-[#0B2341] text-white' style={{ width: '35%', float: 'right', height: '650px', }}>
//             <div className='grid grid-flow-col mt-28 ms-16 '>
//                 <div className='grid grid-flow-row text-white  '>
//                     <div className=''>
//                         {services &&
//                             services.slice(currentSlide, currentSlide + 3).map((item, index) => (
//                                 <div key={item.id}>
//                                     <span className='bg-[#8069EE] m-2 rounded-xl text-xs p-2 px-12 justify-center items-center text-center '>
//                                         {item.attributes.subtitle2}
//                                     </span>

//                                     <p className=' bg-[#8069EE] m-2 rounded text-xs justify-center items-center text-justify  w-5/6 h-24 p-5 py-3 mb-5 mt-5' >
//                                         {item.attributes.Description}  </p>
//                                 </div>
//                             ))}
//                     </div>
//                 </div>
//                 <div className=' flex flex-col justify-center items-center text-center mr-5'>
//                     <input type="radio" name="radioGroup" onClick={handlePrev} className="form-radio text-blue-500" />
//                     <input type="radio" name="radioGroup" class="form-radio text-blue-500" />
//                     <input type="radio" name="radioGroup" onClick={handleNext} className="form-radio text-blue-500" />
//                 </div>
//             </div>
//         </div>
//     </div>
//         </ >













{/* {services && <img src={services[0].attributes.GIFlink} alt="Image Description"
                    className=' w-96 h-96' />} */}


{/* <div className='relative  right-3/4' style={{
                    backgroundImage: `url(${services && services[0].attributes.backgorudImgbottomlink})`,
                    height: '700px',
                    width: '1800px',
                }}>
                </div> */}

{/* <div className='grid grid-flow-col relative '>
                    <div>
                        <div className=' w-[500px] h-[400px] ps-20 mt-32'
                            style={{
                                // border: '2px solid red',
                            }}>

                            {services && <img src={services[0].attributes.GIFlink} alt="Image Description"
                                className=' w-96 h-96' />}

                        </div>


                    </div>

                    <div className='grid grid-flow-col  mt-12 ms-32'>
                        <div className='grid grid-flow-row text-white px-16 '>
                            <div className=''>
                                {services &&
                                    services.slice(currentSlide, currentSlide + 3).map((item, index) => (
                                        <div key={item.id}>
                                            <span className='bg-[#8069EE] m-2 rounded-xl text-xs p-2 px-12 justify-center items-center text-center '>
                                                {item.attributes.subtitle2}
                                            </span>

                                            <p className=' bg-[#8069EE] m-2 rounded text-xs justify-center items-center text-justify  w-5/6 h-24 p-5 py-3 mb-5 mt-5' >
                                                {item.attributes.Description}  </p>
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

                </div> */}

