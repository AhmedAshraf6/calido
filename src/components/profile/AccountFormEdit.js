'use client';
import React, { useEffect, useState } from 'react';
import InputField from '@/components/shared-component/InputField';
import { toast } from 'react-toastify';
import { useMainContext } from '@/contexts/MainContext';

export default function AccountFormEdit() {
  const { user } = useMainContext();
  const [data, setData] = useState({
    firstname: user?.firstName || '',
    lastname: user?.lastName || '',
    email: user?.mail || '',
    phone: user?.phone || '',
    address: user?.address || '',
    currpassword: '',
    newpass: '',
    confirmnewpass: '',
  });
  const {
    firstname,
    lastname,
    email,
    phone,
    address,
    currpassword,
    newpass,
    confirmnewpass,
  } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname) {
      toast.error('Please Fill Out All Fields');
      return;
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
      firstname: user?.firstName || '',
      lastname: user?.lastName || '',
      email: user?.mail || '',
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
          name='firstname'
          handleChange={handleChange}
          value={firstname}
          requried='requried'
        />
        <InputField
          label='Last Name'
          type='text'
          name='lastname'
          handleChange={handleChange}
          value={lastname}
        />
      </div>

      <InputField
        label='Email address'
        type='email'
        name='email'
        handleChange={handleChange}
        value={email}
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
        Save changes
      </button>
    </form>
  );
}
