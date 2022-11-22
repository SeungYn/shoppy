import React from 'react';
import { useQuery } from 'react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../components/context/AuthContext';

export default function MyCart() {
  const {
    user,
    user: { uid },
  } = useAuthContext();
  const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid));
  if (isLoading) return <p>Loading...</p>;
  return <div>mycart</div>;
}
