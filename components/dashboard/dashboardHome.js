import Cookies from 'universal-cookie';
import Connexion from '../../components/dashboard/connexion';
import React from 'react';
import AsideMenuBis from './asideMenu';
import StatDash from './dash'

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
function Logged(props){
    return (
        <div>
            <div className='flex'>
                <AsideMenuBis/>
                <StatDash/>
            </div>
        </div>
    )
}
function NotLogged(){
    return (
        <Connexion/>
    )
}

export default class DashBoardHome extends React.Component {
    render(){
        const cookies = new Cookies();
        console.log(cookies.get('logging'));
        return(
            <IsLogged cookiee={cookies.get('logging')} cookiee2={cookies.get('logId')}/>
        )
    }
}