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
          <div className='grid grid-cols-1 lg:grid-cols-4 items-start gap-4'>
            <div className='col-span-1 lg:col-span-3'>
              <ProductsContainer />
            </div>
            <div className='col-span-1 lg:col-span-1'>
              <SortShop />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
