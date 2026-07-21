import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: null
    };
    
    // Bind event handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ rupees: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault(); // Prevent default browser behavior
    
    const rupeesVal = parseFloat(this.state.rupees);
    if (!isNaN(rupeesVal)) {
      // Example conversion rate: 1 Euro = ~85 Indian Rupees
      const eurosVal = (rupeesVal / 85).toFixed(2);
      this.setState({ euros: eurosVal });
    }
  }

  render() {
    return (
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Currency Convertor</h2>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Indian Rupees (INR): </label>
          <input 
            type="number" 
            value={this.state.rupees} 
            onChange={this.handleChange} 
            placeholder="Enter Amount in Rs" 
            style={{ padding: '5px' }}
          />
        </div>
        
        <button onClick={this.handleSubmit} style={{ padding: '8px 15px' }}>
          Convert
        </button>
        
        {this.state.euros !== null && (
          <p style={{ marginTop: '15px', fontWeight: 'bold', color: 'green' }}>
            Equivalent in Euros: € {this.state.euros}
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
