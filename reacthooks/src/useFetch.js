import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function useFetch(url, defaultResponse) {
  const [data, setData] = useState(defaultResponse);

  async function getDataFromAPI() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData({
        isLoading: false,
        data
      });
    } catch (e) {
      console.error(e);
      setData({
        isLoading: false,
        data: e
      });
    }
  }

  useEffect(() => {
    getDataFromAPI()
  }, []);

  return data;
}

export default function App() {
  const randomID = Math.floor((Math.random() * 10) + 1);
  const apiEndpoint = `https://reqres.in/api/users/${randomID}`;
  const userFetchResponse = useFetch(apiEndpoint, {isLoading: true, data: null});

  if (!userFetchResponse.data || userFetchResponse.isLoading) {
    return 'Loading...';
  }

  const {first_name, last_name, avatar} = userFetchResponse.data.data;

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
