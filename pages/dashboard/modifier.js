import ModifVehiculeUnique from '../../components/dashboard/modifVu'
import Cookies from 'universal-cookie';
import Connexion from '../../components/dashboard/connexion';
import React from 'react';

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
        <ModifVehiculeUnique/>
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