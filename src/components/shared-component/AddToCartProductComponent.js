'use client';
import { useMainContext } from '@/contexts/MainContext';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function AddToCartProductComponent({ product }) {
  const { addToCart, cart } = useMainContext();
  const [found, setFound] = useState(false);
  const router = useRouter();

  useEffect(() => {
    cart.find((pr) => {
      if (pr.id === product?.id) {
        setFound(true);
      }
    });
  }, [cart]);
  return (
    <button
      className={` btn-primary mx-2 mb-5`}
      onClick={() => {
        if (found) {
          router.push('/cart');
          return;
        }
        addToCart(product?.id, 1, product);
      }}
    >
      {found ? 'view cart' : ' Add to cart'}
    </button>
  );
}
