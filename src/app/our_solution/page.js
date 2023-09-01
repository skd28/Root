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

    const handleBackButtonClick = () => {
        // Use the router object to navigate back to the first page
        if (typeof window !== 'undefined') {
            router.push('/');
        }
    };


    return (
        <>
            <div className='bg-black ' >
                <div className='pt-5 ps-5  py-10' style={{
                    backgroundImage: ' linear-gradient(342.74deg, rgba(0, 21, 42, 0.43) 72.06%, rgba(255, 255, 255, 0) 145.85%)',
                }} >
                    {services && <img src={services[0].attributes.RootLogolLnk} alt='Image not Found' />}

                </div>

                <div className='flex flex-row justify-center'>
                    {services && (
                        <>
                            <p className="text-white font-bold " style={{
                                fontSize: '140px',
                            }}>
                                {services[0].attributes.Title.split(' ')[0]}
                            </p>
                            <p className="text-white ps-14" style={{
                                fontSize: '140px',
                            }}>
                                {services[0].attributes.Title.split(' ').slice(1).join(' ')}
                            </p>
                        </>
                    )}
                </div>

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
                    <span class="text-3xl" onClick={handleBackButtonClick} >{'←'}</span>
                </div>
            </div>


        </>
    )
}
export default Home
