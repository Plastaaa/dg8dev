import React from "react";
import axios from 'axios';

function WhatIsResponseLog(){

}

export default class FormConnexion extends React.Component {
    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });
    }

    stateSend = (props) => {
        axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/seConnecter.php`,{
            params:{
                login: this.state.mdp,
                mdp: this.state.mail
            }
        })
            .then(res => {
                const resLog = res.data;
                this.setState({ resLog });
                console.log(resLog);
                return(
                    console.log(resLog)
                )
            })
    }

    state = {
        resCo: [],
    }
  
    render(){
        return(
            <div className="px-8 py-6 mt-4 text-left bg-white rounded-2xl shadow-lg min-h-fit pt-8 content-start">
                <h3 className="flex items-baseline justify-center text-2xl font-bold text-center">Connexion à votre compte</h3>
                <form action="">
                    <div className="mt-4">
                        <div>
                            <label className="block flex items-baseline justify-center" htmlFor="email">Login</label>
                            <input type="text" name="login" onKeyUp={this.stateChange} placeholder="Identifiant" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"/>
                        </div>
                        <div className="mt-4 justify-center">
                            <label className="block flex items-baseline justify-center">Mot de passe</label>
                            <input type="password" name="mdp" onKeyUp={this.stateChange} placeholder="Mot de passe" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"/>
                        </div>
                        <div className="flex items-baseline justify-center">
                            <button onSubmit={this.stateSend} className="px-6 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-900">Connexion</button>
                        </div>
                        <div className="flex items-baseline justify-center">
                            <a href="./contactAdmin" className="text-sm text-red-600 hover:underline">Mot de passe oublié</a>
                        </div>
                    </div>
                    <WhatIsResponseLog/>
                </form>
            </div>
        );
    }
}
