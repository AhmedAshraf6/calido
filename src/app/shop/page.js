import HeroLandingWithoutImage from '@/components/shared-component/HeroLandingWithoutImage';
import Item from '@/components/shared-component/Product';
import ProductsContainer from '@/components/shop/ProductsContainer';
import SortShop from '@/components/shop/SortShop';
import React from 'react';

export default function page() {
  return (
    <section>
      <HeroLandingWithoutImage title='Shop' />
      <div className='mt-8 sm:mt-24'>
        <div className='container'>
          {/* Sort */}
          <SortShop />
          <ProductsContainer />
        </div>
      </div>
    </section>
  );
}
