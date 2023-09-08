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
            <div className="bg-custom-blue py-10 px-24 sm:ps-10 bs:ps-10 "
            >
                <div className="text-white text-4xl   md:text-4xl  sm:text-2xl  bs:text-2xl">
                    <h1 >{services && services[0].attributes.Name}</h1>
                </div>
                <div className="pt-3">
                    <img src={`/Image/Line 20.png`} alt="Image Description" />
                </div>
            </div>


            <div className=" md:flex md:flex-col sm:flex sm:flex-col bs:flex bs:flex-col">
                {/* Left Part */}
                <div className="bg-custom-blue w-[55%] h-[650px] float-left md:w-full md:h-[730px] sm:w-full sm:h-[600px] bs:w-full bs:h-[500px]" style={{
                    // width: "60%", height: "700px", float: "left",
                    // border: '2px solid blue',
                }}>
                    <div className="ms-24 sm:ms-10  bs:ms-4" style={{
                        // border: '2px solid pink',
                    }} >
                        <div className="flex" style={{
                            //border: '2px solid green',
                        }}>
                            <div >
                                <div className="rotate-180 text-white text-3xl md:text-4xl sm:text-2xl bs:text-xl" style={{ writingMode: "vertical-rl", width: "40" }}>
                                    {services && services[0].attributes.Title}
                                </div>
                                <div className="w-5 h-5 pt-10 ms-3  md:w-6 md:h-6 md:ms-2 md:pt-7 sm:w-3 sm:h-3 sm:ms-2 sm:pt-5 bs:w-3 bs:h-3 bs:ms-2 bs:pt-5">
                                    <div className=" bg-white w-5 h-5 rounded md:w-6 md:h-6 sm:w-3 sm:h-3 bs:w-3 bs:h-3">  </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div  >
                                <div className="ms-5 relative mt-5 bg-cover h-[400px] w-[600px] lg:w-[500px]  md:h-[500px] sm:ms-3 sm:mt-3 sm:w-[400px]  sm:h-[400px] bs:ms-3 bs:mt-2 bs:w-[320px]  bs:h-[350px] " style={{
                                    backgroundImage: 'url("/Image/Vector 5.png")',
                                    // border: '2px solid yellow',
                                    // backgroundSize: "cover", height: "440px", width: "663px"
                                }}>
                                    <div className="relative w-[70%] float-left sm:w-[80%] bs:w-[80%] " style={{
                                        // width: "70%",
                                        // float: 'left',
                                        // border: '2px solid green',
                                    }} >
                                        <div className="grid grid-flow-row ms-10 relative sm:ms-5 bs:ms-5">
                                            <div className=" relative bottom-40 md:bottom-32 sm:bottom-20 bs:bottom-20">
                                                <Lotiee animationData={Growing_Values1} className='w-96 h-80 items-center lg:h-80 lg:w-80 md:w-96 md:h-96 sm:w-56 sm:h-56 bs:w-40 bs:h-40 ' />

                                            </div>
                                            <div>
                                                <p className="w-80 text-sm relative bottom-24 md:text-base md:bottom-20 sm:bottom-5 sm:w-64 bs:bottom-5 bs:w-52">
                                                    {services && <p className="text-white text-justify">{services[0].attributes.Description}</p>}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-[170px] relative w-[20%] float-right sm:mt-40 sm:float-right  sm:w-[20%] bs:mt-40 bs:float-right  bs:w-[20%]" style={{
                                        // width: "20%",
                                        // float: 'right',
                                        // border: '2px solid red',
                                    }}>
                                        <div className="grid grid-flow-col">
                                            <div className=" relative top-20 left-[30px]  md:top-40 sm:left-5 sm:top-[90px] bs:left-5 bs:top-[20px]">
                                                <p className="rotate-180 text-white text-3xl justify-end md:text-4xl sm:text-2xl bs:text-xl" style={{ writingMode: "vertical-rl", width: "40" }}>
                                                    {services && services[1].attributes.Title}
                                                </p>
                                            </div>
                                            <div className=" relative left-[64px] lg:top-[27px] lg:left-[50px] md:top-[95px] sm:left-[44px] sm:top-3 bs:left-[34px] bs:top-2" >
                                                <img src="/Image/Vector 4.png" alt="Image not show" className="w-[45px] lg:w-[40px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Part */}
                <div className="bg-custom-blue pr-28 w-[45%] h-[650px] float-right md:w-full md:pr-10 md:h-[700px]  sm:w-full sm:pr-10 sm:h-[600px]  bs:w-full bs:pr-10 bs:h-[500px]" style={{
                    // width: "40%", height: "700px", float: "right",
                    // border: '4px solid red',
                }} >
                    {services && (<p className="text-white text-justify text-sm  ms-1  mt-8 pr-20  ps-8 lg:ms-6  md:text-base  md:ms-28  md:pr-52 md:ps-7 sm:ms-10  sm:pr-36 sm:ps-7 bs:pr-20 bs:ps-7">{services && services[1].attributes.Description}  </p>)}
                    <div className="mt-14  ">
                        <Lotiee animationData={Growing_Values2} className='w-96 h-96 ms-1  lg:ms-6 lg:w-80 lg-h-80  md:w-[450px] md:ms-28  md:h-[450px] sm:w-80 sm:ms-10  sm:h-96 bs:w-96 bs:h-80 ' />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Growing_Values;




















































