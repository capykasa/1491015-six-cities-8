import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Sorting } from '../../const';
import { selectSort } from '../../store/action';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

/* type SortListProps = {
  onSortListClick: (SortType: string) => void;
} */

const mapStateToProps = ({ sort }: State) => ({
  sort,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSelectCity(sort: string) {
    dispatch(selectSort(sort));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SortList({ onSelectCity }: PropsFromRedux): JSX.Element {
  const [selectedSort, setSelectedSort] = useState<string>('Popular');

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Sorting.map((item: string) => (
          <li
            key={item}
            className={selectedSort === item ? 'places__option places__option--active' : 'places__option'}
            tabIndex={0}
            onClick={() => {
              setSelectedSort(item);
              onSelectCity(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default connector(SortList);
