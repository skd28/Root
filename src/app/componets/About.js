"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';



function About() {
    const [services, setServices] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            // setServices(data1.data[0].attributes);
            try {
                const response = await fetch('https://root-blogsite.onrender.com/api/about-uses');
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
            <div className='bg-black '>




                <div className='text-4xl text-white py-16 px-6 md:px-16'>
                    <ul>
                        <li>
                            {services && services[0].attributes.Name}
                        </li>
                        <li className='mt-3'>
                            <Image src="/Image/Line 20.png" width={100} height={200} alt="Image Description" />
                        </li>
                    </ul>
                </div>


                <div className='grid grid-flow-col  gap-10 items-center mx-20'>
                    <div className='border border-solid border-gray-300 '>
                        {services && (
                            <img
                                src={services[0].attributes.ImgLink}
                                alt="Image Description"
                                className="items-center w-60 h-60 "
                            />
                        )}
                        {/* <Image src={services.ImgLink} alt="Image Description" width={600} height={800} /> */}
                    </div>
                    <div className='text-white text-sm'>

                        <p >
                            {services && services[0].attributes.Description}
                        </p>
                        {/* <p>{services.Description}</p> */}
                    </div>
                </div>

            </div>



        </>
    );
}

export default About;




// //const data1 = {
//     // "data": [
//     //     {
//     //         "id": 1,
//     //         "attributes": {
//     //             "Name": "ABOUT US!",
//     //             "description": "Root Technologies is a leading IT Services Integrator delivering world-class IT infrastructure services to customers PAN India. We are a team of dedicated professionals and certified engineers focusing on innovation to provide cost-effective solutions and efficient services.\n\nWe work together with our customers to deliver and deploy highly sophisticated IT infrastructure in order to reduce the complexities and increase value in the business.",
//     //             "imglink": "https://www.figma.com/file/Yg7U9j4h5McaRG6JMundVE/Untitled?type=design&node-id=1145-3020&mode=design&t=B9JRPt6Ras6gAiQo-0",
//     //             "createdAt": "2023-07-28T06:46:09.688Z",
//     //             "updatedAt": "2023-07-28T06:47:55.317Z",
//     //             "publishedAt": "2023-07-28T06:46:11.767Z"
//     //         }
//     //     }
//     // ],
//     // "meta": {
//     //     "pagination": {
//     //         "page": 1,
//     //         "pageSize": 25,
//     //         "pageCount": 1,
//     //         "total": 1
//     //     }
//     // }
// };
