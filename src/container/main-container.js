import React from 'react';
import { Provider } from 'react-redux';

import AppBar from '../components/app-bar';
import store from '../store';
import runSaga from '../sagas/root-saga';

runSaga();

const MainContainer = props => (
  <Provider store={store}>
    <div className="root">
      <AppBar />
      {props.children}
    </div>
  </Provider>
);


export default MainContainer;
