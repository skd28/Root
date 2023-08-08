import React from 'react'

function Our_Service() {
    return (
        <>
            <div
                className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-72"
                style={{
                    backgroundImage: 'url("/Image/Rectangle 42.png"), url("/Image/image 27.png")',
                    backgroundPosition: 'top, center',
                    backgroundSize: 'contain, cover',
                }}
            >
                <div className="absolute top-10 left-40 transform -translate-x-1/2 pb-20">
                    <img src="/Image/Logo.png" alt="Image Description" />
                </div>
                <div className=' mx-32 mt-40'>
                    <ul className='text-4xl text-white '>
                        <li className='space-x-11'>
                            Welcome to
                        </li>
                        <li className='space-x-11'>
                            Security Audit
                        </li>
                        <li className='flex flex-row'>
                            Services
                            <img src="/Image/Arrow 3.png" alt="Image Description" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-balck'>

            </div>

        </>
    )
}

export default Our_Service


