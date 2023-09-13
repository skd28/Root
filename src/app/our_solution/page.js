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
                <div className='py-8 px-3 w-1/2' style={{
                    backgroundImage: ' linear-gradient(342.74deg, rgba(0, 21, 42, 0.43) 72.06%, rgba(255, 255, 255, 0) 145.85%)',
                }} >
                    {services && <img src='https://res.cloudinary.com/dgpftd5nf/image/upload/v1691838114/root_logo_f630515d1d.png' alt='Image not Found' />}

                </div>

                <div className='flex flex-row justify-center border-4 border-blue-400' >
                    <div className='w-1 h-[40px] pl-3'>
                        <div className='bg-white h-[40px] rounded w-1 '></div>
                    </div>
                    <div className='flex flex-row text-white' >
                        <h1 className=" font-semibold text-[#ffffff] text-[35px]  opacity-60 " >OUR</h1>
                        <h1 className=" text-[#ffffff] text-[35px] px-2 opacity-25 ">SOLUTIONS</h1>
                    </div>
                </div>
                <div>
                    <div className='relative' style={{
                        backgroundImage: `url('https://res.cloudinary.com/dgpftd5nf/image/upload/v1693978560/mapimg_3634f3c0ff.png')`,
                    }}>
                        <Lotiee animationData={location_map} className='w-full h-full absolute top-0 left-0' style={{ zIndex: 1 }}></Lotiee>
                    </div>
                </div>


                <div className='text-white' style={{ border: '2px solid red', }}>
                    {services &&
                        services.map((item, index) => (

                            <div key={item.id}>
                                {item.id === 1 || item.id % 2 !== 0 ? (
                                    <div className='' style={{
                                        border: '2px solid yellow',
                                    }}>
                                        <img src={item.attributes.TitleGifLink} alt='Image not found' className='w-80' />
                                        <div className='text-[#856EF4] text-4xl pt-5'>
                                            {item.attributes.SubTitle}
                                        </div>
                                        <p className='w-[503px] h-[123px] text-justify pt-8 '>
                                            {item.attributes.Description}
                                        </p>
                                    </div>
                                ) : (
                                    <div className=' mt-10' style={{ border: '2px solid red', }} >
                                        <img src={item.attributes.TitleGifLink} alt='Image not found' className='w-80' />
                                        <div className='text-[#856EF4] text-4xl pt-5'>
                                            {item.attributes.SubTitle}
                                        </div>
                                        <p className='w-[503px] h-[123px] text-justify pt-8  '>
                                            {item.attributes.Description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
                <div className='bg-black text-white cursor-pointer py-5  pr-16 text-right pt-20 ' >
                    <span class="text-3xl" onClick={handleBackButtonClick} >{'←'}</span>
                </div>
            </div>
        </>
    )
}
export default Home




// {
//     services && (
//         <>
//             <p className=" font-semibold text-[#ffffff] text-[140px]  opacity-60 " style={{
//                 // fontSize: '140px',
//             }}>
//                 {services[0].attributes.Title.split(' ')[0]}
//             </p>
//             <p className=" ps-14  text-[#ffffff] text-[140px]  opacity-25 " style={{
//                 // fontSize: '140px',
//             }}>
//                 {services[0].attributes.Title.split(' ').slice(1).join(' ')}
//             </p>
//         </>
//     )
// }
