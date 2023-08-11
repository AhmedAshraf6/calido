'use client';
import React, { useEffect, useState } from 'react';
import InputField from '../shared-component/InputField';
import Cookies from 'js-cookie';
import customFetch from '@/util/axios';
import { toast } from 'react-toastify';

export default function AddShippingForm() {
  const token = Cookies.get('calidoUser');

  const [data, setData] = useState({
    address: '',
    country: '',
    countries: [],
  });
  const fetchCountries = async () => {
    try {
      const res = await customFetch('countries');
      setData({
        ...data,
        countries: res?.data.results?.rows,
        country: res?.data.results?.rows[0].name,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  const { country, address, countries } = data;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address) {
      toast.error('Please Fill required fields');
      return;
    }

    try {
      const response = await customFetch.post('/shippingDetails', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Added succesfully');
      console.log(response);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
    return;
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col  gap-y-4 sm:gap-y-6 flex-1'
    >
      <InputField
        label='Address'
        type='text'
        name='address'
        handleChange={handleChange}
        value={address}
      />
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' htmlFor={country}>
          Country <span className='text-[#ff000080] text-lg'>*</span>
        </label>
        <div className='relative '>
          <select
            className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
            name='country'
            onChange={handleChange}
            required
            defaultValue={country}
          >
            {countries?.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg className='fill-current h-4 w-4' viewBox='0 0 20 20'>
              <path d='M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z' />
            </svg>
          </div>
        </div>
      </div>
      <button type='submit' className='btn-primary self-start'>
        Add
      </button>
    </form>
  );
}
