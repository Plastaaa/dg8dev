import Connexion from "../components/dashboard/connexion"
import React from "react";

export default class Login extends React.Component {
    
    render(){
        return (
            <div>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <Connexion/>
                </div>
            </div>
        )
    }
}