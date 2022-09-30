import React from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function CVideOuQuoiLaVariable(props){
    const isSetName = props.isSetName;
    const isSetPrenom = props.isSetPrenom;
    const isSetCp = props.isSetCp;
    const isSetTel = props.isSetTel;
    const isSetMail = props.isSetMail;
    const isSetDateDeb = props.isSetDateDeb;
    const isSetDateFin = props.isSetDateFin;
    const isSetNbPlace = props.isSetNbPlace;

    if(((isSetName == "" || isSetName == undefined) || (isSetPrenom == "" || isSetPrenom == undefined) || (isSetTel == "" || isSetTel == undefined) || (isSetMail == "" || isSetMail == undefined) || (isSetCp == "" || isSetCp == undefined) || (isSetDateDeb == "" || isSetDateDeb == undefined) || (isSetDateFin == "" || isSetDateFin == undefined) || (isSetNbPlace == "" || isSetNbPlace == undefined)) && (props.dejaSend === false)){
        return(
            <div className="toast toast-bottom">
                <div className="alert alert-error">
                    <div>
                        <span>Veuillez vous assurer d'avoir rempli le ou les champs manquants.</span>
                    </div>
                </div>
            </div>
        )
    }

    if(props.dejaSend === true){
        return(
            <div>
                <p>Message envoyé</p>
            </div>
        )
    }
}

export default class Contact extends React.Component {
    state = {
        resCapt: [],
    }

    
    stateSend = () => {
        if((this.state.nom == "" || this.state.nom == undefined) || (this.state.prenom == ""  || this.state.prenom == undefined) || (this.state.tel == ""  || this.state.tel == undefined) || (this.state.mail == "" || this.state.mail == undefined) || (this.state.codepostal == ""  || this.state.codepostal == undefined) || (this.state.dateDeb == "" || this.state.dateDeb == undefined) || (this.state.dateFin == "" || this.state.dateFin == undefined) || (this.state.nbPlace == "" || this.state.nbPlace == undefined)){
            this.setState({dejaSend: false});
        }else if((this.state.nom != "" && this.state.nom != undefined) || (this.state.prenom != "" && this.state.prenom != undefined) || (this.state.tel != "" && this.state.tel != undefined) || (this.state.mail != "" && this.state.mail != undefined) || (this.state.codepostal != "" && this.state.codepostal != undefined) || (this.state.dateDeb != "" && this.state.dateDeb != undefined) || (this.state.dateFin != "" && this.state.dateFin != undefined) || (this.state.nbPlace != "" && this.state.nbPlace != undefined)){
            if(this.state.dejaSend != true && (this.state.resCapt.success)){
                this.setState({dejaSend:  true});
                this.setState({nom: ""});
                this.setState({tel: ""});
                this.setState({mail: ""});
                this.setState({codepostal: ""});
                this.setState({prenom: ""});
                this.setState({datefin: ""});
                this.setState({datedeb: ""});
                this.setState({nbplace: ""});
                this.setState({animaux: ""});
                this.setState({barbecue: ""});
                this.setState({veille: ""});
                this.setState({cuisine: ""});
                this.setState({gps: ""});
                this.setState({soplair: ""});
                this.setState({nett: ""});
                this.setState({tabchaise: ""});
                this.setState({enfant: ""});
                axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/sendMailLoc.php`,{
                params:{
                    nom: this.state.nom,
                    prenom: this.state.prenom,
                    tel: this.state.tel,
                    mail: this.state.mail,
                    cp: this.state.codepostal,
                    datefin: this.state.dateFin,
                    datedeb: this.state.dateDeb,
                    nbplace: this.state.nbPlace,
                    animaux: this.state.animaux,
                    barbecue: this.state.barbecue,
                    veille: this.state.veille,
                    cuisine: this.state.cuisine,
                    gps: this.state.gps,
                    soplair: this.state.soplair,
                    nett: this.state.nett,
                    tabchaise: this.state.tabchaise,
                    enfant: this.state.enfant,
                }
                })
            }
        }
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });
    }

    onChange = (value) => {
        axios.post('https://www.google.com/recaptcha/api/siteverify',undefined, {
            params: {
                secret: '6LfMji8iAAAAAP_ylvLKZkg1BRuan4bn1H6sa4eF',
                response: value,
            }
        })
        .then(res => {
            const resCapt = res.data;
            this.setState({ resCapt: resCapt });
        });
    }

    handleChange(e) {
        let isChecked = e.target.checked;
        if(e.target.id == "animaux"){
            if(isChecked){
                this.setState({animaux: 1});
            }else{
                this.setState({animaux: 0});
            }
        }
        if(e.target.id == "barbecue"){
            if(isChecked){
                this.setState({barbecue: 1});
            }else{
                this.setState({barbecue: 0});
            }
        }
        if(e.target.id == "veille"){
            if(isChecked){
                this.setState({veille: 1});
            }else{
                this.setState({veille: 0});
            }
        }
        if(e.target.id == "cuisine"){
            if(isChecked){
                this.setState({cuisine: 1});
            }else{
                this.setState({cuisine: 0});
            }
        }
        if(e.target.id == "gps"){
            if(isChecked){
                this.setState({gps: 1});
            }else{
                this.setState({gps: 0});
            }
        }
        if(e.target.id == "soplair"){
            if(isChecked){
                this.setState({soplair: 1});
            }else{
                this.setState({soplair: 0});
            }
        }
        if(e.target.id == "nett"){
            if(isChecked){
                this.setState({nett: 1});
            }else{
                this.setState({nett: 0});
            }
        }
        if(e.target.id == "tabchaise"){
            if(isChecked){
                this.setState({tabchaise: 1});
            }else{
                this.setState({tabchaise: 0});
            }
        }
        if(e.target.id == "enfant"){
            if(isChecked){
                this.setState({enfant: 1});
            }else{
                this.setState({enfant: 0});
            }
        }
    }

    render(){
        return (
            <div className="overflow-hidden pt-16">
                <div className="py-2 lg:py-2 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Location</h2>
                    <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Je prends contact pour parler de mon projet de location.</p>
                    <CVideOuQuoiLaVariable 
                        dejaSend={this.state.dejaSend}
                        isSetName={this.state.nom} 
                        isSetPrenom={this.state.prenom}
                        isSetCp={this.state.codepostal}
                        isSetMail={this.state.mail}
                        isSetTel={this.state.tel}
                        isSetDateDeb={this.state.dateDeb}
                        isSetDateFin={this.state.dateFin}
                        isSetNbPlace={this.state.nbPlace}
                    />
                    <div className="flex flex-wrap">
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom</label>
                            <input value={this.state.nom} type="text" id="nom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nom" name="nom" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prénom</label>
                            <input value={this.state.prenom} type="text" id="prenom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Prénom" name="prenom" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/3 xs:w-full px-4 py-2">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
                            <input value={this.state.mail} type="email" id="mail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@email.com" name="mail" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/3 xs:w-full px-4 py-2">
                            <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Téléphone</label>
                            <input value={this.state.tel} type="number" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+33 06 01 02 03 04" name="tel" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 2xl:w-1/3 xs:w-full px-4 py-2">
                            <label htmlFor="codepostal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Code postal ou département</label>
                            <input value={this.state.codepostal} type="text" id="codepostal" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Code postal" name="codepostal" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-full xs:w-full px-4 py-2">
                            <div className="flex flex-wrap">
                                <div className="w-2/3">
                                    <label htmlFor="dates" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dates souhaitées</label>
                                </div>
                                <div className="w-1/3 pl-4">
                                    <label htmlFor="nbPlaces" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre de places</label>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-1/3 pr-4">
                                    <input value={this.state.dateDeb} type="text" id="dateDeb" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Début" name="dateDeb" onChange={this.stateChange} required/>
                                </div>
                                <div className="w-1/3 pl-4">
                                    <input value={this.state.dateFin} type="text" id="dateFin" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Fin" name="dateFin" onChange={this.stateChange} required/>
                                </div>
                                <div className="w-1/3 pl-4">
                                    <input value={this.state.nbPlace} type="number" id="nbPlace" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="3" name="nbPlace" onChange={this.stateChange} required/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <h2 className="pt-6 text-lg tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Options</h2>
                        </div>
                        <div className='w-1/3 px-4 py-2'>
                            <div class="flex pt-8">
                                <div class="flex items-center">
                                    <input onChange={e => this.handleChange(e)} id="animaux" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                                </div>
                                <div class="ml-2 text-sm">
                                    <label for="tHum" class="font-medium text-gray-900 dark:text-gray-300">Animaux</label>
                                    <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Cette option vous permet de prendre vos animaux avec vous.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 px-4 py-2'>
                            <div class="flex pt-8">
                                <div class="flex items-center">
                                    <input onChange={e => this.handleChange(e)} id="barbecue" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                                </div>
                                <div class="ml-2 text-sm">
                                    <label for="tFin" class="font-medium text-gray-900 dark:text-gray-300">Barbecue gaz</label>
                                    <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Mise à disposition d'un barbecue.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 px-4 py-2'>
                            <div class="flex pt-8">
                                <div class="flex items-center">
                                    <input onChange={e => this.handleChange(e)} id="veille" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                                </div>
                                <div class="ml-2 text-sm">
                                    <label for="tFin" class="font-medium text-gray-900 dark:text-gray-300">Départ la veille</label>
                                    <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Permet de récupérer le véhicule le jour d'avant, après 18h.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 px-4 py-2'>
                            <div class="flex pt-8">
                                <div class="flex items-center">
                                    <input onChange={e => this.handleChange(e)} id="cuisine" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                                </div>
                                <div class="ml-2 text-sm">
                                    <label for="tHum" class="font-medium text-gray-900 dark:text-gray-300">Kit cuisine & vaisselle</label>
                                    <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Assortiment d'ustensiles de cuisine.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 px-4 py-2'>
                            <div class="flex pt-8">
                                <div class="flex items-center">
                                    <input onChange={e => this.handleChange(e)} id="gps" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                                </div>
                                <div class="ml-2 text-sm">
                                    <label for="tFin" class="font-medium text-gray-900 dark:text-gray-300">GPS</label>
                                    <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Mise à disposition d'un GPS avec gestion du gabarit.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 px-4 py-2'>
                            <div class="flex pt-8">
                                <div class="flex items-center">
                                    <input onChange={e => this.handleChange(e)} id="soplair" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                                </div>
                                <div class="ml-2 text-sm">
                                    <label for="tFin" class="font-medium text-gray-900 dark:text-gray-300">Kit Soplair</label>
                                    <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Kit d'isolation extérieur (chaud / froid).</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 px-4 py-2'>
                            <div class="flex pt-8">
                                <div class="flex items-center">
                                    <input onChange={e => this.handleChange(e)} id="nett" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                                </div>
                                <div class="ml-2 text-sm">
                                    <label for="tHum" class="font-medium text-gray-900 dark:text-gray-300">Nettoyage</label>
                                    <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Forfait de nettoyage intérieur et extérieur</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 px-4 py-2'>
                            <div class="flex pt-8">
                                <div class="flex items-center">
                                    <input onChange={e => this.handleChange(e)} id="tabchaise" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                                </div>
                                <div class="ml-2 text-sm">
                                    <label for="tFin" class="font-medium text-gray-900 dark:text-gray-300">Table et chaises</label>
                                    <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Kit composé d'une table et de 2 chaises en aluminium.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 px-4 py-2'>
                            <div class="flex pt-8">
                                <div class="flex items-center">
                                    <input onChange={e => this.handleChange(e)} id="enfant" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                                </div>
                                <div class="ml-2 text-sm">
                                    <label for="tFin" class="font-medium text-gray-900 dark:text-gray-300">Kit lit enfant</label>
                                    <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Kit comprenant un lit pour enfant.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 xs:w-full sm:w-1/2 md:w-1/2 content-center">
                            <div className="pt-4 px-4">
                                <ReCAPTCHA
                                    sitekey="6LfMji8iAAAAAI57trdQtuu8HZLx9QpjrscbFiMk"
                                    onChange={this.onChange}
                                    badge="inline"
                                />
                            </div>
                        </div>
                        <div className="pt-8 w-1/2 xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 py-4">
                            <div className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                <button onClick={this.stateSend} className="w-full">Envoyer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}