



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
                    "https://root-blogsite.onrender.com/api/growing-with-value/"
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
            <div className="bg-custom-blue py-10 px-24 ">
                <div className="text-white text-4xl ">
                    <h1 >{services && services[0].attributes.Name}</h1>
                </div>
                <div className="pt-3">
                    <img src={`/Image/Line 20.png`} alt="Image Description" />
                </div>
            </div>

            <div>
                {/* Left Part */}
                <div className="bg-custom-blue" style={{ width: "60%", height: "800px", float: "left" }}>
                    <div className="ms-24">
                        <div className=" flex" >
                            <div >
                                <div className="rotate-180 text-white text-3xl" style={{ writingMode: "vertical-rl", width: "40" }}>
                                    {services && services[0].attributes.Title}
                                </div>
                                <div className="w-5 h-5 pt-14 ms-3">
                                    <div className=" bg-white w-5 h-5 rounded">  </div>
                                </div>
                            </div>
                        </div>


                        <div >
                            <div>
                                <div className="ms-5  relative" style={{ backgroundImage: 'url("/Image/Vector 5.png")', backgroundSize: "cover", height: "430px", width: "640px" }}>

                                    <div className="relative" style={{
                                        width: "70%",
                                        float: 'left',
                                        // border: '2px solid red',
                                    }}
                                    >
                                        <div className="grid grid-flow-row ms-10 relative">
                                            <div className=" relative bottom-40">
                                                {services && (
                                                    <img src={services[0].attributes.GIFlink} alt="Image Description" className="items-center w-96 h-96" />
                                                )}
                                            </div>
                                            <div>
                                                <p className="w-96 text-sm relative bottom-24">
                                                    {services && <p className="text-white text-justify">{services[0].attributes.Description}</p>}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-52 relative" style={{
                                        width: "20%",
                                        float: 'right',
                                        //  border: '2px solid red',
                                    }}>
                                        <div className="grid grid-flow-col relative ">
                                            <div className=" relative top-20 left-16">
                                                <p className="rotate-180 text-white text-3xl justify-end" style={{ writingMode: "vertical-rl", width: "40" }}>
                                                    {services && services[1].attributes.Title}
                                                </p>
                                            </div>
                                            <div className="relative left-16 top-2" >
                                                <img src="/Image/Vector 4.png" alt="Image not show" style={{
                                                    width: "700",
                                                }} />
                                            </div>
                                        </div>

                                    </div>

                                    {/* <div className="ms-10  pt-60" >
                                        <div style={{ width: "70%", height: "150px", float: "left" }}>
                                            <p className="w-96 text-sm">
                                                {services && <p className="text-white text-justify ms-5">{services[0].attributes.Description}</p>}
                                            </p>
                                        </div>
                                    </div> */}



                                    {/* <div className="mt-5 ms-8">
                                        <div className="bg-custom-blue" style={{ width: "10%", height: "100px", float: "right" }}>
                                            <p className="rotate-180 text-white text-3xl justify-end" style={{ writingMode: "vertical-rl", width: "40" }}>
                                                {services && services[1].attributes.Title}
                                            </p>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                {/* Right Part */}
                <div >
                    <div className="bg-custom-blue" style={{ width: "40%", height: "800px", float: "right", }} >
                        {services && (<p className="text-white text-justify  text-sm mt-8  pr-20">{services && services[1].attributes.Description}  </p>)}

                        <p className="mt-14 ms-2" >
                            {services && (<img src={services[1].attributes.GIFlink} alt="Image Description" className="items-center w-96 h-96 " />)}
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Growing_Values;























{/* <>
    <div className="bg-custom-blue py-10 px-24 ">
        <div className="text-white text-4xl ">
            <h1 >{services && services[0].attributes.Name}</h1>
        </div>
        <div className="pt-3">
            <img src={`/Image/Line 20.png`} alt="Image Description" />
        </div>
    </div>

    <div>
        {/* Left Part */}
// <div className="bg-custom-blue" style={{ width: "60%", height: "800px", float: "left" }}>
//     <div className="ms-24">
//         <div className=" flex" >
//             <div >
//                 <div className="rotate-180 text-white text-3xl" style={{ writingMode: "vertical-rl", width: "40" }}>
//                     {services && services[0].attributes.Title}
//                 </div>
//                 <div className="w-5 h-5 pt-9 ms-3">
//                     <div className=" bg-white w-5 h-5 rounded">  </div>
//                 </div>
//             </div>
//             <div className="ps-20 relative top-10 ">
//                 {services && (<div style={{ position: "relative", top: '10px', }}>
//                     <img src={services[0].attributes.GIFlink} alt="Image Description" className="items-center w-80 h-60" />
//                 </div>
//                 )}
//             </div>

//         </div>


//         <div className="flex" >
//             <div>
//                 <div className="ms-5 -mt-20" style={{ backgroundImage: 'url("/Image/Vector 5.png")', backgroundSize: "cover", height: "430px", width: "640px" }}>

//                     <div className="ms-10  pt-60" >
//                         <div style={{ width: "70%", height: "150px", float: "left" }}>
//                             <p className="w-96 text-sm">
//                                 {services && <p className="text-white text-justify ms-5">{services[0].attributes.Description}</p>}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="mt-5 ms-8">
//                         <div className="bg-custom-blue" style={{ width: "10%", height: "100px", float: "right" }}>
//                             <p className="rotate-180 text-white text-3xl justify-end" style={{ writingMode: "vertical-rl", width: "40" }}>
//                                 {services && services[1].attributes.Title}
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
{/* Right Part */ }
    //     <div >
    //         <div className="bg-custom-blue" style={{ width: "40%", height: "800px", float: "right", }} >
    //             {services && (<p className="text-white text-justify  text-sm mt-8 px-10 pr-20">{services && services[1].attributes.Description}  </p>)}

    //             <p className="mt-28 ms-7" >
    //                 {services && (<img src={services[1].attributes.GIFlink} alt="Image Description" className="items-center w-80 h-80 " />)}
    //             </p>
    //         </div>
    //     </div>
    // </div>

//</> */}





















