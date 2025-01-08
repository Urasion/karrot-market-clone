import useModal from '../../hooks/useModal';
import QrModal from './QrModal';

export default function ModalProvider() {
  const { modal, closeModal } = useModal();
  return (
    <>
      <QrModal
        isOpen={modal.type === 'QR' && modal.isOpen}
        closeModal={closeModal}
      />
    </>
  );
}
