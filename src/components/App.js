import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends Component {
  state = {
    fishes: {},
    order: {}
  }

  componentWillMount() {
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    const localStorageRef = localStorage.getItem(`order-${this.props.match.params.storeId}`);
    if(localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.match.params.storeId}`, JSON.stringify(nextState.order));
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    this.setState({fishes});
  }

  updateFish = (key, fish) => {
    const fishes = {...this.state.fishes};
    fishes[key] = fish;
    this.setState({fishes});
  }

  removeFish = (key) => {
    const fishes = {...this.state.fishes};
    fishes[key] = null;
    this.setState({fishes});
  }

  loadFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});
  }

  removeFromOrder = (key) => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({order})
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fish">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} addToOrder={this.addToOrder} details={this.state.fishes[key]}/>)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} removeFromOrder={this.removeFromOrder} order={this.state.order} params={this.props.match.params}/>
        <Inventory addFish={this.addFish} removeFish={this.removeFish} updateFish={this.updateFish} loadSamples={this.loadFishes} fishes={this.state.fishes}/>
      </div>
    );
  }
}

export default App;
