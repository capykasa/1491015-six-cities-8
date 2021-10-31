import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import App from './components/app/app';
import { cities } from './mocks/cities';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { reducer } from './store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
        cities={cities}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
