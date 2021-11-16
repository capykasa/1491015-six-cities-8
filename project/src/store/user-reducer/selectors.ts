import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { NameSpace } from '../reducer';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.user].isDataLoaded;
export const getUsername = (state: State): string => state[NameSpace.user].username;
