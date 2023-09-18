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
            <div className='bg-custom-blue  py-8'>

                <div className='px-10 py-5 sm:py-8'>
                    {services && (
                        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            {services && services[0].attributes.Name}
                        </p>
                    )}
                    <div className="w-[35%] h-1 pt-1 sm:w-[35%] ">
                        <div className=" bg-white w-[45%] h-1 roundeds sm:w-[35%]  "> </div>
                    </div>
                </div>




                <div className='bg-[#0B2341] text-center justify-start items-center xl:px-10 xl:py-10 lg:px-10 lg:py-10 md:px-5 md:py-10 sm:px-5 sm:py-10'>
                    <div className='grid grid-flow-row text-center justify-start items-center lg:grid-flow-col'>

                        <div className='text-white ' style={{
                            //  border: '2px solid red'
                        }}>
                            <div className='grid grid-flow-row w-full ' style={{
                                // border: '2px solid blue'
                            }}>
                                <span className='bg-custom-blue rounded-2xl  text-center  xl:text-xl xl:w-[55%] xl:my-2  lg:text-xl lg:w-[55%]
                                 md:w-[53%] lg:my-2  md:my-3 md:text-2xl sm:my-3 sm:text-xl sm:w-[55%] text-base w-[70%] my-3 mt-7'
                                    style={{ border: ' 2px solid black', }}> {services && services[0].attributes.Title1}</span>
                                <span className='bg-custom-blue rounded-2xl  text-center  xl:text-xl xl:w-[78%] xl:my-2  lg:text-xl lg:w-[78%]
                                 md:w-[74%]  lg:my-2  md:my-3 md:text-2xl sm:my-3 sm:text-xl sm:w-[76%] text-base my-3 w-full'
                                    style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title2}</span>
                                <span className='bg-custom-blue rounded-2xl  text-center xl:text-xl  xl:w-[46%] xl:my-2  lg:text-xl lg:w-[46%]
                                 md:w-[44%] lg:my-2 md:my-3 md:text-2xl sm:my-3 sm:text-xl sm:w-[46%] text-base my-3 w-[60%]'
                                    style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title3}</span>
                                <span className='bg-custom-blue rounded-2xl text-center  xl:text-xl xl:w-[53%] xl:my-2   lg:text-xl lg:w-[53%]
                                 md:w-[50%] lg:my-2 md:my-3 md:text-2xl sm:my-3 sm:text-xl sm:w-[53%] text-base my-3 w-[66%] '
                                    style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title4}</span>
                                <span className='bg-custom-blue rounded-2xl text-center  xl:text-xl xl:w-[55%] xl:my-2   lg:text-xl lg:w-[55%]
                                 md:w-[53%] lg:my-2 md:my-3 md:text-2xl sm:my-3 sm:text-xl sm:w-[56%] text-base my-3 w-[72%]'
                                    style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title5}</span>
                                <span className='bg-custom-blue rounded-2xl  text-center  xl:text-xl xl:w-[105%] xl:my-2  lg:text-xl  lg:w-[105%] lg:my-2
                                 md:w-[99%]   md:my-3 md:text-2xl sm:my-3 sm:text-xl  sm:w-full text-base my-3 w-full '
                                    style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title6}</span>
                            </div>

                        </div>
                        <div className=' xl:pl-28 lg:pl-28'
                            style={{
                                // border: '2px solid red'
                            }} >
                            <Lotiee animationData={Usp} className=' xl:h-2/3 xl:w-2/3  lg:w-2/3 lg:h-2/3 md:w-3/4 md:h-3/4 md:mx-auto sm:h-3/4 ' style={{
                                // border: '2px solid blue'
                            }} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Our_Usp



//left - [5864px]  w-[1258rem] h-[419rem] w-[1100rem] h-[400rem] w-[1000rem]  w-[300rem]  w-[400px] h-[800px] style={{ border: '2px solid blue' }}

