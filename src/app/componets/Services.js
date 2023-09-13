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
                <div className=' pt-8 ps-10 pb-10 '>
                    <div>
                        {services && (<p className="text-white text-4xl lg:text-4xl md:text-3xl sm:text-xl"> {services[0].attributes.Name} </p>)}
                        <div className="  w-20 h-1 pt-3   ">
                            <div className=" bg-white w-20 h-1 rounded "> </div>
                        </div>
                    </div>
                </div>

                <div className='text-center pt-10 pb-20' style={{
                    //  border: '2px solid red',
                }}>
                    {services && services.map(item => (<div key={item.id}>
                        <h3 className='font-semibold py-5 text-base text-white'>{item.attributes.Title}</h3>
                        <div className='text-center justify-center flex flex-col ' style={{
                            // border: '2px solid red',
                        }}>
                            <p className=' text-sm text-white  px-auto lg:px-80 md:px-40 sm:px-20'>{item.attributes.description}</p>
                        </div>
                    </div>))}
                </div>
                <div className='text-white flex flex-row-reverse  pr-5 ' >
                    <span>{services && <img src={services[0].attributes.LinkedinLogoLink} alt='imge not found' className='px-1' />}</span>
                    <span>{services && <img src={services[0].attributes.TwitterLogoLink} alt='imge not found' className='px-1' />}</span>
                    <span>{services && <img src={services[0].attributes.whatsaapLogoLink} alt='imge not found' className='px-1' />}</span>
                </div>
                <div >

                    <div className='bg-black py-3' style={{
                        float: 'left', width: '50%',
                        //border: '2px solid red',
                    }}>
                        <p className='text-white text-xs ps-5  h-4'>
                            Copyright © 2023 Root Technologies - All Rights Reserved. </p>
                    </div>
                    <div className='bg-black py-3 ' style={{ float: 'right', width: '50%', }}>
                        <div className='float-right text-white text-xs pr-5 h-4' >
                            <span>  Powered by
                                <a href='https://www.godaddy.com/en-in/websites/website-builder?isc=pwugc&utm_source=
                                wsb&utm_medium=applications&utm_campaign=en-in_corp_applications_base' target="_blank" ><u>Vercel</u></a> </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services

