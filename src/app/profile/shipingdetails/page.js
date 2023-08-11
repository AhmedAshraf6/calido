import AccountFormEdit from '@/components/profile/AccountFormEdit';
import HeroLanding from '@/components/shared-component/HeroLandingWithoutImage';
import ProfileLinksContainer from '@/components/profile/ProfileLinksContainer';
import React from 'react';
import AllShippingDetails from '@/components/profile/AllShippingDetails';
import AddShippingForm from '@/components/profile/AddShippingForm';

export default function page() {
  return (
    <>
      <HeroLanding title='My Account' />
      <div className='mt-8 sm:mt-24'>
        <div className='container'>
          <div className='grid md:grid-cols-3 gap-x-8 gap-y-5'>
            <div className='col-span-3 md:col-span-1'>
              <ProfileLinksContainer />
            </div>
            <div className='col-span-3 md:col-span-2'>
              <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                <AllShippingDetails />
                <AddShippingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
