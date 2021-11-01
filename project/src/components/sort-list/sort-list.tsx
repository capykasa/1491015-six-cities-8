import { useState } from 'react';
import { Sorting } from '../../const';

type SortListProps = {
  onSelectSort: (sort: string) => void;
  onSelectedSort: (sort: string) => void;
}

function SortList({ onSelectSort, onSelectedSort }: SortListProps): JSX.Element {
  const [selectedSort, setSelectedSort] = useState<string>('Popular');

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {Sorting.map((item: string) => (
        <li
          key={item}
          className={selectedSort === item ? 'places__option places__option--active' : 'places__option'}
          tabIndex={0}
          onClick={() => {
            setSelectedSort(item);
            onSelectSort(item);
            onSelectedSort(item);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default SortList;
