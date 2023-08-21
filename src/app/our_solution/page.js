"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

function Home() {

    const [services, setServices] = useState(null);

    const router = useRouter();


    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch('https://root-blogsite.onrender.com/api/solutions');
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
            <div className='bg-black ' >
                <div className='pt-5 ps-5' >
                    {services && <img src={services[0].attributes.RootLogolLnk} alt='Image not Found' />}

                </div>
                <div className='w-[1250px] h-[134px] flex' style={{
                    border: '2px solid red',
                }}>
                    <div className="w-5 h-5 ms-5">
                        <div className=" bg-white w-5 h-5 rounded">  </div>
                    </div>
                    <div className='ms-38'>
                        {services && (
                            <p className=" text-white text-9xl">
                                {services && services[0].attributes.Title}
                            </p>
                        )}
                    </div>
                </div>

                <div className='text-white'>
                    {services &&
                        services.map((item, index) => (

                            <div key={item.id}>
                                {console.log("Key:", item.id)}

                                {item.id === 1 || item.id % 2 !== 0 ? (
                                    <div className='ms-96 ps-52 mt-16' style={{
                                        // border: '2px solid blue',
                                    }}>
                                        <img src={item.attributes.TitleGifLink} alt='Image not found' className='w-80' />
                                        <div className='text-[#856EF4] text-4xl pt-5'>
                                            {item.attributes.SubTitle}
                                        </div>
                                        <p className='w-[503px] h-[123px] text-justify pt-8'>
                                            {item.attributes.Description}
                                        </p>
                                    </div>
                                ) : (
                                    <div className='ms-20 mt-10' style={{
                                        // border: '2px solid red',
                                        // marginLeft: '20px'
                                    }}>
                                        <img src={item.attributes.TitleGifLink} alt='Image not found' className='w-80' />
                                        <div className='text-[#856EF4] text-4xl pt-5'>
                                            {item.attributes.SubTitle}
                                        </div>
                                        <p className='w-[503px] h-[123px] text-justify pt-8 '>
                                            {item.attributes.Description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>


            </div>


        </>
    )
}
export default Home
