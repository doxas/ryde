
import type {NextPage} from 'next';

import Meta from '../component/Meta/Meta';
import Layout from '../component/Layout/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Meta
        title={'ryde'}
        description={'ryde - live'}
      />
      <div>
        <Layout>hoge</Layout>
      </div>
    </>
  );
};

export default Home;
