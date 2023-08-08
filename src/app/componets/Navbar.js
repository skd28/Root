import React from 'react';
import Image from 'next/image'

const Navbar = () => {
    return (
        <>
            <nav >

                <div className="relative overflow-hidden  bg-cover bg-center bg-no-repeat "
                    style={{
                        backgroundImage: 'url("/Image/image 18.png")',
                    }}>
                    <div className='py-10 ps-10'>
                        <img src="/Image/Logo.png" alt="Image Description" />
                    </div>
                    <div className='pt-64 ps-10'>

                        <div>
                            <ul className='text-white'>
                                <li className='text-4xl space-x-10'>
                                    PROFESSIONAL TECH FOR
                                </li>
                                <li className='text-4xl space-x-10'>
                                    YOUR BUSINESS
                                </li>
                                <li>
                                    <p className='text-sm'>
                                        We can make technology accessible!
                                    </p>
                                </li>
                                <div className='pt-18 py-10'>
                                    <button className='text-white  rounded-full  border-2 px-2 py-2 text-sm'>GET QUOTE</button>
                                </div>

                            </ul>
                        </div>


                    </div>
                </div>
            </nav>


        </>
    );
};

export default Navbar;





