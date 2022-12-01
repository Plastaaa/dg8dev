import AsideMenu from './asideMenu'
import React from 'react'
import axios from 'axios';
import AddCC from './addCC'
import Cookies from 'universal-cookie';
import Image from "next/image";
import { slugify } from '../../utils/helpers'

export default class Calendar extends React.Component {

    componentDidMount(){
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllParticipants.php`)
        .then(res => {
            const participants = res.data;
            this.setState({ participants });
        })
    }

    state = {
        participants: [],
    }

    render(){
        const cookies = new Cookies();
        var idcc = cookies.get('logId');
        return(
            <div>
                <div className='flex flex-wrap'>
                    <div className='w-2/12'>
                        <AsideMenu/>
                    </div>
                    
                    <div className='w-10/12 pl-4 pt-4'>
                        
                        <div className="overflow-x-auto p-8">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Identifiant</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>E-mail</th>
                                    <th>Tel</th>
                                    <th>Code postal</th>
                                    <th>Réponse</th>
                                    <th>Jour</th>
                                    <th>Mois</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.participants.map(user =>
                                        <tr className='hover'>
                                            <td>{user.id}</td>
                                            <td>{user.nom}</td>
                                            <td>{user.prenom}</td>
                                            <td>{user.mail}</td>
                                            <td>{"0" + user.tel}</td>
                                            <td>{user.postal}</td>
                                            <td>{user.rep}</td>
                                            <td>{user.jour}</td>
                                            <td>{user.mois}</td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>                   
                    </div>
                </div>
            </div>
        )
    }
}