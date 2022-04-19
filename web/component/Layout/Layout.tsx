
import { useState, useEffect } from 'react';
import style from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
  layer: React.ReactNode;
};

function Layout({children, layer}: LayoutProps): JSX.Element {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const darken = localStorage.getItem('dark');
    const isDark = (darken === 'true');
    setDark(isDark);
  }, []);

  const onClick = () => {
    const isDark = !(dark === true);
    setDark(isDark);
    localStorage.setItem('dark', `${isDark}`);
  };

  return (
    <>
      <div className={`${style.wrapper} ${(dark === true) ? style.dark : style.light}`} onClick={onClick}>
        {children}
      </div>
      <div className={style.layer}>
        {layer}
      </div>
    </>
  );
}

export default Layout;
