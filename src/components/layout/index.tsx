import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "components/sidebar";

import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar/>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
