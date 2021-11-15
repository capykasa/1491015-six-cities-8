import { combineReducers } from 'redux';
import { dataReducer } from './data-reducer/data-reducer';
import { offersReducer } from './offers-reducer/offers-reducer';
import { userReducer } from './user-reducer/user-reducer';

export enum NameSpace {
  offers = 'OFFERS',
  data = 'DATA',
  user = 'USER',
}

export const reducer = combineReducers({
  [NameSpace.offers]: offersReducer,
  [NameSpace.data]: dataReducer,
  [NameSpace.user]: userReducer,
});

export type RootState = ReturnType<typeof reducer>;
