import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferContainer from '../../components/offer-container/offer-container';
import PlaceCard from '../../components/place-card/place-card';
import MapContainer from '../../components/map-container/map-container';
import { OfferComment } from '../../types/offer-type';
import { IncomingOffer } from '../../types/offer-type';
import { Offer } from '../../types/offer-type';
import { RATING, Sign } from '../../const';
import { Helmet } from 'react-helmet-async';

type OfferPageProps = {
  offers: Offer[];
  incomingOffer: IncomingOffer;
  offerComments: OfferComment[];
  rating: typeof RATING;
  sign: typeof Sign;
  isOfferCard?: boolean;
  selectedPoint?: string;
}

function OfferPage ({offers, sign, incomingOffer, offerComments, rating, isOfferCard = true, selectedPoint}: OfferPageProps):JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Предложения</title>
      </Helmet>
      <Header sign={sign} />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery placesImage={incomingOffer}/>
          <OfferContainer
            incomingOffer={incomingOffer}
            offerComments={offerComments}
            rating={rating}
          />
          <MapContainer offers={offers.slice(0,3)} selectedPoint={selectedPoint}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offers.slice(0,3).map((offerCard) => (
                <PlaceCard key={offerCard.id} placeCard={offerCard} isOfferCard={isOfferCard} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
