'use client';
import { useMainContext } from '@/contexts/MainContext';
import { useAddProductToCart } from '@/util/useRepeatedFunction';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function AddToCartProductComponent({ product }) {
  const { addToCart, cart, removeUser, getCart } = useMainContext();
  const token = Cookies.get('calidoUser');
  const router = useRouter();
  const [found, setFound] = useState(false);
  // we will stop here
  useEffect(() => {
    if (cart.length > 0) {
      cart.find((pr) => {
        if (pr.id === product?.id) {
          setFound(true);
        }
      });
    }
  }, [cart]);
  const { addPr } = useAddProductToCart();

  return (
    <button
      className={` btn-primary mx-2 mb-5`}
      onClick={() => addPr({ product, found })}
    >
      {/* {found ? 'view cart' : ' Add to cart'} */}
      Add To Cart
    </button>
  );
}
