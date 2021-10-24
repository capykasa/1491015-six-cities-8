import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { cities } from './mocks/cities';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      reviews={reviews}
      cities={cities}
    />
  </React.StrictMode>,
  document.getElementById('root'));
