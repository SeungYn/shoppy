import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
export default function CartItem({
  product,
  product: { id, image, title, option, quantity },
}) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{option}</p>
        <AiOutlineMinusSquare />
        <span>{quantity}</span>
        <AiOutlinePlusSquare />
        <RiDeleteBin5Fill />
      </div>
    </li>
  );
}
