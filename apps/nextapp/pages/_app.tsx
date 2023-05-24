// import { AppProps } from 'next/app';
// import Head from 'next/head';
// import './styles.css';

// function CustomApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Head>
//         <title>Welcome to nextapp!</title>
//       </Head>
//       <main className="app">
//         <Component {...pageProps} />
//       </main>
//     </>
//   );
// }

// export default CustomApp;

import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';

import './styles.css';

const TrpcDemoApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(TrpcDemoApp);
