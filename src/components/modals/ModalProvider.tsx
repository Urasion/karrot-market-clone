import useModal from '../../hooks/useModal';
import PlaceModal from './PlaceModal';
import QrModal from './QrModal';

export default function ModalProvider() {
  const { modal, closeModal } = useModal();
  return (
    <>
      <QrModal
        isOpen={modal.type === 'QR' && modal.isOpen}
        closeModal={closeModal}
      />
      <PlaceModal
        isOpen={modal.type === 'Place' && modal.isOpen}
        closeModal={closeModal}
      />
    </>
  );
}
