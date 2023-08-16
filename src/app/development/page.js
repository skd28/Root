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
                <div className=" relative overflow-hidden  bg-cover bg-center bg-no-repeat px-36 py-36 "
                    style={{ backgroundImage: `url(${services && services[0].attributes.backgorudImgbottomlink})` }}>
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



            <div className='bg-[#0B2341] py-10'>
                <div className=' grid grid-flow-col'>
                    <div>
                        <div style={{
                            backgroundImage: `url(${services && services[0].attributes.backgorudImgbottomlink})`,
                            height: '200px',
                            width: '400px',
                        }}>
                            <h1 className='text-white'>Hello I am Image</h1>
                            {/* <div className=' w-[500px] h-[400px] ps-20 mt-32'
                                style={{
                                    // border: '2px solid red',
                                }}>

                                {services && <img src={services[0].attributes.GIFlink} alt="Image Description"
                                    className=' w-96 h-96' />}
                            </div> */}
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

                </div>
            </div>

        </>
    )
}

export default Home






// GIFlink   backgorudImgbottomlink    backgorudImglinkTop




//     < div className = 'mt-48 -ms-96 -mx-32 -mr-5  -me-10'
// style = {{
//     backgroundImage: `url(${services && services[0].attributes.BubbleImgLink})`,
//         // backgroundSize: "cover",
//         width: '970px', height: '230px',
//             border: "2px solid black"
//     // border: "2px solid black", BubbleImgLink  ImgLink

// }}
//                     >
{/* <div className='pt-20 -ms-80 -mr-32'>
                            {services && <img src={services[0].attributes.BubbleImgLink} alt='Image' />}
                        </div> */}

// </ >


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