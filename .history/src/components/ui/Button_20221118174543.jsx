import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='bg-brand py-2 px-4 text-white py-2 px-4 rounded-sm hover:brightness-50'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
