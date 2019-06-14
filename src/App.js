import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import Map from './components/Map/MapContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Map />
      </div>
    </Provider>
  );
}

export default App;
