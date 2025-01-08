import QRIcon from '../icons/QRIcon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/Dialog';

type Props = {
  isOpen: boolean;
  data?: any[];
  closeModal: () => void;
};
export default function QrModal({ isOpen, data, closeModal }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="bg-black border-0 text-white">
        <DialogHeader>
          <DialogTitle>QR 코드 스캔</DialogTitle>
          <DialogDescription className="flex flex-col justify-center items-center space-y-10">
            <span className="text-2xl font-bold">당근 앱으로 열기</span>
            <QRIcon />
            <section className="flex flex-col items-center">
              <span>모바일에서만 이용할 수 있어요.</span>
              <span>
                휴대전화의 카메라 또는 당근 앱으로 QR코드를 촬영해주세요.
              </span>
            </section>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
