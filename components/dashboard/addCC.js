import React from "react"
import axios from "axios";
import Cookies from "universal-cookie";

export default class AddCC extends React.Component {

    componentDidMount(){
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
    }

    state = {
        resCapt: [],
    }

    handleChange = (e) => {
        this.setState({ etat: e.target.value });
        console.log(this.state.etat);
    }
    handleChangePremMain = (e) => {
        this.setState({ premmain: e.target.value });
        console.log(this.state.premmain);
    }
    handleChangeGamme = (e) => {
        this.setState({ gamme: e.target.value });
        console.log(this.state.gamme);
    }
    
    stateSend = () => {
        this.setState({marque: ""});
        var top = "http://nunesaccount.alwaysdata.net/APIDG8/IMG/CC/"+this.state.selectedFile1.name;
        var refv2 = this.state.prefix + this.state.ref;

        const cookies = new Cookies();

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/addCC1.php`,{
            params:{
                marque: this.state.marque,
                model: this.state.model,
                version: this.state.ver,
                km: this.state.km,
                bdv: this.state.bdv,
                prix: this.state.prix,
                ref: refv2,
                top: top,
                concess: this.state.concess,
                etat: this.state.etat,
                famille: this.state.famille,
                gamme: this.state.gamme,
                annee: this.state.annee,
                premiere: this.state.premmain,
            }
        })

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/addCC2.php`,{
            params:{
                ref: refv2,
                etat: this.state.etat,
                concess: this.state.concess,
                stockage: this.state.concess,
                km: this.state.km,
                prix: this.state.prix,
                tva: this.state.tva,
                premiere: this.state.premmain,
                marque: this.state.marque,
                moteur: this.state.moteur,
                model: this.state.model,
                version: this.state.ver,
                gamme: this.state.gamme,
                famille: this.state.famille,
                bdv: this.state.bdv,
                annee: this.state.annee,
                nbportes: this.state.nbportes,
                porteur: this.state.porteur,
                puissfisc: this.state.puissfisc,
                puissdin: this.state.puissdin,
                cylindre: this.state.cyl,
                placecg: this.state.placeCG,
                energie: this.state.energie,
                haut: this.state.haut,
                larg: this.state.larg,
                long: this.state.long,
                pdsvide: this.state.pdsVide,
                pdscharge: this.state.pdsCharge,
                respro: this.state.resPro,
                ressale: this.state.resUsed,
                typelit: this.state.lit,
            }
        })

        if(this.state.selectedFile2.name != ""){
            var img2 = "http://nunesaccount.alwaysdata.net/APIDG8/IMG/CC/"+this.state.selectedFile2.name;
        }else{
            var img2 = "";
        }
        if(this.state.selectedFile3.name != ""){
            var img3 = "http://nunesaccount.alwaysdata.net/APIDG8/IMG/CC/"+this.state.selectedFile3.name;
        }else{
            var img3 = "";
        }
        if(this.state.selectedFile4.name != ""){
            var img4 = "http://nunesaccount.alwaysdata.net/APIDG8/IMG/CC/"+this.state.selectedFile4.name;
        }else{
            var img4 = "";
        }
        if(this.state.selectedFile5.name != ""){
            var img5 = "http://nunesaccount.alwaysdata.net/APIDG8/IMG/CC/"+this.state.selectedFile5.name;
        }else{
            var img5 = "";
        }
        if(this.state.selectedFile6.name != ""){
            var img6 = "http://nunesaccount.alwaysdata.net/APIDG8/IMG/CC/"+this.state.selectedFile6.name;
        }else{
            var img6 = "";
        }
        if(this.state.selectedFile7.name != ""){
            var img7 = "http://nunesaccount.alwaysdata.net/APIDG8/IMG/CC/"+this.state.selectedFile7.name;
        }else{
            var img7 = "";
        }
        if(this.state.selectedFile8.name != ""){
            var img8 = "http://nunesaccount.alwaysdata.net/APIDG8/IMG/CC/"+this.state.selectedFile8.name;
        }else{
            var img8 = "";
        }

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/addCC3.php`,{
            params:{
                ref: refv2,
                top: top,
                img2: img2,
                img3: img3,
                img4: img4,
                img5: img5,
                img6: img6,
                img7: img7,
                img8: img8,
            }
        })

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
        this.setState({ marque: "" });
        this.setState({ model: "" });
        this.setState({ ver: "" });
        this.setState({ km: "" });
        this.setState({ bdv: "" });
        this.setState({ prix: "" });
        this.setState({ ref: "" });
        this.setState({ top: "" });
        this.setState({ etat: "" });
        this.setState({ gamme: "" });
        this.setState({ annee: "" });
        this.setState({ premmain: "" });
        this.setState({ tva: "" });
        this.setState({ moteur: "" });
        this.setState({ nbportes: "" });
        this.setState({ porteur: "" });
        this.setState({ puissdin: "" });
        this.setState({ puissfisc: "" });
        this.setState({ cyl: "" });
        this.setState({ placeCG: "" });
        this.setState({ energie: "" });
        this.setState({ haut: "" });
        this.setState({ larg: "" });
        this.setState({ long: "" });
        this.setState({ pdsVide: "" });
        this.setState({ pdsCharge: "" });
        this.setState({ resPro: "" });
        this.setState({ resUsed: "" });
        this.setState({ lit: "" });
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
    
    onFileChange1 = event => {
        this.setState({ selectedFile1: event.target.files[0] });
    };
    onFileChange2 = event => {
        this.setState({ selectedFile2: event.target.files[0] });
    };
    onFileChange3 = event => {
        this.setState({ selectedFile3: event.target.files[0] });
    };
    onFileChange4 = event => {
        this.setState({ selectedFile4: event.target.files[0] });
    };
    onFileChange5 = event => {
        this.setState({ selectedFile5: event.target.files[0] });
    };
    onFileChange6 = event => {
        this.setState({ selectedFile6: event.target.files[0] });
    };
    onFileChange7 = event => {
        this.setState({ selectedFile7: event.target.files[0] });
    };
    onFileChange8 = event => {
        this.setState({ selectedFile8: event.target.files[0] });
    };

    onFileUploadAll = () => {
        const formData1 = new FormData();
        formData1.append(
            "myFile",
            this.state.selectedFile1,
            this.state.selectedFile1.name
        );
        console.log(this.state.selectedFile1);

        axios.post('https://nunesaccount.alwaysdata.net/APIDG8/IMG/handleIMG.php', formData1, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        });

        const formData2 = new FormData();
        formData2.append(
            "myFile",
            this.state.selectedFile2,
            this.state.selectedFile2.name
        );
        console.log(this.state.selectedFile2);

        axios.post('https://nunesaccount.alwaysdata.net/APIDG8/IMG/handleIMG.php', formData2, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        });

        const formData3 = new FormData();
        formData3.append(
            "myFile",
            this.state.selectedFile3,
            this.state.selectedFile3.name
        );
        console.log(this.state.selectedFile3);

        axios.post('https://nunesaccount.alwaysdata.net/APIDG8/IMG/handleIMG.php', formData3, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        });

        const formData4 = new FormData();
        formData4.append(
            "myFile",
            this.state.selectedFile4,
            this.state.selectedFile4.name
        );
        console.log(this.state.selectedFile4);

        axios.post('https://nunesaccount.alwaysdata.net/APIDG8/IMG/handleIMG.php', formData4, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        });

        const formData5 = new FormData();
        formData5.append(
            "myFile",
            this.state.selectedFile5,
            this.state.selectedFile5.name
        );
        console.log(this.state.selectedFile5);

        axios.post('https://nunesaccount.alwaysdata.net/APIDG8/IMG/handleIMG.php', formData5, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        });

        const formData6 = new FormData();
        formData6.append(
            "myFile",
            this.state.selectedFile6,
            this.state.selectedFile6.name
        );
        console.log(this.state.selectedFile6);

        axios.post('https://nunesaccount.alwaysdata.net/APIDG8/IMG/handleIMG.php', formData6, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        });

        const formData7 = new FormData();
        formData7.append(
            "myFile",
            this.state.selectedFile7,
            this.state.selectedFile7.name
        );
        console.log(this.state.selectedFile7);

        axios.post('https://nunesaccount.alwaysdata.net/APIDG8/IMG/handleIMG.php', formData7, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        });

        const formData8 = new FormData();
        formData8.append(
            "myFile",
            this.state.selectedFile8,
            this.state.selectedFile8.name
        );
        console.log(this.state.selectedFile8);

        axios.post('https://nunesaccount.alwaysdata.net/APIDG8/IMG/handleIMG.php', formData8, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        });
    }

    render(){
        const cookies = new Cookies();
        return (
        <div className="w-10/12 pt-8">
            <div className="py-2 lg:py-2 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Ajout de camping-car</h2>
                
                <div className="flex flex-wrap">
                    <div className="w-1/4 pt-4 px-4 py-2">
                        <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ref DMS (DBS)</label>
                        <div className="flex">
                            <input type="text" disabled id="nom" className="w-1/2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ref" name="ref" onChange={this.stateChange} value={this.state.prefix} required/>
                            <input type="text" id="nom" className="w-1/2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ref" name="ref" onChange={this.stateChange} value={this.state.ref} required/>
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
                        </select>                    </div>
                    <div className="w-1/4 pt-4 px-4">
                        <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Concession</label>
                        <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Concession" name="concess" onChange={this.stateChange} value={this.state.concess} required/>
                    </div>
                    <div className="w-1/4 pt-4 px-4">
                        <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre de portes</label>
                        <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Portes" name="nbportes" onChange={this.stateChange} value={this.state.nbportes} required/>
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
                        <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cylindrée</label>
                        <input type="number" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Cylindrée" name="cyl" onChange={this.stateChange} value={this.state.cyl} required/>
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
                    <div className="pt-4 px-4 flex w-full">
                        {
                            // Test d'import fichier random
                            <div className="">
                                <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Section photos</h2>
                                <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Pensez à bien ajouter chaque photo une par une.</p>
                                <div className="flex flex-wrap">
                                    <div className="w-1/2">
                                        {/*Import 1*/}
                                        <div>
                                            <div className='w-full'>
                                                <input type="file" onChange={this.onFileChange1} className={"bg-gray-200 text-black p-4 rounded-lg"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        {/*Import 2*/}
                                        <div>
                                            <div className='w-full'>
                                                <input type="file" onChange={this.onFileChange2} className={"bg-gray-200 text-black p-4 rounded-lg"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        {/*Import 3*/}
                                        <div>
                                            <div className='w-full'>
                                                <input type="file" onChange={this.onFileChange3} className={"bg-gray-200 text-black p-4 rounded-lg"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        {/*Import 4*/}
                                        <div>
                                            <div className='w-full'>
                                                <input type="file" onChange={this.onFileChange4} className={"bg-gray-200 text-black p-4 rounded-lg"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        {/*Import 5*/}
                                        <div>
                                            <div className='w-full'>
                                                <input type="file" onChange={this.onFileChange5} className={"bg-gray-200 text-black p-4 rounded-lg"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        {/*Import 6*/}
                                        <div>
                                            <div className='w-full'>
                                                <input type="file" onChange={this.onFileChange6} className={"bg-gray-200 text-black p-4 rounded-lg"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        {/*Import 7*/}
                                        <div>
                                            <div className='w-full'>
                                                <input type="file" onChange={this.onFileChange7} className={"bg-gray-200 text-black p-4 rounded-lg"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        {/*Import 8*/}
                                        <div>
                                            <div className='w-full'>
                                                <input type="file" onChange={this.onFileChange8} className={"bg-gray-200 text-black p-4 rounded-lg"}/>
                                            </div>
                                        </div>
                                    </div>
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
}