// Import library
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

// import our modules
import Comments from './components/Comments';
import refreshLocalStorage from './util/refreshLocalStorage';

// import constants
import { KEY_LOCAL_STORAGE, SELECTOR_OF_ROOT_ELEM } from './constants/constants';

// import another our files for webpack
import './index.html';
import './css/style.css';
import rootReducer from './store/reducers/rootReducer';

const localState = localStorage.getItem(KEY_LOCAL_STORAGE);
const initState = localState ? JSON.parse(localState) : {};
const store = createStore(rootReducer, initState);

store.subscribe(() => {
  refreshLocalStorage(KEY_LOCAL_STORAGE, store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <Comments />
  </Provider>,
  document.getElementById(SELECTOR_OF_ROOT_ELEM)
);
