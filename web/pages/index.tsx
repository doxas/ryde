
import {useState, useEffect} from 'react';
import type {NextPage} from 'next';

import Meta from '../component/Meta/Meta';
import Layout from '../component/Layout/Layout';

const Home: NextPage = () => {
  const [dark, setDark] = useState<Boolean>(false);

  useEffect(() => {
    const darken = localStorage.getItem('dark');
    const isDark = (darken === 'true');
    setDark(isDark);

    window.addEventListener('keydown', () => {
      const isDark = !(dark === true);
      setDark(isDark);
      localStorage.setItem('dark', `${isDark}`);
    }, {once: true});
  }, []);

  const wrap = (
    <>{dark ? 'dark' : 'light'}</>
  );
  const layer = (
    <>hoge</>
  );

  return (
    <>
      <Meta
        title={'ryde'}
        description={'ryde - live'}
      />
      <Layout
        children={wrap}
        layer={layer}
      />
    </>
  );
};

export default Home;
