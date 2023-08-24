"use client"
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation'

function Audit_Service() {
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
            <div className='bg-[#164179] py-5 pb-8'>

                <div className="text-white text-4xl ps-10 ">
                    {service.length > 0 && (
                        <p className="text-white text-4xl">
                            {service[0].attributes.Name}
                        </p>
                    )}
                </div>
                <div className="w-20 h-1 pt-3 ps-10">
                    <div className=" bg-white w-20 h-1 rounded">
                    </div>

                </div>
            </div>

            <div className=' bg-[#0B2341] py-10 pb-5s' style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', }} >
                {service.map((service) => (
                    <div key={service.id} className='w-96 text-white text-center items-start'
                        style={{
                            // border: '2px solid blue',
                        }}
                    >
                        <div className='h-20  px-16 w-96' style={{
                            //  border: '2px solid red',
                        }}>
                            <span className=' justify-start text-base   text-center ' style={{
                                // border: '2px solid red',
                            }}
                            >{service.attributes.subtitle}</span>
                        </div>

                        <div className='text-justify text-xs  ps-6 pb-8 space-x-10 '
                            style={{
                                //  border: '2px solid red',
                            }}>
                            <p className='w-80'>{service.attributes.Description}</p>
                        </div>

                    </div>
                ))}
                {/* <div className='text-white text-right mb-10 bg-[#164179] rounded  mt-10'

                >
                    <button className=' p-2 text-xs cursor-pointer' onClick={() => router.push('our_services')}>KNOW MORE</button>

                </div> */}
            </div>
            <div className='pb-14 text-white bg-[#0B2341] text-center '>
                <button className=' p-2 text-xs cursor-pointer bg-[#164179] ' onClick={() => router.push('our_services')}>KNOW MORE</button>
            </div>

            <div className=' bg-custom-blue w-full h-10' style={{
                // border: '2px solid blue',
            }}>
            </div>

        </>
    );
}

export default Audit_Service;








