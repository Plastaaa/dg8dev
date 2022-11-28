import React from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import CardCC from '../cardCC'

export default class Stat extends React.Component {
    state = {
        concess: [],vovn:[], cchuit:[]
    }

    componentDidMount(){
        const cookies = new Cookies();
        var idcc = cookies.get('logId');
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getConcessById.php?concess=${idcc}`)
        .then(res => {
            const concess = res.data;
            this.setState({ concess });
        })

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getVoVnByIdConcess.php?concess=${idcc}`)
        .then(res => {
            const vovn = res.data;
            this.setState({ vovn });
        })

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/get8CCByConcess.php?concess=${idcc}`)
        .then(res => {
            const cchuit = res.data;
            console.log(cchuit)
            this.setState({ cchuit });
        })
    }

    render(){
        return (
            <div className="pt-16">
                {
                    this.state.concess.map(cc =>
                        <div>
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Bonjour {cc.societe}.</h2>
                            {
                                this.state.vovn.map(vl=>
                                    <p className="mb-8 lg:mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">Vous avez actuellement sur votre parc {vl.occasion} VO et {vl.neuf} VN.</p>
                                )
                            }
                        </div>
                    )
                }

                <p className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white">Quelques unes de vos annonces :</p>
                <div>
                    <div className="flex flex-wrap overflow-hidden">
                        <div className="w-full overflow-hidden">
                            <div className="flex flex-wrap overflow-hidden">
                                {
                                    this.state.cchuit.map(cc =>
                                        <div className="items-center sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
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
            </div>
        )
    }
}