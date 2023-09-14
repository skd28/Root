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
                <div className="px-5 py-5">
                    <h1 className="text-white text-xl ">Growing With Values</h1>
                    <div className="h-1 w-14 bg-white pt-1"></div>
                </div>

                <div className=" w-full h-full bg-cotain bg-no-repeat mx-auto" style={{
                    backgroundImage: 'url("/Image/Growing_Mobile.png")',
                    border: '2px solid red',
                }}>
                    <div className="border-4 w-4/5 mx-auto " style={{ border: '2px solid green', }}>
                        <Lotiee animationData={Growing_Values1} className="w-1/2" />
                        <p className="text-white px-8 text-justify" >
                            {services && services[0].attributes.Description}
                        </p>
                    </div>
                    <div className="w-4/5 mx-auto" style={{ border: '2px solid red' }}>
                        <p className="text-white px-5 text-justify" >{services && services[1].attributes.Description}</p>
                        <Lotiee animationData={Growing_Values2} className="w-1/2" />

                    </div>


                </div>

            </div>
        </>
    );
}

export default Growing_Values;




















































