import React from 'react';
import Image from 'next/image';

const ServiceItem = ({ name, description, GIFlink }) => {
    return (
        <div className='bg-white rounded-lg shadow-md p-6'>
            <div className='text-2xl font-bold mb-4'>{name}</div>
            <div className='mb-4'>
                <Image src={GIFlink} width={300} height={200} alt="GIF Description" />
            </div>
            <div>{description}</div>
        </div>
    );
};

export default ServiceItem;
