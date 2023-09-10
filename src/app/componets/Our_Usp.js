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

                <div className='  ps-10 py-14 ps-5 ps-3  '>
                    {services && (
                        <p className="text-white text-4xl text-3xl text-2xl text-xl text-xl">
                            {services && services[0].attributes.Name}
                        </p>
                    )}
                    <div className="  w-20  h-1 pt-3 w-14 w-12  pt-2  w-10 pt-1   pt-0 w-9 ">
                        <div className=" bg-white w-20 h-1 rounded w-14 w-12 w-10 w-9 "> </div>
                    </div>
                </div>



                <div className=' py-5 py-0 '>
                    <div className='bg-[#0B2341] text-center justify-start items-center '>
                        <div className='grid grid-flow-col text-center justify-start items-center grid-flow-row py-10 pb-8 grid-flow-row'>

                            <div className='text-white ms-8    pt-8    pt-5 ' style={{
                                // border: '2px solid red'
                            }}>
                                <div className='grid grid-flow-row  ' style={{
                                    // border: '2px solid blue'
                                }}>
                                    <span className='bg-custom-blue rounded-2xl space-x-3 text-lg text-center my-2  h-9 w-[290px] w-[250px] text-base  text-sm w-[250px] text-base space-x-0 h-8  w-[260px]   my-2  ' style={{ border: ' 2px solid black', }}> {services && services[0].attributes.Title1}</span>
                                    <span className='bg-custom-blue rounded-2xl space-x-3 text-lg text-center my-2  h-9 w-[400px]  w-[360px] text-base text-sm w-[330px] text-base space-x-0 h-8 w-[360px]  my-1  ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title2}</span>
                                    <span className='bg-custom-blue rounded-2xl space-x-3 text-lg text-center my-2  h-9 w-[240px] w-[200px] text-base  text-sm w-[200px] text-base space-x-0 h-8  w-[240px]  my-1  ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title3}</span>
                                    <span className='bg-custom-blue rounded-2xl space-x-3 text-lg text-center my-2  h-9 w-[270px] w-[250px]  text-base  text-sm w-[230px] text-base space-x-0  h-8 w-[270px]  my-1 ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title4}</span>
                                    <span className='bg-custom-blue rounded-2xl space-x-3 text-lg text-center my-2  h-9 w-[280px] w-[260px] text-base text-sm w-[250px]  text-base space-x-0 h-8 w-[280px] my-1  ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title5}</span>
                                    <span className='bg-custom-blue rounded-2xl space-x-3 text-lg text-center my-2  h-9 w-[540px] w-[370px]  text-base h-14  text-sm  w-[420px]  text-base space-x-0  h-14 w-[300px] my-1' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title6}</span>
                                </div>

                            </div>
                            <div className=' text-center justify-start items-center relative top-6 ps-24  w-[481px] h-[410px] pt-14 w[200px] h[360px]  ps-1
                              top-0  ps-0 w-72 h-72 text-center justify-start items-center top-1 h-96 w-96  ps-0  w-[370px] h-[400px]'
                                style={{
                                    // border: '2px solid red'
                                }} >
                                <Lotiee animationData={Usp} className='text-center justify-start items-center w-96 h-96  w-72 h-72  w-72 h-72
                                 w-80 h-80 ps-0   w-[370px] h-[400px] '  style={{
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



//left - [5864px]  w-[1258rem] h-[419rem] w-[1100rem] h-[400rem] w-[1000rem]  w-[300rem]  w-[400px] h-[800px] style={{ border: '2px solid blue' }}

