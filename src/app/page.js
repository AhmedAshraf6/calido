import Slider from '@/components/home/Slider';
import React from 'react';

import Sale from '@/components/home/Sale';
import Item from '@/components/shared-component/Item';
import UserLocation from '@/components/shared-component/UserLocation';
import { BaseUrl } from '@/util/constants';
import { toast } from 'react-toastify';
// import geoip from 'geoip-lite';
async function getData() {
  const res = await fetch(`${BaseUrl}/products`);
  if (!res.ok) {
    toast.error('error happen');
  }

  return res.json();
}
async function getUserLocation() {
  const res = await fetch('https://ipapi.co/json/');

  if (!res.ok) {
    toast.error('user location error');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const userLoc = await getUserLocation();
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
      <UserLocation />
    </div>
  );
}
