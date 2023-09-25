"use client";
import React, { useState, useEffect } from "react";
import Lotiee from 'lottie-react';
import Growing_Values1 from '../animation/growing_values1.json';
import Growing_Values2 from '../animation/growing_value2.json';
import Image from "next/image";

function Growing_Values() {
    const [services, setServices] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch(' https://root-blogsite.onrender.com/api/growing-with-value/', {
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

    return (
        <>
            <div className="bg-custom-blue ">
                <div className="px-16 py-5">
                    <h1 className="text-white text-4xl ">Growing With Values</h1>
                    <div className="h-1 w-20 bg-white mt-2 rounded"></div>
                </div>
                <div className="hidden lg:block">
                    <div className=" mx-16  flex flex-row " style={{
                        //  border: '2px solid green   flex flex-row '
                    }}>
                        <div className="bg-no-repeat bg-contain " style={{
                            backgroundImage: 'url("/Image/Growing_desktop.png")',
                            // border: '2px solid black',
                        }}>
                            <Lotiee animationData={Growing_Values1} className="w-1/2  mx-10" />
                            <p className="text-white  text-justify w-2/3  mx-10" >
                                {services && services[0].attributes.Description}
                            </p>
                        </div>
                        <div className="relative ">
                            <p className="text-white text-justify pl-5 px-16" >{services && services[1].attributes.Description}</p>
                            <Lotiee animationData={Growing_Values2} className="h-[63%]  -ml-14" />
                        </div>
                    </div>
                </div>
            </div>


            <div className=" flex flex-col bg-custom-blue lg:hidden" style={{
                //border: '2px solid yellow',
            }}>
                <div className="" >
                    <div className="  bg-contain bg-no-repeat " style={{
                        backgroundImage: 'url("/Image/Growing_Mobile.png")',
                        //  backgroundImage: 'url("/Image/mobile.png")',
                        //  border: '2px solid red',
                    }}>

                        <div className="flex flex-col justify-between md:gap-20  gap-20">
                            <div className="text-white w-3/4 mx-auto  " style={{
                                // border: '2px solid red',
                            }}>

                                <Lotiee animationData={Growing_Values1} className=" w-3/5" />
                                <p className="text-white  text-justify text-xs md:text-lg sm:text-base md:w-3/4 w-full lg:px-5 px-5 md:my-6 my-1" >
                                    {services && services[0].attributes.Description}
                                </p>
                            </div>
                            <div className="text-white  w-3/4 mx-auto " style={{
                                // border: '2px solid yellow',
                            }}>
                                <p className="text-white  text-justify text-xs sm:text-base  md:text-lg md:w-3/4 w-full md:px-10 px-10" >{services && services[1].attributes.Description}</p>
                                <Lotiee animationData={Growing_Values2} className="w-3/4 md:mt-10 mt-0" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Growing_Values;




{/* <div className=" flex flex-col" style={{ border: '2px solid yellow', }}>
                    <div>
                        <div className=" w-1/3 h-1/2 bg-contain bg-no-repeat" style={{
                            backgroundImage: 'url("/Image/Growing_desktop.png")',
                            border: '2px solid red',
                        }}>
                            <div className="border-4 w-4/5" style={{ border: '2px solid green', }}>
                                <Lotiee animationData={Growing_Values1} className="w-1/2" />
                                <p className="text-white px-8 text-justify" >
                                    {services && services[0].attributes.Description}
                                </p>
                            </div>
                        </div>
                        <div className="w-1/3" style={{ border: '2px solid red' }}>
                            <p className="text-white px-5 text-justify" >{services && services[1].attributes.Description}</p>
                            <Lotiee animationData={Growing_Values2} className="w-1/2" />
                        </div>
                    </div>
                </div> */}

{/* <div className="  w-full mx-auto my-1" style={{
                            // border: '2px solid green',
                        }}>
                            <Lotiee animationData={Growing_Values1} className="border-4 mx-10" />
                            <p className="text-white  text-justify text-xs w-full px-12 py-5" >
                                {services && services[0].attributes.Description}
                            </p>
                        </div>
                        <div className="my-10 mx-auto" style={{
                            // border: '2px solid red'
                        }}>
                            <p className="text-white  text-justify text-xs px-14  py-5" >{services && services[1].attributes.Description}</p>
                            <Lotiee animationData={Growing_Values2} className=" border-4 mx-12" />
                        </div> */}
















































