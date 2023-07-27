'use client';
import { useFilterContext } from '@/contexts/FilterContext';
import React from 'react';

export default function SortShop() {
  const {
    isLoading,
    handleChangeFunc,
    sort,
    sortOptions,
    ClearFilter,
    totalProducts,
    products,
  } = useFilterContext();
  const handleChange = (e) => {
    if (isLoading) return;
    handleChangeFunc({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    ClearFilter();
  };
  return (
    <form
      className='flex items-center justify-between gap-3 flex-wrap'
      onSubmit={handleSubmit}
    >
      <button type='submit' className='btn-primary'>
        clear filter
      </button>
      <h2 className='mb-3 text-dark text-md sm:text-2xl '>
        {totalProducts} product{products.length > 1 && 's'} found
      </h2>
      <div className='relative'>
        <select
          className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          value={sort}
          name='sort'
          onChange={handleChange}
        >
          {sortOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg className='fill-current h-4 w-4' viewBox='0 0 20 20'>
            <path d='M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z' />
          </svg>
        </div>
      </div>
    </form>
  );
}
