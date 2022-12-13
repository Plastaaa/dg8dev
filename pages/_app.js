import '../styles/globals.css'
import LogRocket from 'logrocket'
LogRocket.init('6xe330/dg8-cc');
import ReactGA from 'react-ga';
import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
const TRACKING_ID = "UA-155362359-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const Tidio = React.lazy(() => import('../components/tidio'));
const ScriptImport = React.lazy(() => import('../components/scriptImport'))

function MyApp({ Component, pageProps }) {  
  return <>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>



    
    
    <div className="alert alert-warning shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span>Nous sommes désolés pour la gêne occasionnée, nous sommes en maintenance.</span>
      </div>
    </div>
    <Component {...pageProps}/>
    <div>
      <Tidio>
      </Tidio>
    </div>
    
  </>
}

export default MyApp