"use client"
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Slider = ({ image }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);

    const handleImageClick = (image) => {
        setSelectedImage(iamge);
    };

    const handlePrev = () => {

        setFirstVisibleIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {

        const lastVisibleIndex = firstVisibleIndex + 2;
        if (image && lastVisibleIndex < image.length - 1) {
            setFirstVisibleIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <>

            <div className='bg-[#164179]' >
                <div>
                    <h1 className='text-white text-4xl'>
                        OUR SOLUTIONS
                    </h1>
                    <div className='pt-3'>
                        <img src='/Image/Line 20.png' alt="Image Description" /><img />
                    </div>
                </div>





                <div className='flex space-x-2 overflow-hidden items-center bg-cover  text-white'>
                    <BsChevronCompactLeft onClick={handlePrev} size={50} />
                    <div className="flex space-x-2 overflow-hidden items-center bg-cover  text-white px-20">
                        {image &&
                            image.slice(firstVisibleIndex, firstVisibleIndex + 3).map((item, index) => (
                                <div key={item.id}
                                    className={`bg-custom-gradient text-center justify-center px-2 ${index === 1 ? "w-1/2 h-1/2" : "w-80 h-80"}`}>

                                    <div className='bg-cyan-700 p-4 rounded-full justify-center m-2'>
                                        <p className={`${index === firstVisibleIndex + 1 ? "text-lg" : "text-base"
                                            }`}>
                                            {item.attributes.name}  </p>
                                    </div>
                                    <div className='bg-cyan-800 rounded-2xl justify-center items-center text-center mx-5 '>
                                        <img
                                            src={item.attributes.Imglink}
                                        />
                                    </div>
                                    {/* <div className={`bg-cyan-600 text-center justify-center rounded-3xl m-3`}>
                                        <p className={`${index === firstVisibleIndex + 1 ? "text-lg" : "text-base"
                                            }`}>
                                            {item.attributes.description}</p>
                                    </div> */}

                                    <div className={`bg-cyan-600 text-center justify-center rounded-3xl m-3`}>
                                        <p
                                            className={`${index === firstVisibleIndex + 1
                                                ? 'text-lg'
                                                : index === firstVisibleIndex + 2
                                                    ? 'text-xl' // Apply a different size for the last description (you can use any size class you want)
                                                    : 'text-base'
                                                }`}
                                        >
                                            {item.attributes.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <BsChevronCompactRight onClick={handleNext} size={50} />

                </div>
            </div>
        </>
    );
};

export default Slider





// className="flex  justify-center items-center"
//className = "group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
//className = "group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"