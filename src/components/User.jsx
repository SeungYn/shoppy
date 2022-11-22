import React from 'react';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className='flex items-center shrink-0'>
      <img
        src={photoURL}
        alt=''
        className='w-10 h-10 rounded-full mr-2 shrink-0'
      />
      <span className='hidden md:block '>{displayName}</span>
    </div>
  );
}
