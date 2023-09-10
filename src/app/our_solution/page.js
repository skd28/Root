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
                <div className='pt-5 ps-5  py-10  py-2 py-5' style={{
                    backgroundImage: ' linear-gradient(342.74deg, rgba(0, 21, 42, 0.43) 72.06%, rgba(255, 255, 255, 0) 145.85%)',
                }} >
                    {services && <img src={services[0].attributes.RootLogolLnk} alt='Image not Found' />}

                </div>

                <div className='flex flex-row justify-center' >
                    <div className='w-1 h-32 pt-10 pr-7 h-24 pt-9 pt-7  h-20 pt-5 h-12 pr-3 pr-3 pt-3 h-10'>
                        <div className='bg-white h-32 rounded w-1 h-24 h-16 h-12 h-10'></div>
                    </div>
                    <div className='flex flex-row' >
                        {services && (
                            <>
                                <p className=" font-semibold text-[#ffffff] text-[140px]  opacity-60 text-[110px] text-[80px] text-[60px] text-[40px]" style={{
                                    // fontSize: '140px',
                                }}>
                                    {services[0].attributes.Title.split(' ')[0]}
                                </p>
                                <p className=" ps-14  text-[#ffffff] text-[140px]  opacity-25 text-[110px] text-[80px] ps-3  text-[60px] text-[40px] ps-5" style={{
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
                                    <div className='ms-96 ps-52 mt-16    ps-80  ps-40  ps-1 mt-32   ps-1 mt-32' style={{
                                        // border: '2px solid blue',
                                    }}>
                                        <img src={item.attributes.TitleGifLink} alt='Image not found' className='w-80' />
                                        <div className='text-[#856EF4] text-4xl pt-5'>
                                            {item.attributes.SubTitle}
                                        </div>
                                        <p className='w-[503px] h-[123px] text-justify pt-8 w-[330px]  h-[100px] w-[330px]  h-[100px]'>
                                            {item.attributes.Description}
                                        </p>
                                    </div>
                                ) : (
                                    <div className=' mt-10    mt-32  mt-32' >
                                        <img src={item.attributes.TitleGifLink} alt='Image not found' className='w-80' />
                                        <div className='text-[#856EF4] text-4xl pt-5'>
                                            {item.attributes.SubTitle}
                                        </div>
                                        <p className='w-[503px] h-[123px] text-justify pt-8  w-[330px]  h-[100px] w-[330px]  h-[100px]'>
                                            {item.attributes.Description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
                <div className='bg-black text-white cursor-pointer py-5  pr-16 text-right pt-20 pr-5 pt-20 pr-5' >
                    <span class="text-3xl" onClick={handleBackButtonClick} >{'←'}</span>
                </div>
            </div>


        </>
    )
}
export default Home
