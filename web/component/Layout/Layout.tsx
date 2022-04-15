/* eslint-disable @next/next/no-img-element */

import {useState, useEffect, useRef} from 'react';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({children}: LayoutProps): JSX.Element {
  return (
    <>
      <div className={styles.layer}>
        hoge
      </div>
    </>
  );
}

export default Layout;
