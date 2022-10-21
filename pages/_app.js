import '../styles/globals.css'
import LogRocket from 'logrocket'
LogRocket.init('6xe330/dg8-cc');
import ReactGA from 'react-ga';
import React, { useEffect } from 'react';
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

    <title>DG8 Camping-car</title>
    <Component {...pageProps}/>
    <div>
      <Tidio>
      </Tidio>
    </div>
  </>
}

export default MyApp