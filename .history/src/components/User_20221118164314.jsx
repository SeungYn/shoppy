import React from 'react';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div>
      <img src={photoURL} alt='' />
      <span>{displayNam}</span>
    </div>
  );
}
