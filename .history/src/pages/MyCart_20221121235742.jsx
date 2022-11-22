import React from 'react';
import { useQuery } from 'react-query';
import { getCart } from '../api/firebase';
import CartItem from '../components/CartItem';
import { useAuthContext } from '../components/context/AuthContext';

export default function MyCart() {
  const {
    user,
    user: { uid },
  } = useAuthContext();
  const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid));
  if (isLoading) return <p>Loading...</p>;
  const hasProducts = products && products.length > 0;
  return (
    <section>
      <p>내 장바구니</p>
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div>
            <PriceCard text='상품 총액' price={totalPrice}
          </div>
        </>
      )}
    </section>
  );
}
