import { Outlet } from 'react-router-dom';
import ModalProvider from '../modals/ModalProvider';

export default function RootLayout() {
  return (
    <>
      <ModalProvider />
      <Outlet />
    </>
  );
}
