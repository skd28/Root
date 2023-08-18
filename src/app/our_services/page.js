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
                border: '2px solid red',
            }}>
                <div className='bg-black text-white w-[500px] h-[600px]  ' style={{
                    width: "20%",
                    // height: "800px",
                    float: "left",
                    // border: '2px solid blue',
                }}>

                    <div className='ms-16 mt-10'>
                        <img src={service.length > 0 && service[0].attributes.Rootlogolink} alt="Image Description" />
                    </div>

                    <div className=' -mr-48 ' style={{
                        border: '2px solid blue',
                    }}>
                        <p className='text-4xl text-white' style={{
                            border: '2px solid blue',
                        }}>
                            {service.length > 0 && service[0].attributes.Title}
                        </p>
                    </div>

                </div>



                <div style={{
                    width: "80%",
                    float: "right",
                    // border: '2px solid blue',
                }}>
                    <div className=''
                    //     style={{
                    //     backgroundImage: `url(${service.length > 0 && service[0].attributes.SecurityAuditServicesImgLink})`,
                    //     height: '700px',
                    //     width: '1000px',
                    // }}
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



        </>
    )
}

export default Our_Service





// {/* <div className="absolute top-10 left-40 transform -translate-x-1/2 pb-10">
//                     {service.length > 0 && service[0].attributes.Rootlogolink &&
//                         (
//                             <img src={service[0].attributes.Rootlogolink} alt="Image Description" />
//                         )
//                     }
//                 </div> */}

// <div
//     className="relative overflow-hidden  bg-no-repeat py-56 bg-balck ms-40  "
//     style={{
//         backgroundImage: `url(${service.length > 0 && service[0].attributes.SecurityAuditServicesImgLink})`,
//         // border: '2px solid red',
//     }}
// >
//     {/* <div className="absolute top-10 left-40 transform -translate-x-1/2 pb-10">
//                         {service.length > 0 && service[0].attributes.Rootlogolink &&
//                             (
//                                 <img src={service[0].attributes.Rootlogolink} alt="Image Description" />
//                             )
//                         }
//                     </div> */}
//     {/* <div className=' mx-32 mt-40 text-white'>
//                         {service.length > 0 && service[0].attributes.Title

//                         }
//                     </div> */}
// </div>



{/* {service.length > 0 && service[0].attributes.SecurityAuditServicesImgLink && (
                            <img src={service[0].attributes.SecurityAuditServicesImgLink} alt="Image Description" className=' w-[1100px] h-[600px]'
                                style={{
                                    // border: '2px solid blue',
                                }} />
                        )
                        } */}