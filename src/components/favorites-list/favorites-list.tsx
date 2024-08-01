import { placesOffers } from '../../mocks/places-offers';
import { Offer } from '../../types/offer-type';
import FavoriteCardContainer from '../favorite-card-container/favorite-card-container';

function groupFavoriteOffersByLocation (offers: Offer[]) {
  return (
    offers.reduce((accumulator: Record <string, Offer[]>, offer) => {
      const cityName = offer.city.name;
      if(!accumulator[cityName]) {
        accumulator[cityName] = [];
      }
      accumulator[cityName].push(offer);
      return accumulator;
    }, {} as Record<string, Offer[]>)
  );
}

function FavoritesList (): JSX.Element {
  const getFavoriteOffers = placesOffers.filter((offer) => offer.isFavorite);
  const getOffersGroup = groupFavoriteOffersByLocation(getFavoriteOffers);

  return (
    <ul className="favorites__list">
      {Object.entries(getOffersGroup).map(([city, offers]) => (
        <FavoriteCardContainer key={city} city={city} offers={offers}/>
      ))}
    </ul>
  );
}

export default FavoritesList;
