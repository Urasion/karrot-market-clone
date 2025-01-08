import { useAtom } from 'jotai';
import { modalAtom } from '../store/store';
type Modal = {
  isOpen: boolean;
  type: string;
  data?: any[];
};
export default function useModal() {
  const [modal, setModal] = useAtom<Modal>(modalAtom);

  const useQRModal = () => {
    setModal({ isOpen: true, type: 'QR' });
  };
  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };
  return { modal, useQRModal, closeModal };
}
