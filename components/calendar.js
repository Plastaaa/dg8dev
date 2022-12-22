import axios from 'axios';
import Image from 'next/image'
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function choixVisuel(){
    var date = new Date();
	var cur = date.getDate();
    var curMonth = date.getMonth()+1;

    if(curMonth == 12){
        if(cur == 1){
            return('/calendar/01.jpg')
        }if(cur == 2){
            return('/calendar/02.jpg')
        }if(cur == 3){
            return('/calendar/03.jpg')
        }if(cur == 4){
            return('/calendar/04.jpg')
        }if(cur == 5){
            return('/calendar/05.jpg')
        }if(cur == 6){
            return('/calendar/06.jpg')
        }if(cur == 7){
            return('/calendar/07.jpg')
        }if(cur == 8){
            return('/calendar/08.jpg')
        }if(cur == 9){
            return('/calendar/09.jpg')
        }if(cur == 10){
            return('/calendar/10.jpg')
        }if(cur == 11){
            return('/calendar/11.jpg')
        }if(cur == 12){
            return('/calendar/12.jpg')
        }if(cur == 13){
            return('/calendar/13.jpg')
        }if(cur == 14){
            return('/calendar/14.jpg')
        }if(cur == 15){
            return('/calendar/15.jpg')
        }if(cur == 16){
            return('/calendar/16.jpg')
        }if(cur == 17){
            return('/calendar/17.jpg')
        }if(cur == 18){
            return('/calendar/18.jpg')
        }if(cur == 19){
            return('/calendar/19.jpg')
        }if(cur == 20){
            return('/calendar/20.jpg')
        }if(cur == 21){
            return('/calendar/21.jpg')
        }if(cur == 22){
            return('/calendar/22.jpg')
        }if(cur == 23){
            return('/calendar/23.jpg')
        }if(cur >= 24 && cur <= 31){
            return('/calendar/24.jpg')
        }else{
            return('/calendar/00.jpg')
        }
    }else if(curMonth == 1){
        if((cur == 1) || (cur == 2)){
            return('/calendar/24.jpg')
        }else{
            return('/calendar/00.jpg')
        }
    }{
        return('/calendar/00.jpg')
    }
}

function LastChristmas(){
    var date = new Date();
	var cur = date.getDate();
    var curMonth = date.getMonth()+1;

    if(curMonth == 12){
        if(cur >= 24 && cur <= 31){
            return(
                <p className="font-bold text-center text-white dark:text-white sm:text-l">Pour cette dernière question participez exceptionnellement jusqu'au 2 janvier 2023.</p>
            )
        }else{
            return(
                ''
            )
        }
    }else if(curMonth == 1){
        if((cur == 1) || (cur == 2)){
            <p className="font-bold text-center text-white dark:text-white sm:text-l">Pour cette dernière question participez exceptionnellement jusqu'au 2 janvier 2023.</p>
        }else{
            return(
                ""
            )
        }
    }
}

export default class Calendar extends React.Component {
    state = {
        resCapt: [],
    }

    stateSend = () => {
        var date = new Date();
	    var cur = date.getDate();
        var curMonth = date.getMonth()+1;

        if((this.state.nom == "" || this.state.nom == undefined) || (this.state.prenom == "" || this.state.prenom == undefined) || (this.state.tel == ""  || this.state.tel == undefined) || (this.state.mail == "" || this.state.mail == undefined) || (this.state.cp == ""  || this.state.cp == undefined) || (this.state.rep == "" || this.state.rep == undefined)){
            this.setState({dejaSend: false});
        }else if((this.state.nom != "" && this.state.nom != undefined) || (this.state.prenom == "" || this.state.prenom == undefined) || (this.state.tel != "" && this.state.tel != undefined) || (this.state.mail != "" && this.state.mail != undefined) || (this.state.cp != "" && this.state.cp != undefined) || (this.state.rep != "" && this.state.rep != undefined)){
            if(this.state.dejaSend != true){
                this.setState({dejaSend:  true});
                this.setState({nom: ""});
                this.setState({prenom: ""});
                this.setState({mail: ""});
                this.setState({tel: ""})
                this.setState({cp: ""});
                this.setState({rep: ""});
                axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/sendMailCalendar.php`,{
                    params:{
                        nom: this.state.nom,
                        prenom: this.state.prenom,
                        mail: this.state.mail,
                        tel: this.state.tel,
                        cp: this.state.cp,
                        rep: this.state.rep,
                    }
                })

                axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/addCalendar.php`,{
                    params:{
                        nom: this.state.nom,
                        prenom: this.state.prenom,
                        mail: this.state.mail,
                        tel: this.state.tel,
                        cp: this.state.cp,
                        rep: this.state.rep,
                        jour: cur,
                        mois: curMonth,
                    }
                }).then(
                    document.getElementById('my-modal-6').checked = true
                )
            }
        }

        
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });
    }

    openModalDeux = () => {
        document.getElementById('my-modal-7').checked = true
    }

    /*onChange = (value) => {
        axios.post('https://www.google.com/recaptcha/api/siteverify',undefined, {
            params: {
                secret: '6LeWxy8jAAAAAMFdewCcyagVp8sgxmQQkSUfkT9o',
                response: value,
            }
        })
        .then(res => {
            const resCapt = res.data;
            this.setState({ resCapt: resCapt });
        });
    }*/

    render(){
        return (
            <div className="" style={{ backgroundImage: "url(/bg-calendar.png)", backgroundRepeat: 'repeat-y' }}>
                <div>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold">
                                Conditions générales de participation
                            </h3>
                            <p className="py-4">
                                Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par C.A.B.+ au 40 Rue Ronsard pour notre calendrier de l'avent. La base légale du traitement est le consentement.
                            </p>
                            <p className='py-4'>
                                Les données collectées seront communiquées aux seuls destinataires suivants : C.A.B.+.
                            </p>
                            <p className='py-4'>
                                Les données sont conservées pendant 1 an.
                            </p>
                            <p className='py-4'>
                                Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données. Vous pouvez retirer à tout moment votre consentement au traitement de vos données ; Vous pouvez également vous opposer au traitement de vos données.
                            </p>
                            <p className='py-4'>
                                Consultez le site cnil.fr pour plus d’informations sur vos droits.
                            </p>
                            <p className='py-4'>
                                Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter (le cas échéant, notre délégué à la protection des données ou le service chargé de l’exercice de ces droits) :
                            </p>
                            <p className='py-4'>
                                <ul>
                                    <li>Voie postale : C.A.B.+, 40 Rue Ronsard, 64000 Pau</li>
                                    <li>Voie électronique : contact@dg8campingcar.com</li>
                                    <li>Voie télephonique : 09 69 39 69 73</li>
                                </ul>
                            </p>
                            <p className='py-4'>
                                Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-1/4">
                        </div>
                        <div className="w-full px-4 md:w-2/4">
                            <div className="pt-10">
                                <h2 className="p-6 text-2xl tracking-tight font-extrabold text-center bg-orange-100 text-green-900">LE CALENDRIER DE L'AVENT DG8 CAMPING-CAR</h2>
                            </div>
                            <div className="pt-4">
                                <p className="lg:mb-8 font-light text-center text-white dark:text-white sm:text-l">Tentez votre chance pour gagner un weekend en camping-car, des trottinettes électriques et bien d’autres lots, en répondant à la question du jour !</p>
                                {/*<p className="lg:mb-8 font-light text-center text-white dark:text-white sm:text-l">Tous les gagnants apparaissent sur notre site dans un délai de 96h !</p>*/}
                                <p className="font-light text-center text-white dark:text-white sm:text-l">Prenez rendez vous à votre convenance à partir du 9 janvier pour venir récupérer votre goodies.</p>
                                <LastChristmas/>
                            </div>
                            <div className='flex flex-wrap'>
                                <div className="w-full xl:w-1/2 pt-8">
                                    <div className=''>
                                        <Image className={"rounded-xl"} src={choixVisuel()} objectFit={"cover"} width={1000} height={1000} alt={"Image camping car"} layout={""}/>
                                    </div>
                                </div>
                                <div className='w-full xl:w-1/2'>
                                    <div className='flex flex-wrap'>
                                        <div className="w-1/2 px-4 py-2 pt-8">
                                            <label htmlFor="nom" className="text-orange-1OO"><p className='pb-2 text-orange-100 font-bold'>Nom</p></label>
                                            <input value={this.state.nom} type="text" id="nom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Nom" name="nom" onChange={this.stateChange} required/>
                                        </div>
                                        <div className="w-1/2 px-4 py-2 pt-8">
                                            <label htmlFor="prenom" className="text-orange-1OO"><p className='pb-2 text-orange-100 font-bold'>Prénom</p></label>
                                            <input value={this.state.prenom} type="text" id="prenom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Prénom" name="prenom" onChange={this.stateChange} required/>
                                        </div>
                                        <div className="w-full px-4 py-2">
                                            <label htmlFor="mail" className="text-orange-1OO"><p className='pb-2 text-orange-100 font-bold'>E-mail</p></label>
                                            <input value={this.state.mail} type="text" id="mail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="E-mail" name="mail" onChange={this.stateChange} required/>
                                        </div>
                                        <div className="w-1/2 px-4 py-2">
                                            <label htmlFor="tel" className="text-orange-1OO"><p className='pb-2 text-orange-100 font-bold'>Télephone</p></label>
                                            <input value={this.state.tel} type="text" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Télephone" name="tel" onChange={this.stateChange} required/>
                                        </div>
                                        <div className="w-1/2 px-4 py-2">
                                            <label htmlFor="cp" className="text-orange-1OO"><p className='pb-2 text-orange-100 font-bold'>Code postal</p></label>
                                            <input value={this.state.cp} type="text" id="cp" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Code postal" name="cp" onChange={this.stateChange} required/>
                                        </div>
                                        <div className="w-full pt-4 px-4">
                                            <label htmlFor="rep" className="text-orange-1OO"><p className='pb-2 text-orange-100 font-bold'>Réponse à la question du jour</p></label>
                                            <textarea value={this.state.rep} rows={3} type="text" id="rep" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ex: réponse a" name="rep" onChange={this.stateChange} required/>
                                        </div>
                                        <input type="text" id="age" className="hidden" name="age" required/>
                                        <div className="w-full pt-4 px-4">
                                            <div className="flex flex-wrap inline">
                                                <div className='w-full'>
                                                    <input type="checkbox" value={this.state.checkbox} className="checkbox bg-orange-100"/>
                                                    <p className="text-orange-100 inline text-orange-100 pl-4">J'accepte les <label htmlFor="my-modal-3" className='underline'>conditions générales de participation</label></p>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className='w-full px-4 py-2 pb-16'>
                                                {
                                                    <label htmlFor="" onClick={this.stateSend} className="btn w-full py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-orange-100 hover:bg-orange-50 focus:ring-4 focus:outline-none focus:ring-orange-100 dark:bg-orange-100 dark:hover:bg-orange-100 dark:focus:ring-orange-100 cursor-pointer">
                                                        Je participe !
                                                    </label>
                                                }
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='w-full pb-16'>
                                    <a href='/jeuconcours/gagnants'>
                                        <label htmlFor="" className="btn w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-orange-100 dark:text-white dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-orange-100 cursor-pointer">
                                            Voir les gagnants des jours précédents !
                                        </label>
                                    </a>
                                </div>

                                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Merci pour votre participation !</h3>
                                        <p className="py-4">Participez chaque jours afin de multiplier vos chances de gagner.</p>
                                        <p className="">Nous vous contacterons rapidement si vous avez été tiré au sort pour l’un de nos nombreux cadeaux.</p>
                                        <div className="modal-action">
                                        <label htmlFor="my-modal-6" className="btn">Compris !</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}