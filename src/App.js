import React, { Component } from 'react';
import axios from 'axios';

export const doIncrement = (prevState) => ({
  counter: prevState.counter + 1,
});

export const doDecrement = (prevState) => ({
  counter: prevState.counter - 1,
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      asyncCounter: null,
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  componentDidMount() {
    axios.get('http://mydomain/counter')
      .then(counter => this.setState({ asyncCounter: counter }))
      .catch(error => console.log(error));
  }

  onIncrement() {
    this.setState(doIncrement);
  }

  onDecrement() {
    this.setState(doDecrement);
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <Counter counter={counter} />

        <button type="button" onClick={this.onIncrement}>Increment</button>
        <button type="button" onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}

export const Counter = ({ counter }) =>
  <p>{counter}</p>

export default App;