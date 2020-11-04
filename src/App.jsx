import React from "react";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from '../src/Routes';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';


import './App.css';

const history = createBrowserHistory();

const App = () => {
  return (
      <Provider store={store}>
          <Router history={history}>
              <PersistGate persistor={persistor}>
                <Routes />
              </PersistGate>
          </Router>
      </Provider>
  )
};
export default App;
