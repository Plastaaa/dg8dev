import React from "react";
import axios from "axios";

export default class Connexion extends React.Component {
    state = {
        resLog: [],
    }
    // Vérifier : const doesPasswordMatch = bcrypt.compareSync(yourPasswordFromLoginForm, yourHashedPassword)
    stateSend = () => {
        //var hashedPassword = bcrypt.hashSync(this.state.pass, bcrypt.genSaltSync());
        //console.log(hashedPassword);
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/seConnecter.php`,{
            params:{
                login: this.state.login,
                pass: this.state.pass,
            }
        })
        .then(res => {
            const resLog = res.data;
            this.setState({ resLog });
            console.log(resLog);
        })

        if(this.resLog.identifiant !== ""){
            window.location.href = "./dashboard/principal"
        }
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });
    }

    render(){
        return (
            <div className="overflow-hidden">
                <div className="py-2 lg:py-2 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Connexion</h2>
                    <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Se connecter au panel.</p>
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 py-2">
                            <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Identifiant</label>
                            <input value={this.state.nom} type="text" id="login" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Identifiant" name="login" onChange={this.stateChange} required/>
                        </div>
                        
                        <div className="w-full px-4 py-2">
                            <label htmlFor="pass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mot de passe </label>
                            <input value={this.state.mail} type="password" id="pass" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Mot de passe" name="pass" onChange={this.stateChange} required/>
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