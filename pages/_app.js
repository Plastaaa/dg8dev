import '../styles/globals.css'
import LogRocket from 'logrocket'
LogRocket.init('6xe330/dg8-cc');

function MyApp({ Component, pageProps }) {
  return <>
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />

    <meta name="description" content="DG8Camping-car est un site officiel du groupe David Gerbier proposant des véhicules neufs et d'occasions dans toutes les gammes."/>
    <title>DG8 Camping-car</title>
    <div>
      {
        //<Navbar/>
      }
    </div>
    <Component {...pageProps}/>
    <div>
      <div className="toast toast-end">
        <script src="//code.tidio.co/nb4oopnrsjljbfmnow1aizxexoz2q1gg.js" async></script>
      </div>
      {
        //<Footer/>
      }
      
    </div>
  </>
}

export default MyApp