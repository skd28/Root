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
            <div className="bg-custom-blue">
                <div className="px-16 py-5">
                    <h1 className="text-white text-4xl ">Growing With Values</h1>
                    <div className="h-1 w-20 bg-white mt-2 rounded"></div>
                </div>

                <div className="flex flex-row  mx-16" style={{
                    //  border: '2px solid green'
                }}>
                    <div className="bg-no-repeat bg-contain  " style={{
                        backgroundImage: 'url("/Image/Growing_desktop.png")',
                        // border: '2px solid black',
                    }}>
                        <Lotiee animationData={Growing_Values1} className="w-1/2  mx-auto " />
                        <p className="text-white  text-justify w-1/2  mx-auto" >
                            {services && services[0].attributes.Description}
                        </p>
                    </div>
                    <div className="relative ">
                        <p className="text-white text-justify pl-5 px-16" >{services && services[1].attributes.Description}</p>
                        <Lotiee animationData={Growing_Values2} className="h-[63%]  -ml-14" />
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
















































