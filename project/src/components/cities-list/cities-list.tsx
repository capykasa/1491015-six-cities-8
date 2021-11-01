import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cities } from '../../const';

type CitiesListProps = {
  onSelectCity: (city: string) => void;
  onSelectOffersByCity: () => void;
}

function CitiesList({ onSelectCity, onSelectOffersByCity }: CitiesListProps): JSX.Element {
  const [selectedCity, setSelectedCity] = useState<string>('Paris');

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((item: string) => (
            <li
              key={item}
              className="locations__item"
            >
              <Link to=''
                onClick={() => {
                  setSelectedCity(item);
                  onSelectCity(item);
                  onSelectOffersByCity();
                }}
                className={selectedCity === item ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
              >
                <span>{item}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
