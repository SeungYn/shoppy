import React from 'react';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className='flex items-center'>
      <img src={photoURL} alt='' className='w-10 h-10 rounded-full' />
      <span>{displayName}</span>
    </div>
  );
}
