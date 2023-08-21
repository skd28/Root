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
                const response = await fetch('https://root-blogsite.onrender.com/api/solutins/');
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
            <div className='bg-[#164179]'>
                <div>
                    <h1 className='text-white text-4xl'>
                        OUR SOLUTIONS
                    </h1>
                    <div className='pt-3 pb-7'>
                        <img src='/Image/Line 20.png' alt="Image Description" /><img />
                    </div>
                </div>




                <div className='grid grid-flow-col'>
                    <div className='grid grid-flow-col text-white '>
                        <input type="radio" name="radioGroup" onClick={handlePrev} className="form-radio text-blue-500" />
                        <div className='grid grid-flow-col gap-10 mx-10 mb-10 '>
                            {services &&
                                services.slice(currentSlide, currentSlide + 3).map((item, index) => (
                                    <div key={item.id}>
                                        <div className='bg-[#8069EE] justify-center items-center text-center rounded w-5/6 h-10 p-2'>{item.attributes.name}</div>

                                        <img src={item.attributes.giFLink} className='w-5/6 h-52' style={{ backgroundColor: 'transparent' }} />

                                        <div className='bg-[#8069EE] w-5/6 h-56 rounded p-4 '>
                                            {item.attributes.description}
                                            <br />
                                            {(index === 1) && <span className='place-items-end cursor-pointer' onClick={() => router.push('our_solution')} >Summit</span>}
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <input type="radio" name="radioGroup" onClick={handleNext} className="form-radio text-blue-500" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Solutions

