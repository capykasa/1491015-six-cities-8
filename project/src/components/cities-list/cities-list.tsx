import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cities } from '../../const';

type CitiesListProps = {
  onCitiesListClick: (CityList: string) => void;
}

function CitiesList({ onCitiesListClick }: CitiesListProps): JSX.Element {
  const [selectedCity, setSelectedCity] = useState<string>('Paris');

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((city: string) => (
            <li
              key={city}
              className="locations__item"
            >
              <Link to=''
                onClick={() => {
                  setSelectedCity(city);
                  onCitiesListClick(city);
                }}
                className={selectedCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
