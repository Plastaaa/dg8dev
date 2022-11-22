import React from "react";
import axios from 'axios';
import CardCC from "../cardCC";

export default class SearchResult extends React.Component {
    componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);
        const etatURL = queryParams.get('etat');
        const gammeURL = queryParams.get('gamme');
        const marqueURL = queryParams.get('marque');
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getCCByParam.php`,{
          params:{
            etat: etatURL,
            marque: marqueURL,
            gamme: gammeURL,
          }
        })
        .then(res => {
            const ccs = res.data;
            this.setState({ ccs });
        });

        //initBOXA('CATALOG');

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
        etats: [],
    }

    
    render() {
        return (
            <div>
                <script type="text/javascript" language="javascript"></script>
                <script src="https://boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/rx.min.js"></script>
                <script src="https://boxauto.bnpparibas-pf.com/o/BoxAutoNG-Theme/js/export/ajax.js"></script>

                {
                }
                
                <div className="flex flex-wrap overflow-hidden">
                    <div className="w-full overflow-hidden">
                        <div className="flex flex-wrap -mx-1 overflow-hidden">
                            {
                                this.state.ccs.map(cc =>
                                    <div className="w-screen items-center sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                                        <div class='apartirde'>
                                            <input 
                                                type='hidden' 
                                                name='box-auto-infos' 
                                                wmname='cap_liberte_63800' 
                                                vehiclecategory="V" 
                                                vehicleisnewbo="N" 
                                                datemisecirc="" 
                                                vehiclemileage="" 
                                                proposalprice="" 
                                                vehicleenginerating="" 
                                                vehiclehorsepower="" 
                                                vehicleenergy=""
                                            />
                                        </div>

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