import { Cities, Sorting } from '../../const';
import { ActionType, Actions } from '../../types/action';
import { Offers } from '../../types/state';

const initialState: Offers = {
  city: Cities[0],
  sort: Sorting.Popular,
};

const offersReducer = (state = initialState, action: Actions): Offers => {
  switch (action.type) {
    case ActionType.SelectCity:
      return { ...state, city: action.payload };
    case ActionType.SelectSort: {
      return { ...state, sort: action.payload };
    }
    default:
      return state;
  }
};

export { offersReducer };
