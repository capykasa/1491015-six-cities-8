import { useState } from 'react';
import { Sorting } from '../../const';

type SortListProps = {
  onSortListClick: (SortType: string) => void;
}

function SortList({ onSortListClick }: SortListProps): JSX.Element {
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
              onSortListClick(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortList;
