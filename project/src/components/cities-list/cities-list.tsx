import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Cities } from '../../const';
import { selectCity } from '../../store/action';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

const mapStateToProps = ({ city }: State) => ({
  city,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSelectCity(city: string) {
    dispatch(selectCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CitiesList({ onSelectCity }: PropsFromRedux): JSX.Element {
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

export default connector(CitiesList);
