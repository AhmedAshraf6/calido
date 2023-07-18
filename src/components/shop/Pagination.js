import React from 'react';

export default function Pagination() {
  return (
    <div className='flex items-center justify-between flex-wrap mt-4 sm:mt-8'>
      <button className='text-base sm:text-lg py-2 px-3 flex gap-2 items-center border-2 border-gray-200 hover:border-primary hover:text-primary duration-200'>
        Prev
      </button>
      {/* Numbers */}
      <div className='flex gap-3'>
        <span className='text-base sm:text-lg font-semibold py-1 px-3 rounded-md  bg-primary text-white cursor-pointer'>
          1
        </span>
        <span className='text-base sm:text-lg font-semibold py-1 px-3 rounded-md  hover:border-2 hover:border-primary  hover:text-primary cursor-pointer'>
          2
        </span>
      </div>
      <button className='text-base sm:text-lg py-2 px-3 flex gap-2 items-center border-2 border-gray-200 hover:border-primary hover:text-primary duration-200'>
        Next
      </button>
    </div>
  );
}
