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
            <div className='bg-[#0B2341]'>
                <div className=" relative overflow-hidden  bg-cover bg-center bg-no-repeat px-36 py-20 bs:px-10 bs:py-36 "
                    style={{ backgroundImage: `url(${services && services[0].attributes.backgroundimgtopLink})` }}>
                    <div className=' text-center text-white py-96 text-3xl pr-12 bs:py-20 bs:text-base bs:pr-5 '>
                        <p >
                            {services && services[0].attributes.Title}
                        </p>

                        <div className="w-20 h-1 ms-80 pt-2 bs:ms-16 bs:pt-1">
                            <div className=" bg-white w-20 h-1 rounded">
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#0B2341]  ' style={{
                boxShadow: 'inset 0 -30px  black',
            }}>
                {/* w-[1800px] h-[800px]  right-3/4 border-4 border-red-800 */}
                <div>
                    <div className='relative right-[750px] w-[1500px] bg-cover bs:right-[100px] ' style={{
                        backgroundImage: `url(${services && services[0].attributes.backgorudImgbottomlink})`,
                        backgroundColor: "#0B234",
                    }}>

                        <div className='relative left-[850px] ms-20 text-white pt-32 w-[69%]' style={{
                            // width: "69%",
                        }}>
                            <div className='grid grid-flow-col  gap-20 bs:grid-flow-row ' style={{ border: '2px solid red', }}>
                                <div className='pt-44 ps-20'
                                >
                                    <Lotiee animationData={animation} className='w-96 h-96' />
                                </div>
                                <div>
                                    <div className='grid grid-flow-col mt-28 ms-10  bs:grid-flow-row'>
                                        <div className='grid grid-flow-row text-white  '>
                                            <div className=''>
                                                {services &&
                                                    services.slice(currentSlide, currentSlide + 3).map((item, index) => (
                                                        <div key={item.id}>
                                                            <span className=' m-2 rounded-2xl text-xs  p-2 px-12 justify-center items-center text-center'
                                                                style={{
                                                                    backgroundImage: 'linear-gradient(0deg, rgba(217, 217, 217, 0.12), rgba(217, 217, 217, 0.12))',
                                                                }} >
                                                                {item.attributes.subtitle2}
                                                            </span>

                                                            <p className=' bg-[#8069EE] m-2 rounded-2xl   justify-center items-center text-justify  w-5/6 h-24 p-5 py-3 mb-5 mt-5'
                                                                style={{
                                                                    fontSize: '11px',
                                                                    background: 'linear-gradient(358deg, rgba(128, 105, 238, 0.51),3.22%, rgba(128, 105, 238, 0.1275) 77.82% ,rgba(103, 121, 191, 0) 97.64%)',
                                                                }} >
                                                                {item.attributes.Description}  </p>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center text-center mr-5'>
                                            <input type="radio" name="radioGroup" onClick={handlePrev} className="form-radio text-blue-500" />
                                            <input type="radio" name="radioGroup" className="form-radio text-blue-500" />
                                            <input type="radio" name="radioGroup" onClick={handleNext} className="form-radio text-blue-500" />
                                        </div>
                                    </div>
                                    <div className='text-right ms-20 text-white cursor-pointer  pt-1 ' >
                                        <span class="text-3xl" onClick={handleBackButtonClick} >{'←'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home




















