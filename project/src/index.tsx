import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { checkAuthAction, fetchOfferAction } from './store/api-actions';
import { redirect } from './store/middlewares/redirect';
import { api } from './services/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchOfferAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
