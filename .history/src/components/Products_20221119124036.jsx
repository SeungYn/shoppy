import React from 'react';
import { useQuery } from 'react-query';
import { getProducts } from '../api/firebase';

export default function Products() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery(['products'], getProducts);
  return <div></div>;
}
