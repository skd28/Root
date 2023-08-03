import React from 'react'

function Growing_Values() {
    return (
        <>
            <div className='bg-custom-blue py-16 px-24 '>
                <div className='text-white text-4xl '>
                    <h1 className=''>Growing With Values</h1>
                </div>
                <div className='pt-3'>
                    <img src={`/Image/Line 20.png`} alt="Image Description" />
                </div>

            </div>

            <div className='bg-custom-blue  px-20'>
                <div className='ms-16'>
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <div className="rotate-180 text-white text-3xl"
                                style={{ writingMode: 'vertical-rl' }}
                            >
                                Misson
                            </div>
                            <div className='ps-2 pt-10'>
                                <input
                                    type="radio"
                                />
                            </div>
                        </div>
                        <div className='w-96 '>
                            <p className='text-white'>
                                To be a leading integrated IT Services Provider
                                by creating value for people through delightful
                                and innovative high-quality service.
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 '>
                        <div className='overflow-hidden bg-no-repeat ms-3' style={{ backgroundImage: 'url("/Image/Vector 5.png")' }}>
                            <div className='mx-10'>
                                <img src='/Image/Growing2.gif' alt="Image Description" />
                                <p className='text-white w-96 h-40 mb-20'  >
                                    To earn trust and profit by providing high -end
                                    sophisticated It Infrastructure Solution to
                                    companies in order to increase efficiency and
                                    reduce complexity in their business.
                                </p>
                            </div>
                        </div>
                        <div className='overflow-hidden bg-no-repeat mt-28' style={{ backgroundImage: 'url("/Image/Vector 4.png")' }}>
                            <div className=' ms-5 mb-32'>
                                <img src='/Image/Growing1.gif' alt="Image Description" />
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Growing_Values












