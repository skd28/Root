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
            <div className="bg-custom-blue py-10 px-24 ps-10 ps-10 "
            >
                <div className="text-white text-4xl   text-4xl  text-2xl  text-2xl">
                    <h1 >{services && services[0].attributes.Name}</h1>
                </div>
                <div className="pt-3">
                    <img src={`/Image/Line 20.png`} alt="Image Description" />
                </div>
            </div>


            <div className=" flex flex-col flex flex-col flex flex-col">
                {/* Left Part */}
                <div className="bg-custom-blue w-[55%] h-[650px] float-left w-full h-[730px] w-full h-[600px] w-full h-[500px]" style={{
                    // width: "60%", height: "700px", float: "left",
                    // border: '2px solid blue',
                }}>
                    <div className="   " style={{
                        // border: '2px solid pink',
                    }} >
                        <div className="flex" style={{
                            //border: '2px solid green',
                        }}>
                            <div >
                                <div className="rotate-180 text-white text-3xl text-4xl text-2xl text-xl" style={{ writingMode: "vertical-rl", width: "40" }}>
                                    {services && services[0].attributes.Title}
                                </div>
                                <div className="w-5 h-5 pt-10   w-6 h-6  pt-7 w-3 h-3  pt-5 w-3 h-3  pt-5">
                                    <div className=" bg-white w-5 h-5 rounded w-6 h-6 w-3 h-3 w-3 h-3">  </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div  >
                                <div className=" relative mt-5 bg-cover h-[400px] w-[600px] w-[500px]  h-[500px]  mt-3 w-[400px]  h-[400px]  mt-2 w-[320px]  h-[350px] " style={{
                                    backgroundImage: 'url("/Image/Vector 5.png")',
                                    // border: '2px solid yellow',
                                    // backgroundSize: "cover", height: "440px", width: "663px"
                                }}>
                                    <div className="relative w-[70%] float-left w-[80%] w-[80%] " style={{
                                        // width: "70%",
                                        // float: 'left',
                                        // border: '2px solid green',
                                    }} >
                                        <div className="grid grid-flow-row  relative  ">
                                            <div className=" relative bottom-40 bottom-32 bottom-20 bottom-20">
                                                <Lotiee animationData={Growing_Values1} className='w-96 h-80 items-center h-80 w-80 w-96 h-96 w-56 h-56 w-40 h-40 ' />

                                            </div>
                                            <div>
                                                <p className="w-80 text-sm relative bottom-24 text-base bottom-20 bottom-5 w-64 bottom-5 w-52">
                                                    {services && <p className="text-white text-justify">{services[0].attributes.Description}</p>}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-[170px] relative w-[20%] float-right mt-40 float-right  w-[20%] mt-40 float-right  w-[20%]" style={{
                                        // width: "20%",
                                        // float: 'right',
                                        // border: '2px solid red',
                                    }}>
                                        <div className="grid grid-flow-col">
                                            <div className=" relative top-20 left-[30px]  top-40 left-5 top-[90px] left-5 top-[20px]">
                                                <p className="rotate-180 text-white text-3xl justify-end text-4xl text-2xl text-xl" style={{ writingMode: "vertical-rl", width: "40" }}>
                                                    {services && services[1].attributes.Title}
                                                </p>
                                            </div>
                                            <div className=" relative left-[64px] top-[27px] left-[50px] top-[95px] left-[44px] top-3 left-[34px] top-2" >
                                                <img src="/Image/Vector 4.png" alt="Image not show" className="w-[45px] w-[40px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Part */}
                <div className="bg-custom-blue pr-28 w-[45%] h-[650px] float-right w-full pr-10 h-[700px]  w-full pr-10 h-[600px]  w-full pr-10 h-[500px]" style={{
                    // width: "40%", height: "700px", float: "right",
                    // border: '4px solid red',
                }} >
                    {services && (<p className="text-white text-justify text-sm    mt-8 pr-20  ps-8   text-base    pr-52 ps-7   pr-36 ps-7 pr-20 ps-7">{services && services[1].attributes.Description}  </p>)}
                    <div className="mt-14  ">
                        <Lotiee animationData={Growing_Values2} className='w-96 h-96    w-80 lg-h-80  w-[450px]   h-[450px] w-80   h-96 w-96 h-80 ' />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Growing_Values;




















































