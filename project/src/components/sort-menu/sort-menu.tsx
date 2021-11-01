import { useState } from 'react';
import SortList from '../sort-list/sort-list';

type SortMenuProps = {
  onSelectSort: (sort: string) => void;
}

function SortMenu({ onSelectSort }: SortMenuProps): JSX.Element {
  const [selectedSort, setSelectedSort] = useState<string>('Popular');
  const [openSort, setOpenSort] = useState<boolean>(false);

  const onSelectedSort = (sort: string) => { // Выглядит так, как будто это здесь лишнее. Я мог бы взять название из onSelectSort. Но как?
    setSelectedSort(sort);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={() => {
          setOpenSort(true); // Не знаю как закрыть.
        }}
        className="places__sorting-type" tabIndex={0}
      >
        {selectedSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {openSort === true ?
        <SortList
          onSelectSort={onSelectSort}
          onSelectedSort={onSelectedSort}
        />
        : ''}
    </form>
  );
}

export default SortMenu;
