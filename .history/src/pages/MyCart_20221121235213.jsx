import React from 'react';
import { useQuery } from 'react-query';
import { useAuthContext } from '../components/context/AuthContext';

export default function MyCart() {
  const {
    user,
    user: { uid },
  } = useAuthContext();
  const { data: products } = useQuery(['carts'], () => getCart(uid));
  return <div>mycart</div>;
}
