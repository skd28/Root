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
            <div className="bg-custom-blue py-10 px-24 "
            >
                <div className="text-white text-4xl ">
                    <h1 >{services && services[0].attributes.Name}</h1>
                </div>
                <div className="pt-3">
                    <img src={`/Image/Line 20.png`} alt="Image Description" />
                </div>
            </div>


            <div className="">
                {/* Left Part */}
                <div className="bg-custom-blue " style={{
                    width: "60%", height: "700px", float: "left",
                }}>
                    <div className="ms-24" >
                        <div className=" flex" >
                            <div >
                                <div className="rotate-180 text-white text-3xl" style={{ writingMode: "vertical-rl", width: "40" }}>
                                    {services && services[0].attributes.Title}
                                </div>
                                <div className="w-5 h-5 pt-10 ms-3">
                                    <div className=" bg-white w-5 h-5 rounded">  </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div>
                                <div className="ms-5  relative" style={{ backgroundImage: 'url("/Image/Vector 5.png")', backgroundSize: "cover", height: "440px", width: "663px" }}>
                                    <div className="relative" style={{
                                        width: "70%",
                                        float: 'left',
                                    }} >
                                        <div className="grid grid-flow-row ms-10 relative">
                                            <div className=" relative bottom-40">
                                                <Lotiee animationData={Growing_Values1} className='w-96 h-96 items-center ' />

                                            </div>
                                            <div>
                                                <p className="w-80 text-sm relative bottom-24">
                                                    {services && <p className="text-white text-justify">{services[0].attributes.Description}</p>}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-48 relative" style={{
                                        width: "20%",
                                        float: 'right',
                                    }}>
                                        <div className="grid grid-flow-col">
                                            <div className=" relative top-20 left-16">
                                                <p className="rotate-180 text-white text-3xl justify-end" style={{ writingMode: "vertical-rl", width: "40" }}>
                                                    {services && services[1].attributes.Title}
                                                </p>
                                            </div>
                                            <div className=" relative left-[70px]" >
                                                <img src="/Image/Vector 4.png" alt="Image not show" className="w-[49px]" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Part */}
                <div className="bg-custom-blue pr-28  " style={{
                    width: "40%", height: "700px", float: "right",
                }} >
                    {services && (<p className="text-white text-justify  text-sm mt-8 pr-10 ps-10">{services && services[1].attributes.Description}  </p>)}
                    <div className="mt-14 ">
                        <Lotiee animationData={Growing_Values2} className='w-96 h-96' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Growing_Values;




{/* {services && (
                                                <img src={services[0].attributes.GIFlink} alt="Image Description" className="items-center w-96 h-96" />
                                            )} */}









































