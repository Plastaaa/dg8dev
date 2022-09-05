import React from "react";
import axios from 'axios';
import CardCC from "../cardCC";

/*
function Test(props){
  axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getCCByParam.php`,{
    params:{
      marque: props.marque,
      annee: props.annee,
      gamme: props.gamme,
      etat: props.etat,
      ref: props.ref
    }
  })
    .then(res => {
      const ccs2 = res.data;
      this.setState({ ccs2 });
      console.log(ccs2 + "d");
      return(ccs2)
    })
}*/


export default class SearchResult extends React.Component {
    componentDidMount() {
        axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/getAllCC.php`)
            .then(res => {
                const ccs = res.data;
                this.setState({ ccs });
            })
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
            [name]: value,
        });
    }

    state = {
        ccs: [],
        brands: [],
        gammes: [],
        refs: [],
        etats: []
    }

    
    render() {
        return (
            <div>
                <div className="flex flex-wrap overflow-hidden">
                    <div className="w-full overflow-hidden">
                        <div className="flex flex-wrap -mx-1 overflow-hidden">
                            {
                                this.state.ccs.map(cc =>
                                    <div class="w-screen items-center sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                                        <CardCC 
                                            refe={cc.RefDMS}
                                            marque={cc.marque} 
                                            modele={cc.modele} 
                                            ver={cc.ver} 
                                            prix={cc.prixTTC} 
                                            photo={cc.linkIMG} 
                                            km={cc.kilometrage} 
                                            bdv={cc.boitedevitesse}
                                            etat={cc.etat}
                                            famille={cc.famille}
                                            gamme={cc.gamme}
                                            annee={cc.année}
                                            premiereMain={cc.premiereMain}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}