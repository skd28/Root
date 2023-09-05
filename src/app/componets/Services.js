"use client"
import React, { useState, useEffect } from 'react';



function Services() {

    const [services, setServices] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = "2a4b19af469342efca5eb50970b470c9dfe750bfbf94d0d36ff054c075ecf1a3bdd463fcf46e97acbabaa0982583ba12d14edfe76c9d8f66d021a63ef91bb2147010385a0b3cdaac30f06d3cd6c7d0ef1983066e65d17538f2d242490ff2670fa57c824124315fbae2df2a1b954b0bd6376818cb6cb1eb10972059f13a32b07b";
                const response = await fetch('https://root-blogsite.onrender.com/api/services/', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const data1 = await response.json();
                //  console.log(data1);
                setServices(data1.data);
            } catch (error) { console.error('Error fetching data:', error); }
        };
        fetchData();
    }, []);
    return (
        <>
            <div className='bg-custom-blue '>
                <div className=' pt-14 ps-10 pb-10 lg:pt-12 md:pt-10 sm:pt-8 bs:pt-6 sm:ps-7 bs:ps-5 sm:pb-7 bs:pb-5'>
                    <div>
                        {services && (<p className="text-white text-4xl lg:text-3xl md:text-2xl sm:text-xl bs:text-lg"> {services[0].attributes.Name} </p>)}
                        <div className="  w-20 lg:w-14 md:w-12 sm:w-10 h-1 pt-3  sm:pt-1  md:pt-2 ">
                            <div className=" bg-white w-20 lg:w-14 md:w-12 sm:w-10 h-1 rounded"> </div>
                        </div>
                    </div>
                </div>

                <div className='text-center pt-10 pb-20 lg:pt-8 md:pt-6  sm:pt-4 bs:pt-2 lg:pb-16 md:pb-14 sm:pb-12 bs:pb-5'>
                    {services && services.map(item => (<div key={item.id}>
                        <h3 className='font-semibold py-5 text-base text-white sm:text-sm md:font-medium sm:font-normal'>{item.attributes.Title}</h3>
                        <div className='text-center justify-center  flex flex-col'>
                            <p className='px-80 text-sm text-white sm:text-xs lg:px-72 md:px-56 sm:px-48 bs:px-10'>{item.attributes.description}</p>
                        </div>
                    </div>))}
                </div>
                <div className='text-white flex flex-row-reverse' >
                    <span>{services && <img src={services[0].attributes.LinkedinLogoLink} alt='imge not found' className='px-1' />}</span>
                    <span>{services && <img src={services[0].attributes.TwitterLogoLink} alt='imge not found' className='px-1' />}</span>
                    <span>{services && <img src={services[0].attributes.whatsaapLogoLink} alt='imge not found' className='px-1' />}</span>
                </div>
                <div >

                    <div className='bg-black py-3 sm:py-5 bs:py-4' style={{ float: 'left', width: '50%', }}>
                        <p className='text-white text-xs ps-5 sm:ps-3 bs:ps-1 h-3 md:h-8 sm:h-10 bs:h-12'>
                            Copyright © 2023 Root Technologies - All Rights Reserved. </p>
                    </div>
                    <div className='bg-black py-3 sm:py-5 bs:py-4' style={{ float: 'right', width: '50%', }}>
                        <div className='float-right text-white text-xs pr-5 h-3 md:h-8 sm:h-10 bs:h-12 sm:pr-3 bs:pr-0 bs:pt-3 ' >
                            <span>  Powered by
                                <a href='https://www.godaddy.com/en-in/websites/website-builder?isc=pwugc&utm_source=
                                wsb&utm_medium=applications&utm_campaign=en-in_corp_applications_base' target="_blank" ><u>GoDaddy</u></a> </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services

