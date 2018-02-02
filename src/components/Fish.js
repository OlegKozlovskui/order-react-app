import React from 'react';
import { formatPrice } from '../helpers';

const Fish = ({details, index, addToOrder}) => {
  const isAvailable = details.status === 'available';
  const buttonText = isAvailable ? 'Add To Order' : 'Sold Out';
  return (
    <li className="menu-fish">
      <img src={details.image} alt=""/>
      <h3 className="fish-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span>
      </h3>
      <p>{details.desc}</p>
      <button disabled={!isAvailable} onClick={() => addToOrder(index)}>{buttonText}</button>
    </li>
  );
}

export default Fish;
