import React from "react";
import axios from 'axios';
import NoSearchMarque from "./search/searchResult";
import SearchFiltered from "./search/searchResultFiltered";
import phoneIMG from '../public/phone.png'
import whitephoneIMG from '../public/whitephone.png'
import Image from "next/image";

function IsSearch(props){
  const ccsBis = props.ccs;
  if(props.affiche){
      return <NoSearchMarque/>
  }
  return <SearchFiltered ccs={ccsBis}/>
}

function IsStock(props){
  console.log(props.ccs.length)
  const ccsBis = props.ccs;
  if(props.ccs.length == 0){
    return(
      <div className="text-center">
        <h2 className="text-center pt-16 font-bold">
          Il semblerait qu'il n'y ait rien pour cette demande.
        </h2>
        <p className="pb-2">
          Vous pouvez toujours nous appeler, nous pourrons vous orienter vers le modèle parfait pour vos besoins : 
        </p>
        <button className="px-2 py-2 text-white font-bold rounded-xl bg-green-700">
          <a href="tel:+33 0969396973">
            <button className='flex flex-wrap rounded-lg'>
                <div className='w-2/8 px-1 pt-0.5'>
                    <div className='block dark:hidden'>
                        <Image height={16} width={16} src={phoneIMG} objectFit={"contain"} alt={"Phone logo"} className={"px-4"}/>
                    </div>
                    <div className='hidden dark:block'>
                        <Image height={16} width={16} src={whitephoneIMG} objectFit={"contain"} alt={"Phone logo dark"} className={"px-4"}/>
                    </div>
                </div>
                <div className='w-6/8'>
                    09 69 39 69 73
                </div>
            </button>
          </a>
        </button>
      </div>
    )
  }/*else{
    return(

    )
  }*/
}

export default class Stock extends React.Component {
  state = {
    isComponentVisible: false,
  }
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

          axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getConcess.php`)
          .then(res => {
            const concess = res.data;
            this.setState({ concess });
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

        this.setState({ 
          isComponentVisible: !this.state.isComponentVisible 
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
          concess: this.state.concession,
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
        concess: [],
    }
  
    render() {
        return (
          <div>
            <h2 className="lg:text-xs pt-4 text-xs font-semibold lg:leading-6 leading-7 text-gray-400 text-center dark:text-white">
              Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager
            </h2>
            <div className="flex flex-wrap">
          <div className="w-full lg:w-1/5 px-16 pt-8 pb-8 md:px-48 md:pt-8 md:pb-8 lg:pl-4 lg:pt-4 lg:pr-4">
          <div className="sticky top-6 flex flex-wrap overflow-hidden border border-gray-200 rounded-lg shadow-lg">
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
{/*
                <button onClick={this.stateChange} type="button" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  Voir plus de critères 
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                {this.state.isComponentVisible ? <AddCC/> : null} 
                          */}

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

                <div className="my-1 px-1 w-full">
                  <form>
                    <label>
                        <select className="dropdown bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name="concession" onChange={this.stateChange}>
                            <option value="0">Choisir la concession</option>
                            {
                                this.state.concess.map(concess => 
                                    <option value={concess.libelle}>{"(" + concess.postal + ") " + concess.libelle}</option>
                                )
                            }
                        </select>
                    </label>
                  </form>
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
              {
                <IsStock ccs={this.state.ccs2}/>
              }
            </div>
        }
      
        </div>
          </div>
      );
    }
  }
