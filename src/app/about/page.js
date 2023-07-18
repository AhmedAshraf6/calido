import HeroLanding from '@/components/shared-component/HeroLanding';
import WhyUsBox from '@/components/shared-component/WhyUsBox';
import React from 'react';
import { BsAward } from 'react-icons/bs';
export default function page() {
  return (
    <div>
      <HeroLanding
        title='About Us'
        paragraph=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          libero, nemo molestias, odit in, iusto culpa eaque labore maxime
          facilis rem iste? Qui, quibusdam est nisi natus suscipit nostrum iure?'
      />
      <div className=' mt-5 sm:mt-16'>
        <div className='container'>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6'>
            <WhyUsBox
              Icon={BsAward}
              title='Hight Precision'
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, impedit?'
            />
            <WhyUsBox
              Icon={BsAward}
              title='Hight Precision'
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, impedit?'
            />
            <WhyUsBox
              Icon={BsAward}
              title='Hight Precision'
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, impedit?'
            />
            <WhyUsBox
              Icon={BsAward}
              title='Hight Precision'
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, impedit?'
            />
          </div>
          {/* ABout */}
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
              h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
