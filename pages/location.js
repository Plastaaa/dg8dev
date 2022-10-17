import NavBar from '../components/navbar'
import Footer from '../components/footer'
import ContactLoc from "../components/contactLoc"

export default function Home(){
    useEffect (() => {ReactGA.pageview("Location");}, []);
    return (
        <div className='h-screen'>
            <div>
                <NavBar/>
            </div>
            <section>
                <ContactLoc/>
            </section>
            <div>
                <Footer/>
            </div>
        </div>
    )
}