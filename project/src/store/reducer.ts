import { combineReducers } from 'redux';
import { dataReducer } from './data-reducer/data-reducer';
import { offersReducer } from './offers-reducer/offers-reducer';
import { userReducer } from './user-reducer/user-reducer';

export enum NameSpace {
  Offers = 'OFFERS',
  Data = 'DATA',
  User = 'USER',
}

export const reducer = combineReducers({
  [NameSpace.Offers]: offersReducer,
  [NameSpace.Data]: dataReducer,
  [NameSpace.User]: userReducer,
});

export type RootState = ReturnType<typeof reducer>;
