import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Groupe from "../components/groupe"

export default function Home(){
    useEffect (() => {ReactGA.pageview("LeGroupeDavidGerbier");}, []);
    return (
        <div>
            <div>
                {
                    <NavBar/>
                }
            </div>

            <div className='pt-10'>
                <Groupe/>
            </div>
                
            <div>
                <Footer/>
            </div>
        </div>
    )
}