import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';
export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => {
    removeFromCart(uid, id);
  };
  return (
    <li className='flex justify-between my-2 items-center'>
      <img className='w-24 md:w-48 rounded-lg' src={image} alt={title} />
      <div className='flex justify-between'>
        <div className='basis-3/5'>
          <p className='text-lg'>{title}</p>
          <p className='text-xl font-bold text-brand'>{option}</p>
          <p>{price}원</p>
        </div>
        <AiOutlineMinusSquare onClick={handleMinus} />
        <span>{quantity}</span>
        <AiOutlinePlusSquare onClick={handlePlus} />
        <RiDeleteBin5Fill onClick={handleDelete} />
      </div>
    </li>
  );
}
