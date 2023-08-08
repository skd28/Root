"use client"
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Slider = ({ image }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);


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
                                <div key={item.id}>
                                    <button className='bg-[#8069EE] m-2 rounded-xl   w-5/6 h-10  justify-center items-center text-center '>
                                        {item.attributes.name}
                                    </button>
                                    <img
                                        src={item.attributes.Imglink} />
                                    <p className=' bg-[#8069EE] m-2 rounded  justify-center items-center text-justify  w-5/6 h-56 p-5 py-3 mb-5' >
                                        {item.attributes.description}
                                        <br />
                                        <button className={`index==firstVisibleIndex+1`}>Summit</button>
                                    </p>

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








// const handleImageClick = (image) => {
    //     setSelectedImage(iamge);
    // };


// "use client";
// import React, { useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

// const Slider = ({ image }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//     };

//     const handleNext = () => {
//         const maxIndex = image.length - 1;
//         setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
//     };

//     const isMiddleComponent = (index) => {
//         return index === currentIndex + 1;
//     };

//     const handleComponentSubmit = (index) => {
//         // Perform your submit logic here for the specific component at the given index
//         console.log('Component at index', index, 'submitted');
//     };

//     return (
//         <div className='bg-[#164179]'>
//             <div>
//                 <h1 className='text-white text-4xl'>OUR SOLUTIONS</h1>
//                 <div className='pt-3'>
//                     <img src='/Image/Line 20.png' alt="Image Description" />
//                 </div>
//             </div>

//             <div className='flex space-x-2 overflow-hidden items-center bg-cover text-white'>
//                 <BsChevronCompactLeft onClick={handlePrev} size={50} />
//                 <div className="flex space-x-2 overflow-hidden items-center bg-cover text-white px-20">
//                     {image &&
//                         image.slice(currentIndex, currentIndex + 3).map((item, index) => (
//                             <div key={index} className="flex flex-col items-center">
//                                 <h2 className="text-white text-xl mb-2">{item.attributes.name}</h2>

//                                 <img src={item.attributes.Imglink} alt={item.heading} className="mb-2" />
//                                 <p className="bg-[#8069EE] m-2 rounded justify-center items-center text-justify w-80 h-56 p-5 py-3">
//                                     {item.attributes.description}
//                                 </p>
//                                 {isMiddleComponent(index) && (
//                                     <button
//                                         className='bg-[#8069EE] rounded-xl py-2 px-6 text-white mt-2'
//                                         onClick={() => handleComponentSubmit(currentIndex + index)}
//                                     >
//                                         Submit
//                                     </button>
//                                 )}
//                             </div>
//                         ))}
//                 </div>
//                 <BsChevronCompactRight onClick={handleNext} size={50} />
//             </div>
//         </div>
//     );
// };

// export default Slider;





















// className="flex  justify-center items-center"
//className = "group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
//className = "group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"




// className = {`bg-custom-gradient text-center justify-center px-2 ${index === 1 ? "w-1/2 h-1/2" : "w-80 h-80"}`}>

//                                     <div className='bg-cyan-700 p-4 rounded-full justify-center m-2'>
//                                         <p className={`${index === firstVisibleIndex + 1 ? "text-lg" : "text-base"
//                                             }`}>
//                                             {item.attributes.name}  </p>
//                                     </div>
//                                     <div className='bg-cyan-800 rounded-2xl justify-center items-center text-center mx-5 '>
//                                         <img
//                                             src={item.attributes.Imglink}
//                                         />
//                                     </div>
// {/* <div className={`bg-cyan-600 text-center justify-center rounded-3xl m-3`}>
//                                         <p className={`${index === firstVisibleIndex + 1 ? "text-lg" : "text-base"
//                                             }`}>
//                                             {item.attributes.description}</p>
//                                     </div> */}

// <div className={`bg-cyan-600 text-center justify-center rounded-3xl m-3`}>
//     <p
//         className={`${index === firstVisibleIndex + 1
//             ? 'text-xl'
//             : index === firstVisibleIndex + 2
//                 ? 'text-sm' // Apply a different size for the last description (you can use any size class you want)
//                 : 'text-sm'
//             }`}
//     >
//         {item.attributes.description}
//     </p>
// </div>