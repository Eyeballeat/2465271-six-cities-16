import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITIES, SortList, RAITING, Sign } from './const';
import { placesOffers } from './mocks/places-offers';
import { OfferRequest } from './mocks/offer-request';
import { offerComments } from './mocks/offer-comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App city = {CITIES} sortType={SortList} sign={Sign} placesOffersProps={placesOffers} offerContainerProps={OfferRequest} offerCommentsProps={offerComments} ratingProps={RAITING}/>
  </React.StrictMode>
);
