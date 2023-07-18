'use client';
import React from 'react';
import ProfileNavLink from './ProfileNavLink';
import { BsBorderAll } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
export default function ProfileLinksContainer() {
  return (
    <div className='profile_link_container flex flex-col gap-y-3 sm:gap-y-5'>
      <ProfileNavLink link='/profile' Icon={BsBorderAll} title='Orders' />
      <ProfileNavLink
        link='/profile/account'
        Icon={AiOutlineUser}
        title='Account Details'
      />

      <ProfileNavLink link='/profile/logout' Icon={FiLogOut} title='Log out' />
    </div>
  );
}
