import '../styles/globals.css'
import LogRocket from 'logrocket'
LogRocket.init('6xe330/dg8-cc');

function MyApp({ Component, pageProps }) {
  return <>
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

    <meta name="description" content="DG8Camping-car est un site officiel du groupe David Gerbier proposant des véhicules neufs et d'occasions dans toutes les gammes."/>
    <title>DG8 Camping-car</title>
    <div>
      {
        //<Navbar/>
      }
    </div>

    <Component {...pageProps}/>

    <div>
      {
        //<Footer/>
      }
      
    </div>
  </>
}

export default MyApp