import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      userData: null
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const randomID = Math.floor((Math.random() * 10) + 1);
    const apiEndpoint = `https://reqres.in/api/users/${randomID}`;
    this.getData(apiEndpoint);
  }

  async getData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();

      this.setState({
        isLoading: false,
        userData: data
      });
    } catch (e) {
      console.error(e);
      this.setState({
        isLoading: false,
        userData: e
      });
    }
  }
  render() {
    const userFetchResponse = this.state.userData;

    if (!userFetchResponse || this.state.isLoading) {
      return 'Loading...';
    }

    const {first_name, last_name, avatar} = userFetchResponse.data;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div>
              <h3>Name: {first_name} {last_name}</h3>
              <div><img src={avatar} alt="avatar" /></div>
            </div>
        </header>
      </div>
    );
  }

}
