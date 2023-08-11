"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Growing_Values() {
    const [services, setServices] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // setServices(data1.data[0].attributes);
            try {
                const response = await fetch(
                    "https://root-blogsite.onrender.com/api/growing-with-values"
                );
                const data1 = await response.json();
                console.log(data1);
                setServices(data1.data);
                // console.log(data1.data.attributes)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="bg-custom-blue py-16 px-24 ">
                <div className="text-white text-4xl ">
                    <h1 className="">Growing With Values</h1>
                </div>
                <div className="pt-3">
                    <img src={`/Image/Line 20.png`} alt="Image Description" />
                </div>
            </div>

            <div>
                {/* First */}
                <div
                    className="bg-custom-blue"
                    style={{
                        border: "2px solid black",
                        width: "60%",
                        height: "800px",
                        float: "left",
                    }}
                >
                    <div className="ms-24">


                        <div
                            className="ms-5"
                            style={{
                                backgroundImage: 'url("/Image/Vector 5.png")',
                                border: '2px red solid',
                                backgroundSize: "cover",
                                height: "800px",
                                width: "630px",
                            }}

                        >

                            <div className=" flex" style={{ border: '2px solid red' }}>
                                <div className=" flex flex-col">
                                    <div
                                        className="rotate-180 text-white text-3xl "
                                        style={{
                                            writingMode: "vertical-rl",
                                            width: " 40",
                                            // border: '2px solid red',
                                        }}
                                    >
                                        {services && services[0].attributes.title}
                                    </div>
                                    <p className=" w-5 h-5 pt-24 ms-3">
                                        <input type="radio" className="w-5 h-5 pb-10 " />
                                    </p>
                                </div>
                                <p className="ms-10">
                                    {services && (
                                        <img
                                            src={services[0].attributes.gifUrl}
                                            alt="Image Description"
                                            className="items-center w-60 h-60 "
                                        />
                                    )}
                                </p>

                            </div>


                            <div className="ms-10 mt-16">
                                <div
                                    className="bg-custom-blue   "
                                    style={{
                                        border: '2px solid black',
                                        width: "70%",
                                        height: "150px",
                                        float: "left",
                                    }}
                                >
                                    <p className="w-96">
                                        {services && (
                                            <p className="text-white   text-justify ms-5">
                                                {" "}
                                                {services && services[0].attributes.content}
                                            </p>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-20">
                                <div
                                    className="bg-custom-blue"
                                    style={{
                                        border: '2px solid black',
                                        width: "10%",
                                        height: "100px",
                                        float: "right",
                                    }}
                                >
                                    <p
                                        className="rotate-180 text-white text-3xl justify-end
                                 "
                                        style={{
                                            writingMode: "vertical-rl",
                                            width: " 40",
                                            // border: '2px solid red',
                                        }}
                                    >
                                        {services && services[1].attributes.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second */}
                <div className="">
                    <div
                        className="bg-custom-blue"
                        style={{
                            border: "2px solid blue",
                            width: "40%",
                            height: "800px",
                            float: "right",
                        }}
                    >
                        {services && (
                            <p className="text-white text-justify px-5 mt-5">
                                {services && services[1].attributes.content}
                            </p>
                        )}

                        <p className="mt-48 ms-7">
                            {services && (
                                <img src={services[1].attributes.gifUrl} alt="Image Description"
                                    className="items-center w-96 h-96 " />
                            )}
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Growing_Values;

