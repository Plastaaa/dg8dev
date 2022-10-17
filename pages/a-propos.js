import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Home(){
    useEffect (() => {ReactGA.pageview("A-propos");}, []);
    return (
        <div>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}