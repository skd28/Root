"use client"
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation'

function Our_Service() {

    const [service, setService] = useState([]);
    const router = useRouter();
    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch('https://root-blogsite.onrender.com/api/we-offer-a-wide-variety-of-security-audit-services');
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

            <div className='bg-black ' style={{
                // border: '2px solid red',
            }}>
                <div className='bg-black text-white w-[500px] h-[600px]  relative ' style={{
                    width: "20%", float: "left",
                    // border: '2px solid blue',
                }}>

                    <div className='ms-16 mt-10'>
                        <img src={service.length > 0 && service[0].attributes.Rootlogolink} alt="Image Description" />
                    </div>

                    <div className=' relative left-28 mt-80 h-52 w-80  ' style={{// border: '2px solid blue',
                    }}>
                        <p className='text-4xl text-white space-x-10' style={{
                            // border: '2px solid blue',
                        }}>
                            {service.length > 0 && service[0].attributes.Title}
                        </p>
                        <span>{<img src={`/Image/Line 20.png`} alt="Image Description" />}</span>
                        <span>{'>'}</span>
                    </div>

                </div>
                <div style={{
                    width: "80%", float: "right",
                    // border: '2px solid blue',
                }}>
                    <div className=''

                    >
                        {service.length > 0 && service[0].attributes.SecurityAuditServicesImgLink && (
                            <img src={service[0].attributes.SecurityAuditServicesImgLink} alt="Image Description" className=' w-[1100px] h-[600px]'
                                style={{
                                    // border: '2px solid blue',
                                }} />)
                        }

                    </div>
                </div>
            </div>

            <div>
                {service.length > 0 && service[0].attributes.MiddleGifLink && (
                    <img src={service[0].attributes.MiddleGifLink} alt="Image Description" className=' w-[1100px] h-[600px]'
                        style={{
                            // border: '2px solid blue',
                        }} />)
                }
            </div>




        </>
    )
}

export default Our_Service







