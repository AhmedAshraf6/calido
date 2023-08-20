'use client';
import React, { useState } from 'react';
import InputCounter from './InputCounter';
import { useMainContext } from '@/contexts/MainContext';

export default function AddToCart({ product }) {
  const [amount, setAmount] = useState(1);
  const { addToCart } = useMainContext();
  console.log(product);
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > product?.stock) {
        tempAmount = product?.stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <>
      {Number(product?.stock) > 0 ? (
        <div className='flex  flex-wrap gap-2 border-t-2 border-b-2 border-gray-200  py-5 sm:py-10'>
          <InputCounter
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
          <button
            className='btn-primary flex-1 whitespace-nowrap'
            onClick={() => addToCart(product?.id, amount, product)}
          >
            Add To Cart
          </button>
        </div>
      ) : (
        <h1 className='text-xl sm:text-2xl'>Out Of product stock</h1>
      )}
    </>
  );
}
