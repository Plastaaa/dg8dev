import FormConnexion from "../components/formConnexion"
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Home(){
    return (
        <div>
            <div>
                {
                    <NavBar/>
                }
            </div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <FormConnexion/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}