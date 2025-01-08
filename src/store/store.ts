import { atom } from 'jotai';
type Modal = {
  isOpen: boolean;
  type: string;
  data?: any[];
};
export const modalAtom = atom<Modal>({
  isOpen: false,
  type: 'QR',
});
