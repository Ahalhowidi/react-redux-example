import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { render } from 'react-dom';
import Main from './Main';
import reducer from './reducer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

render(<App />, document.getElementById('root'));
