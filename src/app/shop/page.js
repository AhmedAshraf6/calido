import HeroLandingWithoutImage from '@/components/shared-component/HeroLandingWithoutImage';
import Item from '@/components/shared-component/Item';
import Pagination from '@/components/shop/Pagination';
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
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 py-3 mt-3 sm:mt-6'>
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  );
}
