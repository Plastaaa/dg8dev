import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import axios from 'axios';
import Image from 'next/image'
import React from 'react';

export default class Gagnants extends React.Component {
    //componentDidMount(){
    //    const [src, setSrc] = React.useState("");
    //}

    state = {
        resCapt: [],
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
          [name]: value,
        });
    }

    handleChange = (e) => {
        this.setState({ jour: e.target.value });
    }

    stateSearch = () => {

    }

    render(){
        return (
            <div>
                <Navbar/>
                <div className="" style={{ backgroundImage: "url(/bg-calendar.png)", backgroundRepeat: 'repeat-y' }}>
                    <div>
                        <div className="flex flex-wrap">
                            <div className="w-1/4">
                            </div>
                            <div className="w-full px-4 md:w-2/4">
                                <div className="pt-10 pb-10">
                                    <h2 className="p-6 text-2xl tracking-tight font-extrabold text-center bg-orange-100 text-green-900">Gagnants du grand jeu DG8 Camping-car !</h2>
                                </div>
                                <div className='flex flex-wrap'>
                                    <div className="hidden w-full xl:w-1/2 pt-8 pr-8">
                                        <div className=''>
                                            <label className="block mb-2 text-sm font-medium text-white">Voir les gagnants du jour</label>
                                            <select value={this.state.jour} onChange={this.handleChange} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="jour" required>
                                                <option key={0}>Choix du jour</option>
                                                <option key={1}>1</option>
                                                <option key={2}>2</option>
                                                <option key={2}>3</option>
                                                <option key={2}>4</option>
                                                <option key={2}>5</option>
                                                <option key={2}>6</option>
                                                <option key={2}>7</option>
                                                <option className='hidden' key={1}>8</option>
                                                <option className='hidden' key={2}>9</option>
                                                <option className='hidden' key={2}>10</option>
                                                <option className='hidden' key={2}>11</option>
                                                <option className='hidden' key={2}>12</option>
                                                <option className='hidden' key={2}>13</option>
                                                <option className='hidden' key={2}>14</option>
                                                <option className='hidden' key={2}>15</option>
                                                <option className='hidden' key={2}>16</option>
                                                <option className='hidden' key={2}>17</option>
                                                <option className='hidden' key={2}>18</option>
                                                <option className='hidden' key={1}>19</option>
                                                <option className='hidden' key={2}>20</option>
                                                <option className='hidden' key={2}>21</option>
                                                <option className='hidden' key={2}>22</option>
                                                <option className='hidden' key={2}>23</option>
                                                <option className='hidden' key={2}>24</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="hidden w-full xl:w-1/2 pt-8 pl-8">
                                        <div className=''>
                                            <label className="block mb-2 text-sm font-medium text-white text-right">Rechercher</label>
                                            <button onClick={this.stateSearch} className='p-2.5 bg-orange-50 w-full rounded-lg'>
                                                Voir !
                                            </button>
                                        </div>
                                    </div>
                                    <div className='w-full xl:w-full rounded-xl'>
                                        <div className='flex items-center bg-gray-100 rounded-xl'>
                                            <Image src={"http://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/jour1.jpg"} className={"rounded-xl p-8"} objectFit={""} width={300} height={600} alt={"Image camping car"} layout={""}/>
                                            <Image src={"http://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/jour2.png"} className={"rounded-xl p-8"} objectFit={""} width={300} height={600} alt={"Image camping car"} layout={""}/>
                                            <Image src={"http://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/jour3.png"} className={"rounded-xl p-8"} objectFit={""} width={300} height={600} alt={"Image camping car"} layout={""}/>
                                            <Image src={"http://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/jour4.png"} className={"rounded-xl p-8"} objectFit={""} width={300} height={600} alt={"Image camping car"} layout={""}/>
                                        </div>
                                        <div className='flex items-center bg-gray-100 rounded-xl'>
                                            <Image src={"http://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/jour5.png"} className={"rounded-xl p-8"} objectFit={""} width={300} height={600} alt={"Image camping car"} layout={""}/>
                                            <Image src={"http://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/jour6.png"} className={"rounded-xl p-8"} objectFit={""} width={300} height={600} alt={"Image camping car"} layout={""}/>
                                            <Image src={"http://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/jour7.png"} className={"rounded-xl p-8"} objectFit={""} width={300} height={600} alt={"Image camping car"} layout={""}/>
                                            <Image /*onError={() => setSrc('/asset/error/blurerrorjour.png')}*/ src={"http://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/jour8.png"} className={"rounded-xl p-8"} objectFit={""} width={300} height={600} alt={"Image camping car"} layout={""}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/4">
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
        )
    }
}