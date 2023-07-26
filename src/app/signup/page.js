'use client';
import InputField from '@/components/shared-component/InputField';
import customFetch from '@/util/axios';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function SignUp() {
  useEffect(() => {
    const fetchUserLocation = async () => {
      const res = await axios('https://ipapi.co/json/');
      const { country_name } = res.data;
      setData({ ...data, country: country_name });
    };
    fetchUserLocation();
  }, []);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
    address: '',
    mail: '',
    password: '',
  });
  const { firstName, lastName, phone, country, address, mail, password } = data;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mail || !password || !firstName || !lastName) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    try {
      setLoading(true);
      const response = await customFetch.post('/auth/signup', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      toast.success('You are member now');
      router.push('/signin');
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
    return;
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <div className='flex  flex-1 flex-col justify-center px-3 py-12 lg:px-8'>
      <div className='container'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          {/* <img
          className='mx-auto h-10 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt='Your Company'
        /> */}
          <h2 className='mt-10 text-center text-base sm:text-2xl  font-bold leading-5 sm:leading-9 tracking-tight text-gray-900'>
            Sign Up to your account
          </h2>
        </div>

        <div className='mt-5 sm:mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <InputField
              label='First Name'
              type='text'
              name='firstName'
              handleChange={handleChange}
              value={firstName}
              requried='requried'
            />

            <InputField
              label='Last Name'
              type='text'
              name='lastName'
              handleChange={handleChange}
              value={lastName}
              requried='requried'
            />
            <InputField
              label='Email'
              type='email'
              name='mail'
              handleChange={handleChange}
              value={mail}
              requried='requried'
            />
            <InputField
              label='Password'
              type='password'
              name='password'
              handleChange={handleChange}
              value={password}
              requried='requried'
            />
            <InputField
              label='Phone'
              type='text'
              name='phone'
              handleChange={handleChange}
              value={phone}
            />
            <InputField
              label='Address'
              type='text'
              name='address'
              handleChange={handleChange}
              value={address}
            />

            <button type='submit' className='btn-primary w-full'>
              Sign Up
            </button>
          </form>

          <p className='mt-5 sm:mt-10 text-center text-sm text-gray-500'>
            have account already ?
            <Link
              href='/signin'
              className='font-semibold leading-6 text-primary mx-2 whitespace-nowrap'
            >
              {loading ? 'loading...' : 'Sign In'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
