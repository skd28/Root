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
                <div className="  bg-cover bg-center bg-no-repeat w-full h-full border-4 "
                    style={{ backgroundImage: `url('https://res.cloudinary.com/dgpftd5nf/image/upload/v1691386777/background_img_1443f7bf67.png')` }}>
                    <div className=' text-center text-white py-48 '>
                        <p style={{ border: '2px solid yellow' }} >
                            {services && services[0].attributes.Title}
                        </p>
                        <div className=''>
                            <div className=" bg-white w-1/2 h-1 prounded">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#0B2341]  ' style={{
                // boxShadow: 'inset 0 -30px  black',
            }}>
                {/* w-[1800px] h-[800px]  right-3/4 border-4 border-red-800 */}
                <div>
                    <div className=' relative right-[00px] w-full bg-cover' style={{
                        backgroundImage: `url('https://res.cloudinary.com/dgpftd5nf/image/upload/v1691393550/background_img_bottom_73ea7913ab.png')`,
                        backgroundColor: "#0B234",
                    }}>

                        <div className=' relative left-[00px]  text-white' style={{
                            // width: "69%",
                            border: '2px solid yellow',
                        }}>
                            <div className='flex flex-col w-full' style={{ border: '2px solid red', }}>
                                <div className=''
                                >
                                    <Lotiee animationData={animation} className='w-1/2 h-1/2' />
                                </div>
                                <div className='border-4' >
                                    <div className='grid grid-flow-col '>
                                        <div className='grid grid-flow-row text-white  '>
                                            <div className=''>
                                                {services &&
                                                    services.slice(currentSlide, currentSlide + 3).map((item, index) => (
                                                        <div key={item.id}>
                                                            <span className='  rounded-2xl text-xs   justify-center items-center text-center'
                                                                style={{
                                                                    backgroundImage: 'linear-gradient(0deg, rgba(217, 217, 217, 0.12), rgba(217, 217, 217, 0.12))',
                                                                }} >
                                                                {item.attributes.subtitle2}
                                                            </span>

                                                            <p className=' bg-[#8069EE]  rounded-2xl   justify-center items-center text-justify  w-5/6 h-24 '
                                                                style={{
                                                                    fontSize: '11px',
                                                                    background: 'linear-gradient(358deg, rgba(128, 105, 238, 0.51),3.22%, rgba(128, 105, 238, 0.1275) 77.82% ,rgba(103, 121, 191, 0) 97.64%)',
                                                                }} >
                                                                {item.attributes.Description}  </p>
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
                                    <div className='text-right  text-white cursor-pointer   ' >
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




















