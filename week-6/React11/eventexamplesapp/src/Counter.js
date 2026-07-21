import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    
    // Bind the event handlers using 'this' keyword
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
  }

  increment() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  decrement() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  sayHello() {
    alert("Hello! The counter was successfully incremented.");
  }

  // Method invoking multiple methods
  handleIncrease() {
    this.increment();
    this.sayHello();
  }

  render() {
    return (
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Counter Component</h2>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Current Count: {this.state.count}</p>
        
        <button onClick={this.handleIncrease} style={{ marginRight: '10px', padding: '8px' }}>
          Increase (Increment + Say Hello)
        </button>
        
        <button onClick={this.decrement} style={{ padding: '8px' }}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
