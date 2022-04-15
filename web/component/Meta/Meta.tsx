import Head from 'next/head';
import type {MetaData} from '../../constant/constant';

function Meta({title, description}: MetaData): JSX.Element {
  return (
    <Head>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <title>{title}</title>
    </Head>
  )
}

export default Meta;
