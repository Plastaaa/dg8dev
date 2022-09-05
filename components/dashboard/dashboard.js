import axios from "axios";
import MainDashBoard from "./mainDash";
import React from "react";
import FormConnexion from "../formConnexion";

function EstConnecte(props){
    const isLoggedIn = true;
    const nbCC = props.nbCC;
    if(isLoggedIn){
        return <MainDashBoard/>
    }else{
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <FormConnexion/>
            </div>
        )
    }
}

export default class DashBoard extends React.Component {
    componentDidMount() {
        axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getNbCC.php`)
          .then(res => {
            const nbCC = res.data;
            console.log(nbCC);
            this.setState({ nbCC });
          })
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });
    }

    state = {
        nbCC: []
    }
  
    render() {
        return (
            <div>
                
                {
                    this.state.nbCC.map((cc) => (
                        <div>
                            <EstConnecte/>
                        </div>
                    ))
                }
            </div>
        );
    }
}