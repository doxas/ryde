
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
      <div className="full">
        <Layout
          children="hoge"
          layer="fuga"
        />
      </div>
    </>
  );
};

export default Home;
