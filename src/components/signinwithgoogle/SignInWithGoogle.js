import customFetch from '@/util/axios';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function SignInWithGoogle() {
  const handleGoogelLogin = async () => {
    try {
      const response = await customFetch('/auth/google');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className='btn-danger flex w-full items-center mt-5 gap-3 justify-center'
      type='button'
      onClick={handleGoogelLogin}
    >
      <FcGoogle className='text-center' />
      Continue With Google
    </button>
  );
}
