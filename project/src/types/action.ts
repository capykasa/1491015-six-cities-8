export enum ActionType {
  SelectCity = 'main/selectCity',
  SelectSort = 'main/selectSort',
  SelectOffersByCity = 'main/SelectOffersByCity',
}

export type SelectCity = {
  type: ActionType.SelectCity;
  payload: string;
};

export type SelectSort = {
  type: ActionType.SelectSort;
  payload: string;
};

export type SelectOffersByCity = {
  type: ActionType.SelectOffersByCity;
};

export type Actions =
  | SelectCity
  | SelectSort
  | SelectOffersByCity;
