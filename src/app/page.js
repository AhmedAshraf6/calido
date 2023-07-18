import Slider from '@/components/home/Slider';
import React from 'react';

import Sale from '@/components/home/Sale';
import Item from '@/components/shared-component/Item';

export default function Home() {
  return (
    <div>
      <Slider />

      {/* Featured Product */}
      <div className='mt-8 sm:mt-24'>
        <div className='container '>
          <h1 className='head mb-3 sm:mb-4'>Featured Product</h1>
          <p className='paragraph'>Lorem ipsum dolor sit amet consectetur.</p>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 py-3 mt-3 sm:mt-6'>
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
      {/* Sale */}
      <Sale />
    </div>
  );
}
