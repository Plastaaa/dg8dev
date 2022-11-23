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
        }if(cur == 24){
            return('/calendar/24.jpg')
        }else{
            return('/calendar/00.jpg')
        }
    }else{
        return('/calendar/00.jpg')
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

        console.log(this.state.nom);
        console.log(this.state.prenom);
        console.log(this.state.mail);
        console.log(this.state.tel);
        console.log(this.state.cp);
        console.log(this.state.rep);
        if((this.state.nom == "" || this.state.nom == undefined) || (this.state.prenom == "" || this.state.prenom == undefined) || (this.state.tel == ""  || this.state.tel == undefined) || (this.state.mail == "" || this.state.mail == undefined) || (this.state.cp == ""  || this.state.cp == undefined) || (this.state.rep == "" || this.state.rep == undefined)){
            this.setState({dejaSend: false});
        }else if((this.state.nom != "" && this.state.nom != undefined) || (this.state.prenom == "" || this.state.prenom == undefined) || (this.state.tel != "" && this.state.tel != undefined) || (this.state.mail != "" && this.state.mail != undefined) || (this.state.cp != "" && this.state.cp != undefined) || (this.state.rep != "" && this.state.rep != undefined)){
            if(this.state.dejaSend != true && (this.state.resCapt.success)){
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
                secret: '6LcBGZ4iAAAAAGdQHFoM8HVX0Oz_g1Nanzi5jJOy',
                response: value,
            }
        })
        .then(res => {
            const resCapt = res.data;
            this.setState({ resCapt: resCapt });
        });
    }

    render(){
        return (
            <div className="" style={{ backgroundImage: "url(/bg-calendar.png)", backgroundRepeat: 'repeat-y' }}>
                <div>
                    <div className="flex flex-wrap">
                        <div className="w-1/4">
                        </div>
                        <div className="w-full px-4 md:w-2/4">
                            <div className="pt-10">
                                <h2 className="p-6 text-2xl tracking-tight font-extrabold text-center bg-orange-100 text-green-900">LE CALENDRIER DE L'AVENT DG8 CAMPING-CAR</h2>
                            </div>
                            <div className="pt-4">
                                <p className="lg:mb-8 font-light text-center text-white dark:text-white sm:text-l">Tentez votre chance en répondant à la question du jour !</p>
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
                                        <div className="w-full pt-4 px-4">
                                            <div className="flex flex-wrap inline">
                                                <div className='w-full'>
                                                    <input type="checkbox" className="checkbox bg-orange-100"/>
                                                    <p className="text-orange-100 inline text-orange-100 pl-4">J'accepte les <a href='./' className='underline'>conditions générales de participation</a></p>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <div className="pt-4 px-4">
                                                <ReCAPTCHA
                                                    sitekey="6LcBGZ4iAAAAAFAjIXUXagKVqG2zOn2TSwXMETc5"
                                                    onChange={this.onChange}
                                                    badge="inline"
                                                />
                                            </div>
                                        </div>
                                        <div className='w-full px-4 py-2 pb-16'>
                                                <button className="w-full py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-orange-100 hover:bg-orange-50 focus:ring-4 focus:outline-none focus:ring-orange-100 dark:bg-orange-100 dark:hover:bg-orange-100 dark:focus:ring-orange-100 pointer-events-auto" onClick={this.stateSend}>Envoyer</button>
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