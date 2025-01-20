export type UserInfo = {
  id: string;
  name: string;
  place: Place;
  items: Item[];
};

export type Item = {
  id: string;
  name: string;
  price: number;
};

export type Place = {
  do?: string;
  si?: string;
  gu?: string;
};
