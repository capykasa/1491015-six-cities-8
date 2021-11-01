import { useState } from 'react';
import SortList from '../sort-list/sort-list';

type SortMenuProps = {
  onSelectSort: (sort: string) => void;
}

function SortMenu({ onSelectSort }: SortMenuProps): JSX.Element {
  const [selectedSort, setSelectedSort] = useState<string>('Popular');

  onSelectSort = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList
        onSelectSort={onSelectSort}
      />
    </form>
  );
}

export default SortMenu;
