import { State } from '../../types/state';
import { NameSpace } from '../reducer';

export const getCityName = (state: State): string => state[NameSpace.Offers].city;
export const getSelectSort = (state: State): string => state[NameSpace.Offers].sort;
