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
        participGg: [],
    }

    stateSort(){
        //console.log(this.state.reponse)
        console.log(this.state.jour)
    }

    handleChange = (e) => {
        this.setState({ jour: e.target.value });
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });
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
                        <div className='flex flex-wrap'>
                            <div className="w-2/5 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tirer au sort</label>
                                <button onClick={this.stateSort} type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-green-800 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-green-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" name="tirer" onChange={this.stateChange} required>Tirer au sort</button>
                            </div>
                            <div className="w-2/5 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">La réponse :</label>
                                <input value={this.state.reponse} onChange={this.stateChange} type="text" id="reponse" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="reponse" required/>
                            </div>
                            <div className="w-1/5 pt-4 px-4">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jour</label>
                                <select value={this.state.jour} onChange={this.handleChange} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="jour" required>
                                    <option key={0}>Choix du jour</option>
                                    <option key={1}>1</option>
                                </select>
                            </div>
                        </div>
                        <div className="overflow-x-auto py-4 px-10">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>E-mail</th>
                                    <th>Tel</th>
                                    <th>Code postal</th>
                                    <th>Réponse</th>
                                    <th>Jour</th>
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