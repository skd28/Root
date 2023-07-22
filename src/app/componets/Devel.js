import React from 'react'

function Devel() {
    return (
        <>
            <div className="relative overflow-hidden  bg-cover bg-center bg-no-repeat "
                style={{
                    backgroundImage: 'url("/Image/content.png")',
                }}>


                <div className='ms-32 my-5' >
                    <img src="/Image/Group (1).png" alt="Image Description" />
                    <ul className='ps-12 pb-10'>
                        <li className='text-white text-4xl space-x-10'>
                            <a className='underline underline-offset-8'> OUR D</a>evelopment
                        </li>
                    </ul>
                </div>


                <div className='bg-blue-900 '>
                    <div className='py-10'>
                        <ul
                            className='bg-sky-900 text-sm rounded-md  h-28 w-2/5 pb-20 ms-28  me-96'>
                            <li>
                                <p className=' text-white py-9 px-6 text-center'>
                                    As one of the leading software development companies,
                                    we at Root Technologies have a diverse range of services
                                    for our clients, where we operate in these core areas
                                    services.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* <div className='ms-28 mt-11 flex flex-row'> */}
                        {/* <div>
                                <ul>
                                    <li>
                                        <h3 className=' h-7  w-40  text-white text-center rounded-xl border border-gray-200 bg-slate-400'>Web Development</h3>
                                    </li>
                                    <li>
                                        <p className='mt-4 h-36 w-40 text-sm   text-center rounded-md bg-gradient-to-br from-purple-400 via-purple-300 to-transparent
                                bg-gradient-to-t from-white via-gray-200 to-gray-200' >

                                            We help companies with unique and
                                            comprehensive web development services
                                            that empower you and your clients.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative overflow-hidden  bg-cover bg-center bg-no-repeat  py-40"
                                style={{
                                    backgroundImage: 'url("/Image/Group.png")',
                                }}>

                            </div>
                        </div> */}


                        {/* Test for Image  */}


                        <div className=''>
                            {/* <div>
                                <ul>
                                    <li>
                                        <h3 className='h-7 w-40 text-white text-center rounded-xl border border-gray-200 bg-slate-400'>Web Development</h3>
                                    </li>
                                    style={{ backgroundImage: 'url("/Image/Group.png")' }}
                                    <li>
                                        <p className='mt-4 h-36 w-40 text-sm text-center rounded-md bg-gradient-to-br from-purple-400 via-purple-300 to-transparent bg-gradient-to-t from-white via-gray-200 to-gray-200'>
                                            We help companies with unique and comprehensive web development services that empower you and your clients.
                                        </p>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat " style={{ backgroundImage: 'url("/Image/Group.png")' }}>
                                <img src="/path/to/another_image.jpg" alt="Another Image" className="absolute top-0 left-0 w-full h-full object-cover" />
                            </div>
                        </div>











                        <div className='px-24 py-20 '>
                            <div className="relative ">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex items-center justify-between mx-15">
                                    <span className="bg-blue-900  pr-3 text-base font-semibold leading-6 text-white">Learn More</span>
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-900  py-1.5 text-sm font-semibold text-white shadow-sm  hover:bg-gray-50"
                                    >
                                        <span>{'>'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >

            </div >

        </>
    )
}

export default Devel