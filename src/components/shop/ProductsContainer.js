'use client';
import React, { useEffect } from 'react';
import Item from '../shared-component/Product';
import { useFilterContext } from '@/contexts/FilterContext';
import Pagination from './Pagination';
import Loading from '@/app/loading';
import Product from '../shared-component/Product';

export default function ProductsContainer() {
  const { products, isLoading, page, numOfPages, sort, GetProducts } =
    useFilterContext();

  useEffect(() => {
    GetProducts();
  }, [page, sort]);
  if (isLoading) {
    return (
      <div className='mt-3'>
        <Loading />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <h1 className='text-lg sm:text-2xl text-dark'>
        No Products to display...
      </h1>
    );
  }
  return (
    <>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 py-3 mt-3 sm:mt-6'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      {numOfPages > 1 && <Pagination />}
    </>
  );
}
