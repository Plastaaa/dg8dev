import React from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export default class Contact extends React.Component {
    stateSend = (props) => {
        if(props.resCapt.success){
            axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/sendMail.php`,{
            params:{
                nom: this.state.nom,
                tel: this.state.tel,
                mail: this.state.mail,
                cp: this.state.codepostal,
                obj: this.state.objet,
            }
            })
        }
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });
    }

    onChange(value) {
        console.log('Captcha value:', value);
        axios.post('https://www.google.com/recaptcha/api/siteverify', {
            params: {
                secret: '6LfMji8iAAAAAP_ylvLKZkg1BRuan4bn1H6sa4eF',
                response: value,
            }
        })
        .then(res => {
            const resCapt = res.data;
            this.setState({
                resCapt: res.data
            });
            console.log(resCapt.success);
        });
    }

    state = {
        resCapt: []
    }

    render(){
        return (
            <div className="overflow-hidden">
                <div className="py-2 lg:py-2 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact</h2>
                    <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Prendre contact avec nos équipes.</p>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom</label>
                            <input type="text" id="nom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Nom" name="nom" onChange={this.stateChange} required/>
                        </div>
                        
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
                            <input type="email" id="mail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@email.com" name="mail" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Téléphone</label>
                            <input type="text" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+33 06 01 02 03 04" name="tel" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-1/2 px-4 py-2">
                            <label htmlFor="codepostal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Code postal ou département</label>
                            <input type="text" id="codepostal" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Code postal" name="codepostal" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-full px-4">
                            <label htmlFor="objet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Objet de la demande</label>
                            <textarea rows={5} type="text" id="objet" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Dites nous comment vous aider." name="objet" onChange={this.stateChange} required/>
                        </div>
                        <div className="w-full">
                            <div className="content-center pt-4">
                                <ReCAPTCHA
                                    sitekey="6LfMji8iAAAAAI57trdQtuu8HZLx9QpjrscbFiMk"
                                    onChange={this.onChange}
                                    badge="inline"
                                />
                            </div>
                        </div>
                        <div className="w-full px-4 py-4">
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