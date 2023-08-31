"use client"
import React, { useState, useEffect } from 'react';
import Lotiee from 'lottie-react';
import Usp from '../animation/usp.json';

function Our_Usp() {

    const [services, setServices] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch('https://root-blogsite.onrender.com/api/our-usps', {
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
            <div className='bg-custom-blue  bs:py-8'>

                <div className='  ps-10 py-14 sm:ps-5 bs:ps-3  '>
                    {services && (
                        <p className="text-white text-4xl lg:text-3xl md:text-2xl sm:text-xl bs:text-xl">
                            {services && services[0].attributes.Name}
                        </p>
                    )}
                    <div className="  w-20  h-1 pt-3 lg:w-14 md:w-12  md:pt-2  sm:w-10 sm:pt-1   bs:pt-0 bs:w-9 ">
                        <div className=" bg-white w-20 h-1 rounded lg:w-14 md:w-12 sm:w-10 bs:w-9 "> </div>
                    </div>
                </div>



                <div className=' py-5 bs:py-0 '>
                    <div className='bg-[#0B2341] text-center justify-start items-center '>
                        <div className='grid grid-flow-col text-center justify-start items-center sm:grid-flow-row md:py-10 sm:pb-8 bs:grid-flow-row'>

                            <div className='text-white ms-8  lg:ms-5 md:ms:2 sm:pt-8 sm:ms-5   bs:pt-5 bs:ms-2' style={{
                                // border: '2px solid red'
                            }}>
                                <div className='grid grid-flow-row  ' style={{
                                    // border: '2px solid blue'
                                }}>
                                    <span className='bg-custom-blue rounded-2xl space-x-3 text-lg text-center my-2  h-9 w-[290px] md:w-[250px] md:text-base  sm:text-sm sm:w-[250px] bs:text-base bs:space-x-0 bs:h-8  bs:w-[260px]   bs:my-2  ' style={{ border: ' 2px solid black', }}> {services && services[0].attributes.Title1}</span>
                                    <span className='bg-custom-blue rounded-2xl space-x-3 text-lg text-center my-2  h-9 w-[400px]  md:w-[360px] md:text-base sm:text-sm sm:w-[330px] bs:text-base bs:space-x-0 bs:h-8 bs:w-[360px]  bs:my-1  ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title2}</span>
                                    <span className='bg-custom-blue rounded-2xl space-x-3 text-lg text-center my-2  h-9 w-[240px] md:w-[200px] md:text-base  sm:text-sm sm:w-[200px] bs:text-base bs:space-x-0 bs:h-8  bs:w-[240px]  bs:my-1  ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title3}</span>
                                    <span className='bg-custom-blue rounded-2xl space-x-3 text-lg text-center my-2  h-9 w-[270px] md:w-[250px]  md:text-base  sm:text-sm sm:w-[230px] bs:text-base bs:space-x-0  bs:h-8 bs:w-[270px]  bs:my-1 ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title4}</span>
                                    <span className='bg-custom-blue rounded-2xl space-x-3 text-lg text-center my-2  h-9 w-[280px] md:w-[260px] md:text-base sm:text-sm sm:w-[250px]  bs:text-base bs:space-x-0 bs:h-8 bs:w-[280px] bs:my-1  ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title5}</span>
                                    <span className='bg-custom-blue rounded-2xl space-x-3 text-lg text-center my-2  h-9 w-[540px] md:w-[370px]  md:text-base md:h-14  sm:text-sm  sm:w-[420px]  bs:text-base bs:space-x-0  bs:h-14 bs:w-[300px] bs:my-1' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title6}</span>
                                </div>

                            </div>
                            <div className=' text-center justify-start items-center relative top-6 ps-24  w-[481px] h-[410px] lg:pt-14 lg:w[200px] lg:h[360px]  lg:ps-1  
                              md:top-0  md:ps-0 md:w-72 md:h-72 sm:text-center sm:justify-start sm:items-center sm:top-1 sm:h-96 sm:w-96 sm:ms-14 bs:ps-0  bs:w-[370px] bs:h-[400px]'
                                style={{
                                    // border: '2px solid red'
                                }} >
                                <Lotiee animationData={Usp} className='text-center justify-start items-center w-96 h-96  lg:w-72 lg:h-72  md:w-72 md:h-72 
                                 sm:w-80 sm:h-80 sm:ps-0   bs:w-[370px] bs:h-[400px] '  style={{
                                        // border: '2px solid blue'
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Our_Usp



//left - [5864px]  w-[1258rem] h-[419rem] lg:w-[1100rem] lg:h-[400rem] md:w-[1000rem]  sm:w-[300rem]  bs:w-[400px] bs:h-[800px] style={{ border: '2px solid blue' }}

