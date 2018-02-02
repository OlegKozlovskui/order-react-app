import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  goToStore = (e) => {
    e.preventDefault();
    this.props.history.push(`/store/${this.storeInput.value}`)
  }

  render() {
    return(
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" ref={(input) => { this.storeInput = input }} defaultValue={getFunName()}/>
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;