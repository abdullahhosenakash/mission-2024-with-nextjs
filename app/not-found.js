import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='text-center'>
      <h2 className='text-5xl mt-12 text-red-500'>
        The requested path was not found!
      </h2>
      <Link href='/' className='block text-3xl mt-4 hover:text-blue-500'>
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
