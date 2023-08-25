"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

function Home() {

    const [services, setServices] = useState(null);

    const router = useRouter();



    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch('https://root-blogsite.onrender.com/api/solutions', {
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
            <div className='bg-black ' >
                <div className='pt-5 ps-5' >
                    {services && <img src={services[0].attributes.RootLogolLnk} alt='Image not Found' />}

                </div>
                <div className='w-[1250px] h-[134px] flex pt-8' style={{
                    // border: '2px solid red',
                }}>
                    <div className="w-1 h-32 ps-10">
                        <div className=" bg-white w-1 h-32 rounded">  </div>
                    </div>
                    <div className='ps-32'>
                        {services && (
                            <p className=" text-white text-9xl">
                                {services && services[0].attributes.Title}
                            </p>
                        )}
                    </div>
                </div>
                {/* <div className='bg-black '>
                    {services && <img src={services[0].attributes.HiderGifLink} alt='Image not Found' />}
                </div> */}

                <div className='text-white'>
                    {services &&
                        services.map((item, index) => (

                            <div key={item.id}>
                                {/* //  {console.log("Key:", item.id)} */}

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
                <div className='bg-black text-white cursor-pointer py-5  pr-16 text-right' style={{
                    // border: '2px solid red',
                }}>
                    <span class="text-3xl" onClick={() => router.push('solution')}  >{'←'}</span>
                </div>
            </div>


        </>
    )
}
export default Home
