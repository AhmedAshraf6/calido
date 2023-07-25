import React from 'react';

export default function SortShop() {
  return (
    <div className='flex items-center justify-between gap-3 flex-wrap'>
      <span>Showing 1-12 of Results</span>
      <div className='relative'>
        <select className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
          <option>Default Sorting</option>
          <option>Sort by popularity</option>
          <option>Sort by popularity</option>
          <option>Sort by popularity</option>
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg className='fill-current h-4 w-4' viewBox='0 0 20 20'>
            <path d='M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z' />
          </svg>
        </div>
      </div>
    </div>
  );
}
