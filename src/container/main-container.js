import React from 'react';
import { Provider } from 'react-redux';

import AppBar from '../components/app-bar';
import store from '../store';
import runRootSaga from '../sagas/root-saga';

runRootSaga();

const MainContainer = props => (
  <Provider store={store}>
    <div className="root">
      <AppBar />
      {props.children}
    </div>
  </Provider>
);


export default MainContainer;
