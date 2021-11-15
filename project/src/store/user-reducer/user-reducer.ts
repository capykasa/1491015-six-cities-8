import { AuthorizationStatus } from '../../const';
import { ActionType, Actions } from '../../types/action';
import { User } from '../../types/state';

const initialState: User = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  username: '',
};

const userReducer = (state = initialState, action: Actions): User => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload, isDataLoaded: true };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    case ActionType.SetUsername:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export { userReducer };
