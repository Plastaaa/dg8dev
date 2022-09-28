import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
import rachat from '../public/rachatcash.jpg'

export default function Home(){
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div className='p-8'>
                <Image src={rachat} />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}