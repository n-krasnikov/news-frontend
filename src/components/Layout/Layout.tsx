import { type FC } from 'react';
import { Outlet } from "react-router-dom";

import { Header } from '../Header';
import { BaseModal } from '../BaseModal';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <BaseModal />
      <Outlet />
    </>
  );
}
