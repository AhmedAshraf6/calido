'use client';
import React, { useEffect, useState } from 'react';
import InputField from '@/components/shared-component/InputField';
import { toast } from 'react-toastify';
import { useMainContext } from '@/contexts/MainContext';
import customFetch from '@/util/axios';
import Cookies from 'js-cookie';

export default function AccountFormEdit() {
  const { user } = useMainContext();
  const token = Cookies.get('calidoUser');

  const [data, setData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    mail: user?.mail || '',
    phone: user?.phone || '',
    address: user?.address || '',
    currpassword: '',
    newpass: '',
    confirmnewpass: '',
  });
  const {
    firstName,
    lastName,
    mail,
    phone,
    address,
    currpassword,
    newpass,
    confirmnewpass,
  } = data;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !mail || !phone) {
      toast.error('Please Fill required fields');
      return;
    }
    if (currpassword || newpass || confirmnewpass) {
      if (!currpassword || !newpass || !confirmnewpass) {
        toast.error('Please Fill Out all password fields');
        return;
      }
      if (newpass !== confirmnewpass) {
        toast.error('newpassword shouid be the same with confirm new password');
        return;
      }
    }
    // console.log(data);
    try {
      const response = await customFetch.put('/users/me', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('your data updated succesfully');
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
  useEffect(() => {
    setData({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      mail: user?.mail || '',
      phone: user?.phone || '',
      address: user?.address || '',
      currpassword: '',
      newpass: '',
      confirmnewpass: '',
    });
  }, [user]);
  return (
    <form onSubmit={handleSubmit} className='flex flex-col  gap-y-4 sm:gap-y-8'>
      <div className='grid sm:grid-cols-2 gap-x-3'>
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
        />
      </div>

      <InputField
        label='Email address'
        type='email'
        name='mail'
        handleChange={handleChange}
        value={mail}
        requried='requried'
      />
      <InputField
        label='Phone Number'
        type='text'
        name='phone'
        handleChange={handleChange}
        value={phone}
        requried='requried'
      />

      <InputField
        label='Address'
        type='text'
        name='address'
        handleChange={handleChange}
        value={address}
      />
      <div className='mx-0 sm:mx-4'>
        <h2 className='text-lg font-bold '>Password change</h2>
        <div className='mx-0 sm:mx-2 mt-3 sm:mt-5'>
          <InputField
            label='Current password (leave blank to leave inchanged)'
            type='password'
            name='currpassword'
            handleChange={handleChange}
            value={currpassword}
          />
          <InputField
            label='New password (leave blank to leave inchanged)'
            type='password'
            name='newpass'
            handleChange={handleChange}
            value={newpass}
          />
          <InputField
            label='Confirm new password'
            type='password'
            name='confirmnewpass'
            handleChange={handleChange}
            value={confirmnewpass}
          />
        </div>
      </div>
      <button type='submit' className='btn-primary self-start'>
        Edit changes
      </button>
    </form>
  );
}
