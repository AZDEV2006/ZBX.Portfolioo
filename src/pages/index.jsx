import Head from 'next/head'
import Main from '@/pages/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import '../styles/index.css';
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Head>
        <title>PortFolio</title>
        <meta name="description" content="Nattapat Lor Mak Mak" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="App">
        <Main></Main>
      </div>
    </>
  )
}
