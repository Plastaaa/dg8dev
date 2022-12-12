import React from "react";
import axios from "axios";
import AsideMenu from "./asideMenu";
import Image from "next/image";

export default class Stat extends React.Component {
    state = {
        ccs: [],
    }


    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });
    }

    componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);
        const idURL = queryParams.get('id');
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getCCDetailById.php`,{
            params:{
                id: idURL,
            }
        }).then(res => {
            const ccs = res.data;
            this.setState({ ccs });
        });

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllVisualsByCC.php`,{
            params:{
                id: idURL,
            }
        }).then(res => {
            const imgCC = res.data;
            this.setState({ imgCC });
        });
    }

    render(){
        return (
            <div>
                <div className='flex flex-wrap'>
                    <div className='w-2/12'>
                        <AsideMenu/>
                    </div>
                    <div className="w-10/12">
                        {
                            this.state.ccs.map(cc => 
                                
                            <div className="pt-8">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Modifier le véhicule {cc.idCC}</h2>
                                <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{cc.marque + " " + cc.modele}.</p>
                                <div className="py-2 lg:py-2 px-4 mx-auto max-w-screen-md">
                                    <div className="flex flex-wrap">
                                        <div className="w-1/6 pt-4 px-4 py-2">
                                            <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ref</label>
                                            <div className="flex">
                                                <input type="text" id="ref" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ref" name="ref" onChange={this.stateChange} value={cc.idCC} required/>
                                            </div>
                                        </div>
                                        <div className="w-2/6 pt-4 px-4 py-2">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Marque</label>
                                            <input type="text" id="mail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Marque" name="marque" onChange={this.stateChange} value={this.s} required/>
                                        </div>
                                        <div className="w-3/6 pt-4 px-4 py-2">
                                            <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Modèle</label>
                                            <input type="text" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Modele" name="model" onChange={this.stateChange} value={cc.modele} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kilométrage</label>
                                            <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Kilometrage" name="km" onChange={this.stateChange} value={cc.kilometrage} required/>
                                        </div>
                                        <div className="w-2/6 pt-4 px-4 py-2">
                                            <label htmlFor="codepostal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Version</label>
                                            <input type="text" id="codepostal" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Version" name="ver" onChange={this.stateChange} value={cc.version} required/>
                                        </div>
                                        <div className="w-3/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Boite de vitesse</label>
                                            <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="BDV" name="bdv" onChange={this.stateChange} value={cc.bdv} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prix TTC</label>
                                            <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Prix TTC" name="prix" onChange={this.stateChange} value={cc.prixTTC} required/>
                                        </div>

                                        {
                                            //TODO
                                        }
                                        <div className="w-2/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Etat</label>
                                            <select value={cc.etat} onChange={this.handleChange} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="etat" required>
                                                <option key={0}>Choix de l'état</option>
                                                <option key={1}>Neuf</option>
                                                <option key={2}>Occasion</option>
                                            </select>
                                        </div>
                                        <div className="w-3/12 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Famille</label>
                                            <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Famille" name="famille" onChange={this.stateChange} value={cc.famille} required/>
                                        </div>
                                        <div className="w-1/4 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gamme</label>
                                            <select value={cc.gamme} onChange={this.handleChangeGamme} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="etat" required>
                                                <option key={0}>Choisir la gamme</option>
                                                <option key={1}>Intégral</option>
                                                <option key={2}>Profile</option>
                                                <option key={3}>Capucine</option>
                                                <option key={4}>Fourgon</option>
                                                <option key={5}>Van</option>
                                                <option key={6}>Caravane</option>
                                            </select>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Année</label>
                                            <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Année" name="annee" onChange={this.stateChange} value={cc.annee} required/>
                                        </div>
                                        {
                                            //TODO
                                        }
                                        <div className="w-1/4 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Première main</label>
                                            <select value={cc.premmain} onChange={this.handleChangePremMain} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="etat" required>
                                                <option key={0}>Première main</option>
                                                <option value={1} key={1}>Oui</option>
                                                <option value={0} key={2}>Non</option>
                                            </select>                    
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Portes</label>
                                            <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Portes" name="nbportes" onChange={this.stateChange} value={cc.nbPortes} required/>
                                        </div>
                                        <div className="w-5/12 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Porteur</label>
                                            <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Porteur" name="porteur" onChange={this.stateChange} value={cc.porteur} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Puissance fiscale</label>
                                            <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Puissance Fiscale" name="puissfisc" onChange={this.stateChange} value={cc.puissFisc} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Puissance DIN</label>
                                            <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Puissance DIN" name="puissdin" onChange={this.stateChange} value={cc.puissDin} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cylindrée (cm3)</label>
                                            <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="2200" name="cyl" onChange={this.stateChange} value={cc.cylindre} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Places carte grises</label>
                                            <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Places CG" name="placeCG" onChange={this.stateChange} value={cc.placeCG} required/>
                                        </div>
                                        <div className="w-2/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Energie</label>
                                            <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Energie" name="energie" onChange={this.stateChange} value={cc.energie} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hauteur</label>
                                            <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Hauteur 2.34" name="haut" onChange={this.stateChange} value={cc.hauteur} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Largeur</label>
                                            <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Largeur 2.14" name="larg" onChange={this.stateChange} value={cc.largeur} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Longueur</label>
                                            <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Longueur 6.99" name="long" onChange={this.stateChange} value={cc.longueur} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Poids à vide (kg)</label>
                                            <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Poids à vide" name="pdsVide" onChange={this.stateChange} value={cc.poidsVide} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Poids en charge (kg)</label>
                                            <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Poids en charge" name="pdsCharge" onChange={this.stateChange} value={cc.poidsCharge} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Eau propre</label>
                                            <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Reservoir propre" name="resPro" onChange={this.stateChange} value={cc.reservoirPropre} required/>
                                        </div>
                                        <div className="w-1/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Eau usée</label>
                                            <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Reservoir eau usée" name="resUsed" onChange={this.stateChange} value={this.state.reservoirSale} required/>
                                        </div>
                                        <div className="w-5/6 pt-4 px-4">
                                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type lit</label>
                                            <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Type de lit" name="lit" onChange={this.stateChange} value={this.state.typeLit} required/>
                                        </div>
                                        <div className="pt-4 px-4 flex w-full">
                                            {
                                                // Test d'import fichier random
                                                <div className="">
                                                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Section photos</h2>
                                                    <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Pensez à bien ajouter chaque photo une par une.</p>
                                                    <div className="flex flex-wrap">
                                                        {
                                                            this.state.imgCC.map((img) => (
                                                                <div className="flex flex-wrap">
                                                                        <div className="w-1/2">
                                                                            {/*Import 1*/}
                                                                            <div className="">
                                                                                <div className=''>
                                                                                    <input type="file" onChange={this.onFileChange1} className={"bg-gray-200 text-black p-4 rounded-lg"}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="w-1/2">
                                                                            {/*Import 1*/}
                                                                            <div className="flex justify-end">
                                                                                <div className=''>
                                                                                    <Image src={img.linkIMG} objectFit={"cover"} height={50} width={100}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            ))
                                                        }                                           
                                                    </div>
                                                    {
                                                        //<ImportPhoto/>
                                                    }
                                                </div>
                                            }
                                        </div>
                                        <div className="w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-full pt-4 px-4 py-4">
                                            <div className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                <button onClick={this.onFileUploadAll} className="w-full">Envoyer les photos</button>
                                            </div>
                                        </div>
                                        <div className="w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-full pt-4 px-4 py-4">
                                            <div className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                <button onClick={this.stateSend} className="w-full">Envoyer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        
        )
    }
}