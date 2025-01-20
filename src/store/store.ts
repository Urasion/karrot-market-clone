import { atom } from 'jotai';
import { Item, UserInfo } from '../constant/type';
type Modal = {
  isOpen: boolean;
  type: string;
  data?: any[];
};
export const modalAtom = atom<Modal>({
  isOpen: false,
  type: 'QR',
});

export const userInfo = atom<UserInfo>({
  id: '123',
  name: 'jjw',
  place: {
    si: '서울특별시',
    gu: '강남구',
  },
  items: [] as Item[],
});
