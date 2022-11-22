import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdateToCart } from '../api/firebase';
export default function CartItem({
  product,
	product: { id, image, title, option, quantity },
	uid,
}) {
	const handleMinus = () => {
		if (quantity < 2) return;
		addOrUpdateToCart(uid, {...product, quantity: quantity - 1});
	}
	const handlePlus =() => {
		if(qu)
	}
	const handleDelete = () => {
		if(qu)
	}
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{option}</p>
				<AiOutlineMinusSquare onClick={handleMinus} />
        <span>{quantity}</span>
        <AiOutlinePlusSquare onClick={handlePlus}/>
        <RiDeleteBin5Fill onClick={handleDelete}/>
      </div>
    </li>
  );
}
