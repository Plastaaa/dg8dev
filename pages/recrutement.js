import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Recrutement from '../components/recrutement'

export default function Home(){
    useEffect (() => {ReactGA.pageview("Recrutement");}, []);
    return (
        <div>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div>
                <Recrutement/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}