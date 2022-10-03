import '../styles/globals.css'
import LogRocket from 'logrocket'
LogRocket.init('6xe330/dg8-cc');

function MyApp({ Component, pageProps }) {
  return <>
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>

    <meta name="description" content="DG8Camping-car est un site officiel du groupe David Gerbier proposant des véhicules neufs et d'occasions dans toutes les gammes."/>
    <title>DG8 Camping-car</title>
    <Component {...pageProps}/>
    <div>
      <div className="toast toast-end">
        <script src="//code.tidio.co/nb4oopnrsjljbfmnow1aizxexoz2q1gg.js" async></script>
      </div>
    </div>
  </>
}

export default MyApp