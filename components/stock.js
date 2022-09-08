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
        axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getAllCC.php`, {
          auth: {
            username: 'admin-dev',
            password: 'mdpTropSEcU51-561'
          }
        })
          .then(res => {
            const ccs = res.data;
            this.setState({ ccs });
          });

          axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getAllMarque.php`)
          .then(res => {
            const brands = res.data;
            this.setState({ brands });
          });

          axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getAllCCDstctGamme.php`)
          .then(res => {
            const gammes = res.data;
            this.setState({ gammes });
          });

          axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getAllCCDstctEtat.php`)
          .then(res => {
            const etats = res.data;
            this.setState({ etats });
          });

          axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getAllCCDstctPorteur.php`)
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
      axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getCCByParam.php`,{
        params:{
          marque: this.state.marque,
          annee: this.state.year,
          gamme: this.state.gamme,
          etat: this.state.etat,
          ref: this.state.ref,
          porteur: this.state.porteur,
          placeCG: this.state.placeCG,
          prixMin: this.state.prixMin,
          prixMax: this.state.prixMax,
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
        <div>
          <div className="flex flex-wrap overflow-hidden py-12 px-8 sm:px-16 md:px-52 xl:px-96">
            <div className="w-full overflow-hidden">
              <h1 className="text-center text-2xl">
                Rechercher : 
              </h1>
            </div>

            <div className="w-full overflow-hidden">
              <div className="flex flex-wrap -mx-1 overflow-hidden">

                <div className="my-1 px-1 w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                  <form>
                    <label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="marque" onChange={this.stateChange}>
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

                <div className="my-1 px-1 w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                  <input placeholder="Année" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" type="text" name="year" onChange={this.stateChange}/>
                </div>

                <div class="my-1 px-1 w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                  <form>
                    <label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="gamme" onChange={this.stateChange}>
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

                <div className="my-1 px-1 w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                  <form>
                    <label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="etat" onChange={this.stateChange}>
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
                <div className="my-1 px-1 w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                  <form>
                    <label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="porteur" onChange={this.stateChange}>
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

                <div className="my-1 px-1 w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                  <input placeholder="Places carte grise" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" type="text" name="placeCG" onChange={this.stateChange}/>
                </div>
                
                <div className="my-1 px-1 w-1/4 overflow-hidden sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4">
                  <input placeholder="Prix minimal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" type="text" name="prixMin" onChange={this.stateChange}/>
                </div>

                <div className="my-1 px-1 w-1/4 overflow-hidden sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4">
                  <input placeholder="Prix maximal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" type="text" name="prixMax" onChange={this.stateChange}/>
                </div>

                <div className="my-1 px-1 w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                  <input placeholder="Réference" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" type="text" name="ref" onSubmit={this.stateChange} onChange={this.stateChange}/>
                </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 w-full rounded-lg" onClick={this.stateSend}>
                    Rechercher
                  </button>
              </div>
            </div>
          </div>
        {
            <div className="container mx-auto">
                  
                    {
                      <IsSearch affiche={this.state.affiche} ccs={this.state.ccs2}/>
                    }
            </div>
        }
        </div>
      );
    }
  }
