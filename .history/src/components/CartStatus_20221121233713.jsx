import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { getCart } from '../api/firebase';
import { useAuthContext } from './context/AuthContext';
export default function CartStatus() {
  const {
    user,
    user: { uid },
  } = useAuthContext();

  return (
    <div>
      <AiOutlineShoppingCart />
      {products && <p>{products.length}</p>}
    </div>
  );
}
