import AsideMenu from './asideMenu'
import React from 'react'
import axios from 'axios';
import AddCC from './addCC'
import Cookies from 'universal-cookie';
import Image from "next/image";
import { slugify } from '../../utils/helpers'

function ModalGagnant(props){

}

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

    stateSort = () => {
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getGagnant.php`,{
            params:{
                reponse: this.state.reponse,
                jour: this.state.jour,
            }
            }).then(res => {
                const participGg = res.data;
                this.setState({participGg});
            }).then(
                document.getElementById('my-modal-6').checked = true
            )
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
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-white dark:text-white">Tirer au sort</label>
                                <button onClick={this.stateSort} type="text" id="objet" className="block p-3 w-full text-sm text-white dark:text-white bg-green-800 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-green-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" name="tirer" onChange={this.stateChange} required>Tirer au sort</button>
                            </div>
                            <div className="w-2/5 pt-4 px-4">
                                <label htmlFor="reponse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">La réponse :</label>
                                <input value={this.state.reponse} onChange={this.stateChange} type="text" id="reponse" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" name="reponse" required/>
                            </div>
                            <div className="w-1/5 pt-4 px-4">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jour</label>
                                <select value={this.state.jour} onChange={this.handleChange} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="jour" required>
                                    <option key={0}>Choix du jour</option>
                                    <option key={1}>1</option>
                                    <option key={2}>2</option>
                                    <option key={2}>3</option>
                                    <option key={2}>4</option>
                                    <option key={2}>5</option>
                                    <option key={2}>6</option>
                                    <option key={2}>7</option>
                                    <option key={1}>8</option>
                                    <option key={2}>9</option>
                                    <option key={2}>10</option>
                                    <option key={2}>11</option>
                                    <option key={2}>12</option>
                                    <option key={2}>13</option>
                                    <option key={2}>14</option>
                                    <option key={2}>15</option>
                                    <option key={2}>16</option>
                                    <option key={2}>17</option>
                                    <option key={2}>18</option>
                                    <option key={1}>19</option>
                                    <option key={2}>20</option>
                                    <option key={2}>21</option>
                                    <option key={2}>22</option>
                                    <option key={2}>23</option>
                                    <option key={2}>24</option>
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
                                    {
                                        //<th>E-mail</th>
                                    }
                                    
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
                                            {
                                                //<td>{user.mail}</td>
                                            }
                                            
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
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Le gagnant du jour {this.state.jour} !</h3>
                        <p>
                            {
                                this.state.participGg.map(user =>
                                    <div>
                                        <p>
                                            Nom : {user.nom}
                                        </p>
                                        <p>
                                            Prénom : {user.prenom}
                                        </p>
                                        <p>
                                            Tel : {user.tel}
                                        </p>
                                        <p>
                                            Mail : {user.mail}
                                        </p>
                                        <p>
                                            Postal : {user.postal}
                                        </p>
                                        <p>
                                            Jour : {user.jour}
                                        </p>
                                        <p>
                                            Sa réponse : {user.rep}
                                        </p>
                                    </div>
                                )
                            }
                        </p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Compris !</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}