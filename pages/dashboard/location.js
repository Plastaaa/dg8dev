import Cookies from 'universal-cookie';
import Connexion from '../../components/dashboard/connexion';
import React from 'react';
import LocationAdmin from '../../components/dashboard/location'
import AsideMenuBis from '../../components/dashboard/asideMenu';

function IsLogged(props){
    const cook = props.cookiee;
    if(cook == "true"){
        return (
            <Logged/>
        )
    }
    return (
        <NotLogged/>
    )
}
function Logged(){
    return (
        <div className='flex'>
            <div className='w-2/12'>
                <AsideMenuBis/>
            </div>
            <div className='w-10/12'>
                <LocationAdmin/>
            </div>
        </div>
    )
}
function NotLogged(){
    return (
        <div>
            {
                <Connexion/>
            }
        </div>
    )
}

export default class CampingCar extends React.Component {
    render(){
        const cookies = new Cookies();
        console.log(cookies.get('logging'))
        return(
            <div>
                <IsLogged cookiee={cookies.get('logging')}/>
            </div>
        )
    }
}