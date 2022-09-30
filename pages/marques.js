import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Marques from '../components/nosMarques'

export default function Home(){
    return (
        <div>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div>
                <Marques/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}