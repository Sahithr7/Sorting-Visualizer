import React from 'react';
// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Body from './components/Body/Body';
import store from './components/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Toolbar />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
