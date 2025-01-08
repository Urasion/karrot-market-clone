import { Outlet } from 'react-router-dom';
import ModalProvider from '../modals/ModalProvider';

export default function RootLayout() {
  return (
    <>
      <ModalProvider />
      <div className="w-full h-full flex">
        <Outlet />
      </div>
    </>
  );
}
