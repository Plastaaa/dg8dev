import '../styles/globals.css'
import LogRocket from 'logrocket'
LogRocket.init('6xe330/dg8-cc');
import ReactGA from 'react-ga';
import React from 'react';
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
    <script src="https://staging.boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/rx.min.js"></script>
    <script src="https://staging.boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/staging/ajax.js"></script>
    <link rel="stylesheet" type="text/css" href="https://staging.boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/css/export/box-auto.css"/>

    <Component {...pageProps}/>
    <div>
      <Tidio>
      </Tidio>
    </div>
  </>
}

export default MyApp