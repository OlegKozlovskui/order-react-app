import React from 'react';
import { formatPrice } from '../helpers';

const Fish = (props) => {
  return (
    <li className="menu-fish">
      <img src={this.props.details.image} alt=""/>
      <h3 className="fish-name">
        {this.props.details.name}
        <span className="price">{formatPrice(this.props.details.price)}</span>
      </h3>
      <p>{this.props.details.desc}</p>
      <button>Add To Order</button>
    </li>
  );
}

export default Fish;
