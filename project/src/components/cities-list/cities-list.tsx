import { Link } from 'react-router-dom';
import { Cities } from '../../const';

type CitiesListProps = {
  city: string;
  hundleSelectCity: (city: string) => void;
}

function CitiesList({ city, hundleSelectCity }: CitiesListProps): JSX.Element {

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
                  hundleSelectCity(item);
                }}
                className={city === item ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
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
