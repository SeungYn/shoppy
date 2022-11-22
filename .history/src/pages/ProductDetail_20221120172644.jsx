import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ProductDetail() {
  const [selected, setSelected] = useState(options && options[0]);
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  return (
    <section>
      <p>{category}</p>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{price}원</p>
        <p>옵션:</p>
      </div>
    </section>
  );
}
