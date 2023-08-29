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
            <div className=' bg-custom-blue'>
                <div className=' bg-custom-blue  ps-10 py-14 '>
                    {services && (
                        <p className="text-white text-4xl">
                            {services && services[0].attributes.Name}
                        </p>
                    )}
                    <div className="w-16 h-1 pt-3">
                        <div className=" bg-white w-16 h-1 rounded">
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-custom-blue py-5'>
                <div className='bg-[#0B2341] w-[1258px]  h-[419px] left-[5864px] text-center justify-start items-center '>
                    <div className='grid grid-flow-col text-center justify-start items-center '>

                        <div className='text-white ms-16'>
                            <div className='grid grid-flow-row'>
                                <span className='bg-custom-blue rounded-2xl h-9 w-[290px] text-center my-2 text-lg space-x-3 ' style={{ border: ' 2px solid black', }}> {services && services[0].attributes.Title1}</span>
                                <span className='bg-custom-blue rounded-2xl h-9 w-[400px] text-center  my-2 space-x-3 text-lg' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title2}</span>
                                <span className='bg-custom-blue rounded-2xl h-9 w-[240px] text-center my-2 space-x-3 text-lg ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title3}</span>
                                <span className='bg-custom-blue rounded-2xl h-9 w-[270px] text-center  my-2 space-x-3 text-lg ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title4}</span>
                                <span className='bg-custom-blue rounded-2xl h-9 w-[280px] text-center my-2 space-x-3 text-lg ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title5}</span>
                                <span className='bg-custom-blue rounded-2xl h-9 w-[540px] text-center  my-2 space-x-3 text-lg ' style={{ border: ' 2px solid black', }}>  {services && services[0].attributes.Title6}</span>
                            </div>

                        </div>

                        <div className=' text-center justify-start items-center relative ' style={{
                            // border: ' 2px solid black',
                        }}>

                            <div className='w-[481px]  h-[410px] text-center justify-start items-center top-6 ps-24 pt-5' style={{
                                // border: ' 2px solid black',
                            }} >
                                <Lotiee animationData={Usp} className='text-center justify-start items-center w-96 h-96  ' />
                                {/* {services && (
                                    <img src={services[0].attributes.GIFlink} alt="Image Description" className='text-center justify-start items-center w-80 h-80 '
                                    />
                                )} */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Our_Usp













// width: 1280px
// height: 419px
// top: 5864px
