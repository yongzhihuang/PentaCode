import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPrice: 0,
      price: 0
    };
  }

  fetchPrice() {
    this.setState({
      prevPrice: this.state.price,
      price: Math.floor(Math.random() * 100) + 1 
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.fetchPrice();
    }, 2000);
  }

  round(value) {
    if (value) {
      return parseFloat(Math.round(value * 100) / 100).toFixed(2);
    }
  
    return 0;
  }

  render() {
    let bgColor = '#e04242';

    if (this.state.prevPrice < this.state.price) {
      bgColor = '#40a740';
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            $<AnimatedNumber component="text" value={this.state.price}
              style={{
                  transition: '1s ease-out',
                  transitionProperty:
                      'background-color, color, opacity'
              }}
              frameStyle={perc => (
                  perc === 100 ? {} : {backgroundColor: bgColor}
              )}
              duration={300}
              formatValue={n => this.round(n)}/>
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
