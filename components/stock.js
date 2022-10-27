import React from "react";
import axios from 'axios';
import NoSearchMarque from "./search/searchResult";
import SearchFiltered from "./search/searchResultFiltered";

function IsSearch(props){
  const ccsBis = props.ccs;
  if(props.affiche){
      return <NoSearchMarque/>
  }
  return <SearchFiltered ccs={ccsBis}/>
}

export default class Stock extends React.Component {
    componentDidMount() {

          axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllMarque.php`)
          .then(res => {
            const brands = res.data;
            this.setState({ brands });
          });

          axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllCCDstctGamme.php`)
          .then(res => {
            const gammes = res.data;
            this.setState({ gammes });
          });

          axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllCCDstctEtat.php`)
          .then(res => {
            const etats = res.data;
            this.setState({ etats });
          });

          axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllCCDstctPorteur.php`)
          .then(res => {
            const porteurs = res.data;
            this.setState({ porteurs });
          });

          this.setState({
            affiche: true,
          });
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });
    }

    stateSend = (props) => {
      axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getCCByParam.php`,{
        params:{
          marque: this.state.marque,
          yearMin: this.state.yearMin,
          yearMax: this.state.yearMax,
          gamme: this.state.gamme,
          etat: this.state.etat,
          ref: this.state.ref,
          porteur: this.state.porteur,
          placeCG: this.state.placeCG,
          prixMin: this.state.prixMin,
          prixMax: this.state.prixMax,
          kmMin: this.state.kmMin,
          kmMax: this.state.kmMax,
        }
      })
        .then(res => {
          const ccs2 = res.data;
          this.setState({ccs2: ccs2 });
          this.setState({affiche: false});
        })
    }

    state = {
        ccs: [],
        brands: [],
        gammes: [],
        refs: [],
        etats: [],
        porteurs: [],
        affiche: true,
        ccs2: [],
    }
  
    render() {
        return (
        <div className="flex flex-wrap">
          


          <div className="w-full lg:w-1/5 pl-4 pt-4 pr-4">
          <div className="flex flex-wrap overflow-hidden border border-gray-200 rounded-lg shadow-lg">
            <div className="w-full overflow-hidden">
              <h1 className="text-center pt-4 pb-4 text-2xl font-bold">
                Rechercher : 
              </h1>
            </div>

            <div className="w-full overflow-hidden p-4">
              <div className="flex flex-wrap -mx-1 overflow-hidden">

                <div className="my-1 px-1 w-full">
                  <form>
                    <label>
                        <select className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name="marque" onChange={this.stateChange}>
                            <option value="0">Choisir la marque</option>
                            {
                                this.state.brands.map(marques => 
                                    <option value={marques.marque}>{marques.marque}</option>
                                )
                            }
                        </select>
                    </label>
                  </form>
                </div>

                <div className="my-1 px-1 w-full">
                  <form>
                    <label>
                        <select className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name="gamme" onChange={this.stateChange}>
                            <option value="0">Choisir la gamme</option>
                            {
                                this.state.gammes.map(gammes => 
                                    <option value={gammes.gamme}>{gammes.gamme}</option>
                                )
                            }
                        </select>
                    </label>
                  </form>
                </div>

                

                

                <div className="my-1 px-1 w-full">
                  <form>
                    <label>
                        <select className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name="etat" onChange={this.stateChange}>
                            <option value="0">Etat</option>
                            {
                                this.state.etats.map(etats => 
                                    <option value={etats.etat}>{etats.etat}</option>
                                )
                            }
                        </select>
                    </label>
                  </form>
                </div>

                <div className="my-1 px-1 w-1/2">
                  <input placeholder="Année min" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" type="text" name="yearMin" onChange={this.stateChange}/>
                </div>

                <div className="my-1 px-1 w-1/2">
                  <input placeholder="Année max" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" type="text" name="yearMax" onChange={this.stateChange}/>
                </div>

                

                <div className="my-1 px-1 w-full">
                  <form>
                    <label>
                        <select className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name="porteur" onChange={this.stateChange}>
                            <option value="0">Choix du porteur</option>
                            {
                                this.state.porteurs.map(porteur => 
                                    <option value={porteur.marqueMoteur}>{porteur.marqueMoteur}</option>
                                )
                            }
                        </select>
                    </label>
                  </form>
                </div>

                
                
                <div className="my-1 px-1 w-1/2">
                  <input placeholder="Prix minimal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" type="text" name="prixMin" onChange={this.stateChange}/>
                </div>

                <div className="my-1 px-1 w-1/2">
                  <input placeholder="Prix maximal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" type="text" name="prixMax" onChange={this.stateChange}/>
                </div>

                <div className="my-1 px-1 w-1/2">
                  <input placeholder="KM min" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" type="text" name="kmMin" onChange={this.stateChange}/>
                </div>

                <div className="my-1 px-1 w-1/2">
                  <input placeholder="KM max" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" type="text" name="kmMax" onChange={this.stateChange}/>
                </div>

                <div className="my-1 px-1 w-1/2">
                  <input placeholder="Places carte grise" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" type="text" name="placeCG" onChange={this.stateChange}/>
                </div>
                <div className="my-1 px-1 w-1/2">
                  <input placeholder="Réference" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" type="text" name="ref" onSubmit={this.stateChange} onChange={this.stateChange}/>
                </div>
                
                <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 w-full rounded-lg" onClick={this.stateSend}>
                  Rechercher
                </button>
              </div>
            </div>
          </div>
          </div>
          
        {
            <div className="container mx-auto w-full lg:w-4/5">
              {
                <IsSearch affiche={this.state.affiche} ccs={this.state.ccs2}/>
              }
            </div>
        }
      
        </div>
      );
    }
  }
