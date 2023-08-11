'use client';
import customFetch from '@/util/axios';
import { BaseUrl } from '@/util/constants';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../shared-component/Loading';

export default function AllShippingDetails() {
  const token = Cookies.get('calidoUser');
  const [loading, setLoading] = useState(false);
  const [shippingData, setShippingData] = useState([]);
  const getShippingDetails = async () => {
    setLoading(true);
    try {
      const response = await customFetch('/shippingDetails', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setShippingData(response?.data?.results?.rows);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getShippingDetails();
  }, []);
  console.log(shippingData);
  if (loading) {
    return <Loading />;
  }
  if (shippingData.length === 0) {
    return (
      <h1 className='text-xl lg:text-2xl font-bold'>
        No Shippping Details Exist{' '}
      </h1>
    );
  }
  return (
    <div className='overflow-x-auto'>
      <h1 className='text-lg md:text-2xl font-bold text-center'>
        All Shipping Details
      </h1>
      {/* {shippingData.map((ship) => {
        return (
          <div className='flex items-start gap-5' key={ship.id}>
            <h3 className='text-md '>
              Country: <span className='font-semibold'>{ship.country}</span>
            </h3>
            <h3 className='text-md '>
              Address:<span className='font-semibold'> {ship.address}</span>
            </h3>
          </div>
        );
      })} */}
      <div class='w-full '>
        <table class='min-w-full bg-white'>
          <thead>
            <tr>
              <th class='py-3 px-4 border-b border-gray-200'>Country</th>
              <th class='py-3 px-4 border-b border-gray-200'>Address</th>
              <th class='py-3 px-4 border-b border-gray-200'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {shippingData.map((ship) => {
              return (
                <tr key={ship.id}>
                  <td class='text-sm md:text-base py-3 px-2 md:px-4 border-b border-gray-200 whitespace-nowrap'>
                    {ship.country}
                  </td>
                  <td class='text-sm md:text-base py-3 px-2 md:px-4 border-b border-gray-200 whitespace-nowrap'>
                    {ship.address}
                  </td>
                  <td class='py-3 px-2 md:px-4 border-b border-gray-200'>
                    <div class='flex justify-end'>
                      <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 mr-2 rounded'>
                        Edit
                      </button>
                      <button class='bg-red-500 hover:bg-red-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded'>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
