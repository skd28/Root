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
            <div className='bg-custom-blue '>

                <div className='  ps-10 py-14'>
                    {services && (
                        <p className="text-white text-4xl lg:text-3xl md:text-2xl sm:text-xl bs:text-lg">
                            {services && services[0].attributes.Name}
                        </p>
                    )}
                    <div className="  w-20 lg:w-14 md:w-12 sm:w-10 h-1 pt-3  sm:pt-1  md:pt-2 ">
                        <div className=" bg-white w-20 lg:w-14 md:w-12 sm:w-10 h-1 rounded"> </div>
                    </div>
                </div>



                <div className=' py-5 bs:py-0 '>
                    <div className='bg-[#0B2341] xl:w-[1258px] xl:h-[419px] left-[5864px] text-center justify-start items-center lg:w-[1150px] lg:h-[400px] md:w-[1000px]  sm:w-[300px]  bs:w-[400px] bs:h-[800px]  '>
                        <div className='grid grid-flow-col text-center justify-start items-center bs:grid-flow-row '>

                            <div className='text-white ms-16 bs:ms-3 sm:ms-5 bs:pt-5'>
                                <div className='grid grid-flow-row'>
                                    <span className='bg-custom-blue rounded-2xl h-9 w-[290px] bs:h-8 bs:w-[250px]  text-center my-2 bs:my-2 text-lg space-x-3 bs:space-x-0  bs:text-base' style={{ border: ' 2px solid black', }}> {services && services[0].attributes.Title1}</span>
                                    <span className='bg-custom-blue rounded-2xl h-9 w-[400px] bs:h-14 bs:w-[330px]  text-center  my-2  bs:my-1 space-x-3 text-lg  bs:text-base bs:space-x-0 ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title2}</span>
                                    <span className='bg-custom-blue rounded-2xl h-9 w-[240px] bs:h-8 bs:w-[240px]  text-center my-2 bs:my-1 space-x-3 text-lg  bs:text-base  bs:space-x-0 ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title3}</span>
                                    <span className='bg-custom-blue rounded-2xl h-9 w-[270px] bs:h-8 bs:w-[270px]  text-center  my-2 bs:my-1 space-x-3 text-lg  bs:text-base bs:space-x-0 ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title4}</span>
                                    <span className='bg-custom-blue rounded-2xl h-9 w-[280px] bs:h-8 bs:w-[280px]  text-center my-2 bs:my-1 space-x-3 text-lg  bs:text-base bs:space-x-0 ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title5}</span>
                                    <span className='bg-custom-blue rounded-2xl h-9 w-[540px] bs:h-14 bs:w-[300px]  text-center  my-2 bs:my-1 space-x-3 text-lg bs:text-base bs:space-x-0  ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title6}</span>
                                </div>

                            </div>

                            <div className=' text-center justify-start items-center relative ' >
                                <div className='w-[481px]  h-[410px] text-center justify-start items-center top-6 ps-24 pt-5  lg:w[450px] lg:h[410px]  md:w[420px] md:h[400px] md:w[380px] md:h[370px] lg:ps-20  md:ps-16 sm:ps-14 bs:ps-10 bs:w[370px] bs:h[300px]' >
                                    <Lotiee animationData={Usp} className='text-center justify-start items-center w-96 h-96 lg:w-80 lg:h-80 md:w-72 md:h-72 sm:w-60 sm:h-60' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Our_Usp

