import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { NameSpace } from '../reducer';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.User].isDataLoaded;
export const getUsername = (state: State): string => state[NameSpace.User].username;
