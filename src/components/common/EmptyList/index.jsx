import React from 'react';
import empty from './../../../assets/images/13525-empty.gif'
const EmptyList = () => (
  <div className='flex justify-center'>
    <img className='max-w-[250px] w-full' src={empty} alt="empty" />
  </div>
);

export default EmptyList;