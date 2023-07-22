import React from 'react'

function Values() {
    return (
        <>
            <div className='bg-sky-800 '>
                <div className="relative overflow-hidden  bg-cover bg-no-repeat p-12 bg-sky-950">
                    <div className='text-white text-4xl '>
                        <h1 className='pt-40 pl-28'><a className='underline underline-offset-8'>Grow</a>ing With Values</h1>
                    </div>
                </div>
                <div>
                    {/* <div className='bg-sky-950  ms-28  me-96 mt-20 text-sm  rounded-md 
                     h-28 w-2/5'>
                        <p className=' text-white py-9 px-6'>
                            As one of the leading software development companies,
                            we at Root Technologies have a diverse range of services
                            for our clients, where we operate in these core areas
                            services.
                        </p>
                    </div> */}
                    <div className='text-right '>
                        <p className='text-white h-28 w-2/5'>
                            To be a leading integrated IT Services Provider
                            by creating value for people through delightful
                            and innovative high-quality service.
                        </p>
                    </div>
                    <div className=' text-white   ms-28  me-96 py-16'>
                        <h3 className='bg-violet-300 h-7  w-40  text-center rounded-xl'>Web Development</h3>
                        <p className='bg-violet-400 mt-4 h-36 w-40 text-sm   text-center rounded-md' >
                            We help companies with unique and
                            comprehensive web development services
                            that empower you and your clients.
                        </p>
                    </div>
                    <div className='ms-28  me-64  pb-10'>
                        <p className='text-white'>Learn More <hr></hr></p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Values