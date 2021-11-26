import { useState } from 'react';
import { Sorting } from '../../const';

type SortMenuProps = {
  hudleSelectSort: (sort: string) => void;
}

function SortMenu({ hudleSelectSort }: SortMenuProps): JSX.Element {
  const [selectedSort, setSelectedSort] = useState<string>('Popular');
  const [openSort, setOpenSort] = useState<boolean>(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={() => {
          setOpenSort(true);
        }}
        className="places__sorting-type" tabIndex={0}
      >
        {selectedSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {openSort === true ?
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(Sorting).map((item: string) => (
            <li
              key={item}
              className={selectedSort === item ? 'places__option places__option--active' : 'places__option'}
              tabIndex={0}
              onClick={() => {
                setSelectedSort(item);
                hudleSelectSort(item);
                setOpenSort(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        : ''}
    </form>
  );
}

export default SortMenu;
