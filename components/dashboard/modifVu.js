import React from "react"
import axios from "axios";
import Cookies from "universal-cookie"; 
import AsideMenu from "./asideMenu";

export default class ModifVu extends React.Component {

    componentDidMount(){
        const queryParams = new URLSearchParams(window.location.search);
        const idURL = queryParams.get('id');
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getCCDetailById.php`,{
            params:{
                id: idURL,
            }
        }).then(res => {
            const ccs = res.data;
            this.setState({ ccs });
            console.log(ccs[0]);

            try {this.setState({ref: ccs[0].idCC})} catch (error) {}
            try {this.setState({marque: ccs[0].marque})} catch (error) {}
            try {this.setState({model: ccs[0].modele})} catch (error) {}
            try {this.setState({ver: ccs[0].version})} catch (error) {}
            try {this.setState({km: ccs[0].kilometrage})} catch (error) {}
            try {this.setState({bdv: ccs[0].bdv})} catch (error) {}
            try {this.setState({prix: ccs[0].prixTTC})} catch (error) {}
            try {this.setState({annee: ccs[0].annee})} catch (error) {}
            try {this.setState({nbportes: ccs[0].nbPortes})} catch (error) {}
            try {this.setState({couchage: ccs[0].nbCouchage})} catch (error) {}
            try {this.setState({porteur: ccs[0].porteur})} catch (error) {}
            try {this.setState({puissfisc: ccs[0].puissFisc})} catch (error) {}
            try {this.setState({puissdin: ccs[0].puissDin})} catch (error) {}
            try {this.setState({cyl: ccs[0].cylindre})} catch (error) {}
            try {this.setState({placeCG: ccs[0].placeCG})} catch (error) {}
            try {this.setState({haut: ccs[0].hauteur})} catch (error) {}
            try {this.setState({larg: ccs[0].largeur})} catch (error) {}
            try {this.setState({long: ccs[0].longueur})} catch (error) {}
            try {this.setState({pdsVide: ccs[0].poidsVide})} catch (error) {}
            try {this.setState({pdsCharge: ccs[0].poidsCharge})} catch (error) {}
            try {this.setState({resPro: ccs[0].reservoirPropre})} catch (error) {}
            try {this.setState({resUsed: ccs[0].reservoirSale})} catch (error) {}
            try {this.setState({lit: ccs[0].typeLit})} catch (error) {}
            try {this.setState({energie: ccs[0].energie})} catch (error) {}
        })

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getCCEquipById.php`,{
                params:{
                    id: idURL,
                }
            }).then(res2 => {
                const equip = res2.data;
                try {this.setState({ equip1: equip[0].libelle})} catch (error) {}
                try {this.setState({ equip2: equip[1].libelle})} catch (error) {}
                try {this.setState({ equip3: equip[2].libelle})} catch (error) {}
                try {this.setState({ equip4: equip[3].libelle})} catch (error) {}
                try {this.setState({ equip5: equip[4].libelle})} catch (error) {}
                try {this.setState({ equip6: equip[5].libelle})} catch (error) {}
                try {this.setState({ equip7: equip[6].libelle})} catch (error) {}
                try {this.setState({ equip8: equip[7].libelle})} catch (error) {}
                try {this.setState({ equip9: equip[8].libelle})} catch (error) {}
                try {this.setState({ equip10: equip[9].libelle})} catch (error) {}
                try {this.setState({ equip11: equip[10].libelle})} catch (error) {}
                try {this.setState({ equip12: equip[11].libelle})} catch (error) {}
                try {this.setState({ equip13: equip[12].libelle})} catch (error) {}
                try {this.setState({ equip14: equip[13].libelle})} catch (error) {}
                try {this.setState({ equip15: equip[14].libelle})} catch (error) {}
                try {this.setState({ equip16: equip[15].libelle})} catch (error) {}
                try {this.setState({ equip17: equip[16].libelle})} catch (error) {}
                try {this.setState({ equip18: equip[17].libelle})} catch (error) {}
                try {this.setState({ equip19: equip[18].libelle})} catch (error) {}
                try {this.setState({ equip20: equip[19].libelle})} catch (error) {}
        })

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllVisualsByCC.php`,{
            params:{
                id: idURL,
            }
        }).then(res => {
            const imgCC = res.data;
            this.setState({ imgCC });
            console.log(imgCC)

            try {this.setState({file1: imgCC[0].linkIMG})} catch (error) {}
        });

        const cookies = new Cookies();

        this.setState({ selectedFile1: "" });
        this.setState({ selectedFile2: "" });
        this.setState({ selectedFile3: "" });
        this.setState({ selectedFile4: "" });
        this.setState({ selectedFile5: "" });
        this.setState({ selectedFile6: "" });
        this.setState({ selectedFile7: "" });
        this.setState({ selectedFile8: "" });
        this.setState({ famille: "CAMPING-CAR" });
        this.setState({ concess: cookies.get('logId') });
        this.setState({ prefix: cookies.get('logPref') })
        this.setState({
            ref: Math.floor(Math.random() * 999999) + 1
        })
        this.setState({status1: "Pas ok"});
        this.setState({color1: "bg-red-500"});
        this.setState({status2: "Pas ok"});
        this.setState({color2: "bg-red-500"});
        this.setState({status3: "Pas ok"});
        this.setState({color3: "bg-red-500"});
        this.setState({status4: "Pas ok"});
        this.setState({color4: "bg-red-500"});
        this.setState({status5: "Pas ok"});
        this.setState({color5: "bg-red-500"});
        this.setState({status6: "Pas ok"});
        this.setState({color6: "bg-red-500"});
        this.setState({status7: "Pas ok"});
        this.setState({color7: "bg-red-500"});
        this.setState({status8: "Pas ok"});
        this.setState({color8: "bg-red-500"});
    }

    state = {
        resCapt: [],
    }

    handleChange = (e) => {
        this.setState({ etat: e.target.value });
    }
    handleChangePremMain = (e) => {
        this.setState({ premmain: e.target.value });
    }
    handleChangeGamme = (e) => {
        this.setState({ gamme: e.target.value });
    }
    handleChangeConcess = (e) => {
        if(e.target.value == "ACCS"){
            this.setState({ concess: 11 });
        }else if(e.target.value == "Nordmandie CC"){
            this.setState({ concess: 12 });
        }else if(e.target.value == "Carpiquet CC"){
            this.setState({ concess: 13 });
        }
        console.log(this.state.concess)
    }
    
    stateSend = () => {
        var top = "http://nunesaccount.alwaysdata.net/APIDG8/IMG/CC/"+this.state.selectedFile1.name;
        var refv2 = this.state.prefix + "" + this.state.ref;


    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });
    }

    state = {
        selectedFile1: null,
        selectedFile2: null,
        selectedFile3: null,
        selectedFile4: null,
        selectedFile5: null,
        selectedFile6: null,
        selectedFile7: null,
        selectedFile8: null,
    };

    Concession(props){
        const cookies = new Cookies();
        if(cookies.get('logId') == 101){
            return(
                <select onChange={this.handleChangeConcess} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="etat" required>
                    <option key={0}>Concession</option>
                    <option key={11}>ACCS</option>
                    <option key={12}>Nordmandie CC</option>
                    <option key={13}>Carpiquet CC</option>
                </select>
            )
        }else if(props != 11 || props != 12 ||props != 13){
            return(
                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Concession" name="concess" onChange={this.stateChange} value={this.state.concess} required/>
            )
        }
    }

    Bouton(){
        return(
            <div className="w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-full pt-4 px-4 py-4">
                <div className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <button onClick={this.stateSend} className="w-full">Modifier</button>
                </div>
            </div>
        )
    }

    render(){
        const cookies = new Cookies();
        return (
            <div className="flex flex-wrap">
                <div className='w-2/12'>
                    <AsideMenu/>
                </div>
                <div className="w-10/12 pt-8">
                    <div className="py-2 lg:py-2 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Modifier le camping-car</h2>
                        <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Numéro : {this.state.ref}</p>
                        <div className="flex flex-wrap">
                            <div className="w-1/4 pt-4 px-4 py-2">
                                <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ref DMS (DBS)</label>
                                <div className="flex">
                                    <input disabled type="text" id="nom" className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ref" name="ref" onChange={this.stateChange} value={this.state.ref} required/>
                                </div>
                        </div>
                            
                            <div className="w-1/4 pt-4 px-4 py-2">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Marque</label>
                                <input type="text" id="mail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Marque" name="marque" onChange={this.stateChange} value={this.state.marque} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4 py-2">
                                <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Modèle</label>
                                <input type="text" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Modele" name="model" onChange={this.stateChange} value={this.state.model} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4 py-2">
                                <label htmlFor="codepostal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Version</label>
                                <input type="text" id="codepostal" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Version" name="ver" onChange={this.stateChange} value={this.state.ver} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kilométrage</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Kilometrage" name="km" onChange={this.stateChange} value={this.state.km} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Boite de vitesse</label>
                                <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="BDV" name="bdv" onChange={this.stateChange} value={this.state.bdv} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prix TTC</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Prix TTC" name="prix" onChange={this.stateChange} value={this.state.prix} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Etat</label>
                                <select value={this.state.etat} onChange={this.handleChange} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="etat" required>
                                    <option key={0}>Choix de l'état</option>
                                    <option key={1}>Neuf</option>
                                    <option key={2}>Occasion</option>
                                </select>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Famille</label>
                                <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Famille" name="famille" onChange={this.stateChange} value={this.state.famille} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gamme</label>
                                <select value={this.state.gamme} onChange={this.handleChangeGamme} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="etat" required>
                                    <option key={0}>Choisir la gamme</option>
                                    <option key={1}>Intégral</option>
                                    <option key={2}>Profile</option>
                                    <option key={3}>Capucine</option>
                                    <option key={4}>Fourgon</option>
                                    <option key={5}>Van</option>
                                    <option key={6}>Caravane</option>
                                </select>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Année</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Année" name="annee" onChange={this.stateChange} value={this.state.annee} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Première main</label>
                                <select value={this.state.premmain} onChange={this.handleChangePremMain} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="etat" required>
                                    <option key={0}>Première main</option>
                                    <option value={1} key={1}>Oui</option>
                                    <option value={0} key={2}>Non</option>
                                </select>                    
                            </div>
                            <div className="w-1/6 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Concession</label>
                                {
                                    this.Concession(this.state.concess)
                                }
                            </div>
                            <div className="w-1/6 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Portes</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Portes" name="nbportes" onChange={this.stateChange} value={this.state.nbportes} required/>
                            </div>
                            <div className="w-1/6 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Couchages</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Couchage" name="couchage" onChange={this.stateChange} value={this.state.couchage} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Porteur</label>
                                <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Porteur" name="porteur" onChange={this.stateChange} value={this.state.porteur} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Puissance fiscale</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Puissance Fiscale" name="puissfisc" onChange={this.stateChange} value={this.state.puissfisc} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Puissance DIN</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Puissance DIN" name="puissdin" onChange={this.stateChange} value={this.state.puissdin} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cylindrée (cm3)</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="2200" name="cyl" onChange={this.stateChange} value={this.state.cyl} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Places carte grises</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Places CG" name="placeCG" onChange={this.stateChange} value={this.state.placeCG} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Energie</label>
                                <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Energie" name="energie" onChange={this.stateChange} value={this.state.energie} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hauteur</label>
                                <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Hauteur 2.34" name="haut" onChange={this.stateChange} value={this.state.haut} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Largeur</label>
                                <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Largeur 2.14" name="larg" onChange={this.stateChange} value={this.state.larg} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Longueur</label>
                                <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Longueur 6.99" name="long" onChange={this.stateChange} value={this.state.long} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Poids à vide (kg)</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Poids à vide" name="pdsVide" onChange={this.stateChange} value={this.state.pdsVide} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Poids en charge (kg)</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Poids en charge" name="pdsCharge" onChange={this.stateChange} value={this.state.pdsCharge} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Réservoir propre</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Reservoir propre" name="resPro" onChange={this.stateChange} value={this.state.resPro} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Réservoir eau usée</label>
                                <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Reservoir eau usée" name="resUsed" onChange={this.stateChange} value={this.state.resUsed} required/>
                            </div>
                            <div className="w-1/4 pt-4 px-4">
                                <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type lit</label>
                                <input type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Type de lit" name="lit" onChange={this.stateChange} value={this.state.lit} required/>
                            </div>
                            <div className="w-full pt-8">
                                <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Section équipement</h2>
                                <div className="flex flex-wrap">
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 1</label>
                                        <input type="text" id="equip1" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip1" onChange={this.stateChange} value={this.state.equip1} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 2</label>
                                        <input type="text" id="equip2" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip2" onChange={this.stateChange} value={this.state.equip2} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 3</label>
                                        <input type="text" id="equip3" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip3" onChange={this.stateChange} value={this.state.equip3} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip4" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 4</label>
                                        <input type="text" id="equip4" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip4" onChange={this.stateChange} value={this.state.equip4} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip5" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 5</label>
                                        <input type="text" id="equip5" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip5" onChange={this.stateChange} value={this.state.equip5} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip6" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 6</label>
                                        <input type="text" id="equip6" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip6" onChange={this.stateChange} value={this.state.equip6} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip7" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 7</label>
                                        <input type="text" id="equip7" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip7" onChange={this.stateChange} value={this.state.equip7} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip8" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 8</label>
                                        <input type="text" id="equip8" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip8" onChange={this.stateChange} value={this.state.equip8} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip9" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 9</label>
                                        <input type="text" id="equip9" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip9" onChange={this.stateChange} value={this.state.equip9} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip10" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 10</label>
                                        <input type="text" id="equip10" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip10" onChange={this.stateChange} value={this.state.equip10} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip11" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 11</label>
                                        <input type="text" id="equip11" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip11" onChange={this.stateChange} value={this.state.equip11} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip12" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 12</label>
                                        <input type="text" id="equip12" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip12" onChange={this.stateChange} value={this.state.equip12} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip13" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 13</label>
                                        <input type="text" id="equip13" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip13" onChange={this.stateChange} value={this.state.equip13} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip14" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 14</label>
                                        <input type="text" id="equip14" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip14" onChange={this.stateChange} value={this.state.equip14} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip15" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 15</label>
                                        <input type="text" id="equip15" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip15" onChange={this.stateChange} value={this.state.equip15} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip16" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 16</label>
                                        <input type="text" id="equip16" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip16" onChange={this.stateChange} value={this.state.equip16} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip17" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 17</label>
                                        <input type="text" id="equip17" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip17" onChange={this.stateChange} value={this.state.equip17} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip18" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 18</label>
                                        <input type="text" id="equip18" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip18" onChange={this.stateChange} value={this.state.equip18} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip19" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 19</label>
                                        <input type="text" id="equip19" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip19" onChange={this.stateChange} value={this.state.equip19} required/>
                                    </div>
                                    <div className="w-1/2 pt-2 px-4">
                                        <label htmlFor="equip20" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Équipement 20</label>
                                        <input type="text" id="equip20" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" name="equip20" onChange={this.stateChange} value={this.state.equip20} required/>
                                    </div>
                                </div>
                            </div>
                            {
                                this.Bouton()
                            }                    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}