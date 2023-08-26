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
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch('https://root-blogsite.onrender.com/api/solutions', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data1 = await response.json();
                //console.log(data1);
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
            <div className='bg-[#164179] py-10'>
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
                                    <div>
                                        <div className='w-[374px] h-[498px]  rounded-2xl' style={{
                                            //  backgroundImage: 'url("/Image/R1.png")'
                                            backgroundColor: 'rgba(217, 217, 217, 0.12)',
                                        }}>
                                            {/* Heading */}
                                            <div className='w-[374.76px] h-[57px] text-center pt-4  rounded-2xl' style={{
                                                // backgroundImage: 'url("/Image/R3.png")'
                                                backgroundColor: 'rgba(217, 217, 217, 0.12)',
                                                //  border: '2px solid red',
                                            }} >
                                                <span > {item.attributes.SubTitle} </span>
                                            </div>
                                            {/* Image */}
                                            <div className='w-[374.76px]  h-[248px] my-1 rounded-2xl ' style={{
                                                //  border: '2px solid red',
                                                backgroundColor: 'rgba(217, 217, 217, 0.12)',
                                            }}>
                                                <img src={item.attributes.TitleGifLink} className='w-[374.76px]  h-[245px] rounded-2xl ' />
                                            </div>
                                            {/* Description     */}
                                            <div className='w-[374px] h-[188px]  text-justify  rounded-2xl' style={{
                                                // backgroundImage: 'url("/Image/R2.png")',
                                                // border: '2px solid red',
                                                backgroundColor: 'rgba(217, 217, 217, 0.12)',
                                            }}>
                                                <div>
                                                    <p className=' text-sm text-justify p-3' style={{
                                                        //border: '2px solid blue',
                                                    }}> {item.attributes.Description}</p>
                                                </div>

                                                <div className='rounded-2xl pt-3 ms-3' style={{
                                                    //   border: '2px solid blue',
                                                    float: 'right',
                                                    width: '8%'

                                                }}>
                                                    <span className='cursor-pointer' onClick={() => router.push('our_solution')} >
                                                        <img src='/Image/button.png' alt='Image not Found' className='w-6 h-6' />
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ) : (
                                    <div className=' w-[300px] h-[400px] mt-12  rounded-2xl' style={{
                                        //  border: '2px solid red',
                                        backgroundColor: 'rgba(217, 217, 217, 0.12)',
                                    }}>
                                        {/* Heading */}
                                        <div className=' justify-center items-center text-center  text-sm rounded-2xl  p-2 w-[300px] h-[40px] ' style={{
                                            backgroundColor: 'rgba(217, 217, 217, 0.12)',
                                        }}>
                                            <span>{item.attributes.SubTitle}</span>
                                        </div>
                                        {/* Image */}
                                        <div className='mt-1 rounded-2xl' style={{
                                            backgroundColor: 'rgba(217, 217, 217, 0.12)',
                                        }}>
                                            <img src={item.attributes.TitleGifLink} className='w-[300px]  h-[200px] rounded-2xl' />
                                        </div>
                                        {/* Description */}
                                        <div className=' justify-center items-center text-justify text-xs  rounded-2xl p-2 w-[300px] h-[150px] mt-1 ' style={{
                                            backgroundColor: 'rgba(217, 217, 217, 0.12)',
                                        }}>
                                            <p >{item.attributes.Description}</p>
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


                                          // <div className='w-96' style={{
                                    //     //  border: '2px solid red',
                                    // }}>
                                    //     {/* Heading */}
                                    //     <div className='bg-[#8069EE] justify-center items-center text-center rounded-2xl  p-3 w-96 ' style={{
                                    //         //  border: '2px solid blue',
                                    //     }}>
                                    //         <span>
                                    //             {item.attributes.SubTitle}
                                    //         </span>
                                    //     </div>
                                    //     {/* Image */}
                                    //     <div className='justify-center items-center text-center' style={{
                                    //         //  border: '2px solid blue',
                                    //     }}>
                                    //         <img src={item.attributes.TitleGifLink} className='w-96 h-52' />
                                    //     </div>
                                    //     {/* Description */}
                                    //     <div className='bg-[#8069EE] justify-center items-center text-justify  rounded-2xl  p-3 w-96 h-60' style={{
                                    //         // border: '2px solid blue'
                                    //     }}>
                                    //         <span>
                                    //             {item.attributes.Description}
                                    //         </span>
                                    //         <br />
                                    //         {/* Button */}
                                    //         <div className='mt-3  place-items-end ps-80' style={{
                                    //             // border: '2px solid blue',
                                    //         }}>
                                    //             <span className='cursor-pointer' onClick={() => router.push('our_solution')} >
                                    //                 <img src='/Image/button.png' alt='Image not Found' className='w-10 h-10' />
                                    //             </span>
                                    //         </div>
                                    //     </div>

                                    // </div>
