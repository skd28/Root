"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
function Solutions() {


    const [services, setServices] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();


    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch('https://root-blogsite.onrender.com/api/solutions');
                const data1 = await response.json();
                //    console.log(data1);
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
            <div className='bg-[#164179] py-5'>
                <div className='ps-10 pt-7'>
                    <p className='text-white text-4xl'>
                        {services && services[0].attributes.Title}
                    </p>
                    <div className="w-24 h-1 pt-3">
                        <div className=" bg-white w-24 h-1 rounded">
                        </div>
                    </div>
                </div>

                <div className='grid grid-flow-col text-white ms-8  mt-5 '>
                    {/* Arrow */}
                    <div className='mt-40'>
                        <span onClick={handlePrev} className='cursor-pointer text-4xl' >{'<<'}</span>
                    </div>
                    {services &&
                        services.slice(currentSlide, currentSlide + 3).map((item, index) => (
                            <div key={item.id}>

                                {index == 1 ? (
                                    <div className='w-96' style={{
                                        //  border: '2px solid red',
                                    }}>
                                        {/* Heading */}
                                        <div className='bg-[#8069EE] justify-center items-center text-center rounded-2xl  p-3 w-96 ' style={{
                                            //  border: '2px solid blue',
                                        }}>
                                            <span>
                                                {item.attributes.SubTitle}
                                            </span>
                                        </div>
                                        {/* Image */}
                                        <div className='justify-center items-center text-center' style={{
                                            //  border: '2px solid blue',
                                        }}>
                                            <img src={item.attributes.TitleGifLink} className='w-96 h-52' />
                                        </div>
                                        {/* Description */}
                                        <div className='bg-[#8069EE] justify-center items-center text-justify  rounded-2xl  p-3 w-96 h-60' style={{
                                            // border: '2px solid blue'
                                        }}>
                                            <span>
                                                {item.attributes.Description}
                                            </span>
                                            <br />
                                            {/* Button */}
                                            <div className='mt-3  place-items-end ps-80' style={{
                                                // border: '2px solid blue',
                                            }}>
                                                <span className='cursor-pointer' onClick={() => router.push('our_solution')} >
                                                    <img src='/Image/button.png' alt='Image not Found' className='w-10 h-10' />
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                ) : (
                                    <div className=' w-72 my-10' style={{
                                        //  border: '2px solid red',
                                    }}>
                                        {/* Heading */}
                                        <div className='bg-[#8069EE] justify-center items-center text-center  text-sm rounded-2xl  p-2 w-72 '>
                                            <span>{item.attributes.SubTitle}</span>
                                        </div>
                                        {/* Image */}

                                        <div>
                                            <img src={item.attributes.TitleGifLink} className='w-72  h-40' />
                                        </div>
                                        {/* Description */}
                                        <div className='bg-[#8069EE] justify-center items-center text-justify text-xs  rounded-2xl p-2 w-72 h-40'>
                                            <span> {item.attributes.Description}</span>
                                        </div>

                                    </div>
                                )}
                            </div>
                        ))}
                    {/* Arrow */}
                    <div className='mt-40'>
                        <span onClick={handleNext} className='cursor-pointer text-4xl'>{'>>'}</span>
                    </div>
                </div>

            </div>


            <div className='text-white p-10 bg-[#164179]  ' style={{
                border: '2px solid red'
            }}>

                <div className='w-96 h-96' style={{
                    backgroundImage: 'url("/Image/Rectangle1.png")'
                }}>
                    <img src='/Image/Rectangle 45.png' alt='Rectangle 45' className='w-96 h-20' />

                    <img src='/Image/Rectangle2.png' alt='Rectangle2' className='w-96 h-40 mt-40' />
                </div>
            </div>
        </>
    )
}

export default Solutions



// {
//     (index == 1) && <div style={{
//         border: '2px solid red',
//     }}>
//         {item.attributes.Description}
//     </div>
// }


{/* <div className='bg-[#8069EE] w-5/6 h-56 rounded p-4 '>
                                                {item.attributes.Description}
                                                <br />
                                                {(index === 1) && <span className='place-items-end cursor-pointer' onClick={() => router.push('our_solution')} >Summit   </span>}
                                            </div> */}


{/* <div className='bg-[#8069EE] justify-center items-center text-center rounded w-5/6 h-10 p-2'>{item.attributes.SubTitle}</div>

                                        <img src={item.attributes.TitleGifLink} className='w-5/6 h-52' style={{ backgroundColor: 'transparent' }} />

                                        <div>
                                            {index == 1 ? (
                                                <div style={{
                                                    border: '2px solid red',
                                                }}>
                                                    {item.attributes.Description}
                                                    <br />
                                                    <span className='place-items-end cursor-pointer' onClick={() => router.push('our_solution')} >Summit   </span>
                                                </div>
                                            ) : (
                                                <div style={{
                                                    border: '2px solid blue',
                                                }}>
                                                    {item.attributes.Description}
                                                </div>
                                            )
                                            }
                                        </div> */}
