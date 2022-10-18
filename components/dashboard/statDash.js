import React from "react";
import axios from "axios";

export default class Stat extends React.Component {
    componentDidMount() {
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getNbCC.php`)
          .then(res => {
            const nbCC = res.data;
            this.setState({ nbCC });
        });

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getNbConcess.php`)
          .then(res => {
            const nbConcess = res.data;
            this.setState({ nbConcess });
        });
    }

    state = {
        nbCC: [],
        nbConcess: []
    }

    render(){
        return (
            <div className="p-16">
                <div className="stats shadow">
                    <div className="stat place-items-center">
                        <div className="stat-title">Total Camping-cars</div>
                        <div className="stat-value text-black">
                            {
                                this.state.nbCC.map((cc) => (
                                    cc.nb
                                ))
                            }
                        </div>
                    </div>
            
                    <div className="stat place-items-center">
                        <div className="stat-title">Total Concessions</div>
                        <div className="stat-value text-black">
                            {
                                this.state.nbConcess.map((cc) => (
                                    cc.nb
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}