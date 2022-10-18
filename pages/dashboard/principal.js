import AsideMenu from '../../components/dashboard/asideMenu'
import Stat from '../../components/dashboard/statDash'

export default function Principal(){
    //const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    return (
        <div>
            <div className='text-center bg-gray-50'>
                <h2>Panel d'administration</h2>
            </div>
            <div className='flex'>
                <div>
                    <AsideMenu/>
                </div>
                <div className='item-center'>
                    <Stat/>
                </div>                    
            </div>
        </div>
        
    )
}