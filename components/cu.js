import React from 'react'
import axios from 'axios'
import Image from 'next/image';
import CardCC from './cardCC';

export default class ConcessionUnique extends React.Component {
    componentDidMount() {

        var splitted = window.location.pathname.split('/')[1];
        var splittedSquare = splitted.split('-')[0];
        console.log(splittedSquare);

        //var splittedSquare = "expo";

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getConcessByName.php?concess=${splittedSquare}`)
          .then(res => {
            const concess = res.data;
            this.setState({ concess });
        })

        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getAllCCByConcess.php?concess=${splittedSquare}`)
            .then(res => {
                const ccs = res.data;
                this.setState({ ccs });
            })
    }

    state = {
        concess: [],
        ccs: [],
    }

    

    render() {
        return (
            <div className='p-16'>
                {
                this.state.concess.map((concess) => (
                    <div>
                        <div>
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{concess.libelle}</h2>
                        </div>
                        <div className='flex felx-wrap'>
                            <div className='w-2/3 pt-16'>
                                {
                                    concess.description
                                }
                            </div>
                            <div className='w-1/3'>
                                {
                                    <Image src={concess.linkIMG} height={250} width={500} layout={'responsive'}/>
                                    
                                }
                            </div>
                        </div>
                        <div>
                            <h2 className="pb-8 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Notre stock à {concess.libelle}</h2>
                        </div>
                        <div>
                            <div className="flex flex-wrap overflow-hidden">
                                <div className="w-full overflow-hidden">
                                    <div className="flex flex-wrap -mx-1 overflow-hidden">
                                        {
                                            this.state.ccs.map(cc =>
                                                <div className="w-screen items-center sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
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
                ))
                }
            </div>
        )
    }
  }