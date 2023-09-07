"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import location_map from './location_ map.json';
import Lotiee from 'lottie-react';

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
        if (typeof window !== 'undefined') {
            router.push('/');
        }
    };


    return (
        <>
            <div className='bg-black ' >
                <div className='pt-5 ps-5  py-10  sm:py-2 bs:py-5' style={{
                    backgroundImage: ' linear-gradient(342.74deg, rgba(0, 21, 42, 0.43) 72.06%, rgba(255, 255, 255, 0) 145.85%)',
                }} >
                    {services && <img src={services[0].attributes.RootLogolLnk} alt='Image not Found' />}

                </div>

                <div className='flex flex-row justify-center' >
                    <div className='w-1 h-32 pt-10 pr-7 lg:h-24 lg:pt-9 md:pt-7  md:h-20 sm:pt-5 sm:h-12 sm:pr-3 bs:pr-3 bs:pt-3 bs:h-10'>
                        <div className='bg-white h-32 rounded w-1 lg:h-24 md:h-16 sm:h-12 bs:h-10'></div>
                    </div>
                    <div className='flex flex-row' >
                        {services && (
                            <>
                                <p className=" font-semibold text-[#ffffff] text-[140px]  opacity-60 lg:text-[110px] md:text-[80px] sm:text-[60px] bs:text-[40px]" style={{
                                    // fontSize: '140px',
                                }}>
                                    {services[0].attributes.Title.split(' ')[0]}
                                </p>
                                <p className=" ps-14  text-[#ffffff] text-[140px]  opacity-25 lg:text-[110px] md:text-[80px] sm:ps-3  sm:text-[60px] bs:text-[40px] bs:ps-5" style={{
                                    // fontSize: '140px',
                                }}>
                                    {services[0].attributes.Title.split(' ').slice(1).join(' ')}
                                </p>
                            </>
                        )}
                    </div>
                </div>
                {/* <div className='border-2 bg-contain bg-no-repeat h-[600px]' style={{
                    backgroundImage: `url(${services[0].attributes.MapImgLink})`,
                }}>
                    <Lotiee animationData={location_map} />
                </div> */}

                <div className='text-white'>
                    {services &&
                        services.map((item, index) => (

                            <div key={item.id}>
                                {item.id === 1 || item.id % 2 !== 0 ? (
                                    <div className='ms-96 ps-52 mt-16  lg:ms-44  lg:ps-80 md:ms-20 md:ps-40 sm:ms-4 sm:ps-1 sm:mt-32  bs:ms-4 bs:ps-1 bs:mt-32' style={{
                                        // border: '2px solid blue',
                                    }}>
                                        <img src={item.attributes.TitleGifLink} alt='Image not found' className='w-80' />
                                        <div className='text-[#856EF4] text-4xl pt-5'>
                                            {item.attributes.SubTitle}
                                        </div>
                                        <p className='w-[503px] h-[123px] text-justify pt-8 sm:w-[330px]  sm:h-[100px] bs:w-[330px]  bs:h-[100px]'>
                                            {item.attributes.Description}
                                        </p>
                                    </div>
                                ) : (
                                    <div className='ms-20 mt-10 lg:ms-10 md:ms-8 sm:ms-4 sm:mt-32 bs:ms-4 bs:mt-32' >
                                        <img src={item.attributes.TitleGifLink} alt='Image not found' className='w-80' />
                                        <div className='text-[#856EF4] text-4xl pt-5'>
                                            {item.attributes.SubTitle}
                                        </div>
                                        <p className='w-[503px] h-[123px] text-justify pt-8  sm:w-[330px]  sm:h-[100px] bs:w-[330px]  bs:h-[100px]'>
                                            {item.attributes.Description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
                <div className='bg-black text-white cursor-pointer py-5  pr-16 text-right sm:pt-20 sm:pr-5 bs:pt-20 bs:pr-5' >
                    <span class="text-3xl" onClick={handleBackButtonClick} >{'←'}</span>
                </div>
            </div>


        </>
    )
}
export default Home
