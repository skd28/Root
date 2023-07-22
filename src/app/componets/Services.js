import React from 'react'

function Services() {
    return (
        <>
            <div className=' bg-sky-950'>
                <div className='text-white  text-4xl pt-52  pl-32'>
                    <h1 className='text-white '><a className='underline underline-offset-8'>Servi</a>ces</h1>
                </div>
                <div className='text-center  text-white  pt-20'>
                    <div className=''>
                        <h3 className='font-bold'>Network Support & Maintenance</h3>

                        <div className='text-center justify-center pt-10 flex flex-col'>
                            <p className='px-80'>
                                We can set up and maintain your business's network, or help troubleshoot and
                                maintain your existing network.
                            </p>
                        </div>

                        <h3 className='pt-10  font-bold'> IT Support</h3>

                        <div className='pt-10 text-center'>
                            <p className='px-80'>
                                We are available to consult with you or your staff when problems arise with your
                                software. This service can be either remote or on-site assistance.
                            </p>
                        </div>

                        <h3 className='pt-10 font-bold '>
                            Cloud Services & Data Management
                        </h3>

                        <div className='pt-10 mb-28'>
                            <p className='px-80'>
                                We will work with you to establish the appropriate cloud size and available
                                resources for your business.
                            </p>
                        </div>
                    </div>
                </div>



                <footer class="bg-sky-700 py-5 px-10">
                    <div class="sm:flex sm:justify-between">
                        <p class="text-white">
                            Copyright © 2023 Root Technologies - All Rights Reserved.
                        </p>

                        <ul
                            class="mt-8 flex flex-wrap justify-start gap-4  sm:mt-0 lg:justify-end"
                        >
                            <li>
                                <a href="#" class="text-white transition hover:opacity-75">
                                    Powered by <a className='underline underline-offset-8'>GoDaddy</a>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default Services