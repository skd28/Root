import React from 'react';
import Image from 'next/image'

const Navbar = () => {
    return (
        <>
            <nav >

                <div className="relative overflow-hidden  bg-cover bg-center bg-no-repeat  py-40"
                    style={{
                        backgroundImage: 'url("/Image/image 18.png")',
                    }}>
                    <div className='ps-32'>
                        <img src="/Image/Logo.png" alt="Image Description" />
                    </div>
                    <div className='pt-64 ps-32'>

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
                                <div className='mt-24 '>
                                    <button className='text-white  rounded-full  border-2 px-4 py-4'>GET QUOTE</button>
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





