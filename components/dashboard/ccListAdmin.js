import AsideMenu from './asideMenu'
import React from 'react'
import axios from 'axios';
import AddCC from './addCC'

export default class ListCCAdmin extends React.Component {

    componentDidMount(){
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllCC.php`)
        .then(res => {
            const ccs = res.data;
            this.setState({ ccs });
        });
    }

    state = {
        ccs: [],
        isComponentVisible: false,
        isTableVisible: true,
    }

    stateModif = () => {
        console.log(this.state.nom)
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });

        this.setState({ 
            isComponentVisible: !this.state.isComponentVisible 
        }); 

        this.setState({
            isTableVisible: !this.state.isTableVisible
        })

        this.stateModif();
    }

    render(){
        return(
            <div>
                <div className='flex flex-wrap'>
                    <div className='w-2/12'>
                        <AsideMenu/>
                    </div>
                    
                    <div className='w-10/12 pl-4 pt-4'>
                        <button onClick={this.stateChange} type="button" class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Ajouter un camping-car
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                        {this.state.isComponentVisible ? <AddCC/> : null} 
                        {
                            this.state.isTableVisible ? 
                            <div className="overflow-x-auto p-8">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Ref DBS</th>
                                        <th>Concession</th>
                                        <th>Marque</th>
                                        <th>Modele</th>
                                        <th>Boite de vitesse</th>
                                        <th>Gamme</th>
                                        <th>Année</th>
                                        <th>Prix TTC</th>
                                        {
                                            //<th></th>
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.ccs.map(cc =>
                                            <tr className='hover'>
                                                <td>{cc.RefDMS}</td>
                                                <td>{cc.libelle}</td>
                                                <td>{cc.marque}</td>
                                                <td>{cc.modele}</td>
                                                <td>{cc.boitedevitesse}</td>
                                                <td>{cc.gamme}</td>
                                                <td>{cc.année}</td>
                                                <td>{cc.prixTTC}</td>
                                                {/*
                                                    <td>
                                                        <button id='nom' name='nom' value={cc.RefDMS} onClick={this.stateChange} className='bg-red-500 rounded-lg p-2 text-white line-through'>
                                                            Modifier
                                                        </button>
                                                        <button>
                                                            Supprimer
                                                        </button>
                                                    </td>*/
                                                }
                                                
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                             : null
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}