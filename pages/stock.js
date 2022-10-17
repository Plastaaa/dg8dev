import Stock from "../components/stock"
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Home(){
    useEffect (() => {ReactGA.pageview("Stock");}, []);
    return (
        <div>
            <NavBar/>
            <Stock/>
            <Footer/>
        </div>
    )
}