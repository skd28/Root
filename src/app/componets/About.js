import React from 'react'
import Image from 'next/image'
function About() {
    return (
        <>
            <div className='bg-black'>

                <div className='me-20'>
                    <ul className=' text-white text-center '>
                        <li>
                            ABOUT US !
                        </li>
                    </ul>
                </div>
                <div className='flex flex-row items-center justify-center text-center'>

                    <div className=''>
                        <img src="/Image/Image 23.png" alt="Image Description" className='my-48 w-72 h-96' />
                    </div>
                    <div className='text-white border-2 w-1/2 py-10 rounded-2xl'>
                        <p className='text-center'>
                            Root Technologies is a leading IT Services Integrator delivering world-class IT infrastructure services to customers PAN India. We are a team of dedicated professionals and certified engineers focusing on innovation to provide
                            cost-effective solutions and efficient services.
                        </p>
                        <p className='text-center pt-5'>
                            We work together with our customers to deliver and deploy highly sophisticated IT infrastructure to reduce complexities and increase value in the business.
                        </p>
                    </div>
                    <div className=''>
                        <img src="/Image/Image 23 (1).png" alt="Image Description" className='my-56 w-60 h-96' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About




