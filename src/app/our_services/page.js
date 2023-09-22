"use client"
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation'
// import { url } from 'inspector';
import Lotiee from 'lottie-react';
import open_lock from './open_lock.json';
function Our_Service() {

    const [service, setService] = useState([]);
    const router = useRouter();



    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch('https://root-blogsite.onrender.com/api/we-offer-a-wide-variety-of-security-audit-services', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data1 = await response.json();
                console.log(data1);
                setService(data1.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>

            {/* <div className='bg-black ' style={{
                //  border: '2px solid yellow',
            }}>
                <div className='bg-black text-white' style={{
                    width: "20%", float: "left",
                    //  border: '2px solid red',
                }}>
                    <img src='https://res.cloudinary.com/dgpftd5nf/image/upload/v1691838114/root_logo_f630515d1d.png' alt="Image Description" className=' my-5 mx-10' />

                    <p className='text-4xl text-white mt-[485px]  my-[89px] left-12  relative' style={{
                        //  border: '2px solid blue',
                    }}>
                        {service.length > 0 && service[0].attributes.Title}
                        <span className='text-4xl font-bold'>{'--->'}</span>
                    </p>
                </div>
                <div className='h-1/2 ' style={{
                    width: "80%", float: "right",
                    border: '2px solid blue',
                }}>
                    <img src='https://res.cloudinary.com/dgpftd5nf/image/upload/v1692249473/Frame_62_633b5168e0.png' alt="Image Description" className=''
                        style={{
                            // border: '2px solid blue',
                        }}
                    />
                </div>
            </div> */}

            <div className='flex flex-row bg-black'>
                <div className=' w-1/4 '>
                    <img src='https://res.cloudinary.com/dgpftd5nf/image/upload/v1691838114/root_logo_f630515d1d.png' alt="Image Description" className=' my-10 mx-20 ' />

                    <p className='text-4xl text-white  mt-[380px] relative left-20' style={{
                        //  border: '2px solid blue',
                    }}>
                        {service.length > 0 && service[0].attributes.Title}
                        <span className='text-4xl font-bold'>{'--->'}</span>
                    </p>
                </div>
                <div>
                    <img src='https://res.cloudinary.com/dgpftd5nf/image/upload/v1692249473/Frame_62_633b5168e0.png' alt="Image Description" className='w-full h-full'
                        style={{
                            // border: '2px solid blue',
                        }}
                    />
                </div>
            </div>
            <div className='bg-black relative '>
                <div className=' bg-no-repeat relative right-[400px] bg-cover ' style={{
                    backgroundImage: 'url("/Image/main.gif")',

                }}>
                    <div className='flex flex-col items-center justify-center h-full '>
                        <div className='  '>
                            <div className='rounded-full bg-[#00A2D0] w-3 h-3'></div>
                            {service && <span className='text-white' >{service.length > 0 && service[0].attributes.subtitle}</span>}
                        </div>
                        <div className=''>
                            <div className='rounded-full bg-[#00A2D0] w-3 h-3 '></div>
                            {service && <span className='text-white' >{service.length > 0 && service[1].attributes.subtitle}</span>}
                        </div>
                        <div className=''>
                            <div className='rounded-full bg-[#00A2D0] w-3 h-3 '></div>
                            {service && <span className='text-white' >{service.length > 0 && service[2].attributes.subtitle}</span>}
                        </div>
                        <div className=''>
                            <div className='rounded-full bg-[#645AB2] w-3 h-3'></div>
                            {service && <span className='text-white' >{service.length > 0 && service[3].attributes.subtitle}</span>}
                        </div>
                        <div className=''>
                            <div className='rounded-full bg-[#0082FF] w-3 h-3 '></div>
                            {service && <span className='text-white' >{service.length > 0 && service[4].attributes.subtitle}</span>}
                        </div>
                        <div className=''>
                            <div className='rounded-full bg-[#0DF7F9] w-5 h-5'></div>
                            {service && <span className='text-white' >{service.length > 0 && service[5].attributes.subtitle}</span>}
                        </div>
                        <Lotiee animationData={open_lock} className='w-1/4 h-1/4 border-4 my-20 '></Lotiee>
                        <div className='  '>
                            <div className='rounded-full bg-[#00A2D0] w-3 h-3'></div>
                            {service && <span className='text-white' >{service.length > 0 && service[6].attributes.subtitle}</span>}
                        </div>
                        <div className='  '>
                            <div className='rounded-full bg-[#00A2D0] w-3 h-3'></div>
                            {service && <span className='text-white' >{service.length > 0 && service[7].attributes.subtitle}</span>}
                        </div>
                        <div className='  '>
                            <div className='rounded-full bg-[#00A2D0] w-3 h-3'></div>
                            {service && <span className='text-white' >{service.length > 0 && service[8].attributes.subtitle}</span>}
                        </div>
                        <div className='  '>
                            <div className='rounded-full bg-[#00A2D0] w-3 h-3'></div>
                            {service && <span className='text-white' >{service.length > 0 && service[9].attributes.subtitle}</span>}
                        </div>
                        <div className='  '>
                            <div className='rounded-full bg-[#00A2D0] w-3 h-3'></div>
                            {service && <span className='text-white' >{service.length > 0 && service[10].attributes.subtitle}</span>}
                        </div>
                        <div className='  '>
                            <div className='rounded-full bg-[#00A2D0] w-3 h-3'></div>
                            {service && <span className='text-white' >{service.length > 0 && service[11].attributes.subtitle}</span>}
                        </div>
                        <div className='  '>
                            <div className='rounded-full bg-[#00A2D0] w-3 h-3'></div>
                            {service && <span className='text-white' >{service.length > 0 && service[12].attributes.subtitle}</span>}
                        </div>
                        <div className='  '>
                            <div className='rounded-full bg-[#BC65AE] w-3 h-3'></div>
                            {service && <span className='text-white' >{service.length > 0 && service[13].attributes.subtitle}</span>}
                        </div>
                        <div className='  '>
                            <div className='rounded-full bg-[#27DEBF] w-3 h-3'></div>
                            {service && <span className='text-white' >{service.length > 0 && service[14].attributes.subtitle}</span>}
                        </div>
                    </div >
                </div>


            </div>






        </>
    )
}

export default Our_Service







// < span > {< img src = {`/Image/Line 20.png`} alt = "Image Description" />}</ >   	https://res.cloudinary.com/dgpftd5nf/image/upload/v1691838114/root_logo_f630515d1d.png
// <span>{'>'}</span>   	https://res.cloudinary.com/dgpftd5nf/image/upload/v1692249473/Frame_62_633b5168e0.png