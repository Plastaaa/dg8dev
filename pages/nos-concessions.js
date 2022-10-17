import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Concessions from '../components/concessions'

export default function Home(){
    useEffect (() => {ReactGA.pageview("Nos Concessions");}, []);
    return (
        <div>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div className='pt-10'>
                <Concessions/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}