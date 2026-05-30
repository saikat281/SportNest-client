import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col  items-center'>
                <Image
                    src={'https://i.ibb.co.com/0VCDSrzN/df3bef7391a1edcbc349c1ee50a53369.jpg'}
                    alt='Not Found'
                    height={400}
                    width={400}
                />

                <Link href={`/`}>
                    <Button className={'bg-black rounded-lg'}>Go Back To Home</Button>
                </Link>
            </div>

        </div>
    );
};

export default NotFound;