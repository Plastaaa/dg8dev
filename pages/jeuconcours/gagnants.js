import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import axios from 'axios';
import Image from 'next/image'
import React from 'react';

function JourSelect(props){
    var jour = props.jour;
    console.log(jour);

    if(jour > 0 && jour < 25 ){
        return(
            <div className='flex justify-center'>
                <Image src={"http://nunesaccount.alwaysdata.net/APIDG8/IMG/VISUELS/jour"+jour+".png"} className={"rounded-xl content-center p-8"} objectFit={""} width={300} height={600} alt={"Image camping car"} layout={""}/>
            </div>
        )
    }else{
        return(
            <Image src={"/slider/slidercalendar.jpg"} className={"rounded-xl content-center p-8"} objectFit={"fill"} width={1500} height={(700)} alt={"Image camping car"} layout={"responsive"}/>
        )
    }
        
}

export default class Gagnants extends React.Component {
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
                                <div className="pt-4">
                                    <p className="font-light text-center text-white dark:text-white sm:text-l">Tentez votre chance pour gagner un weekend en camping-car, des trottinettes électriques et bien d’autres lots, en répondant à la question du jour !</p>
                                </div>
                                <div className='flex flex-wrap'>
                                    <div className=" w-full xl:pt-8 pb-8">
                                        <div className=''>
                                            <label className="block mb-2 text-sm font-medium text-white">Voir les gagnants du jour</label>
                                            <select value={this.state.jour} onChange={this.handleChange} className="dropdown bg-gray-50 border border-gray-300 p-3 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" name="jour" required>
                                                <option key={0}>Choix du jour</option>
                                                <option key={1}>1</option>
                                                <option key={2}>2</option>
                                                <option key={3}>3</option>
                                                <option key={4}>4</option>
                                                <option key={5}>5</option>
                                                <option key={6}>6</option>
                                                <option key={7}>7</option>
                                                <option key={8}>8</option>
                                                <option key={9}>9</option>
                                                <option key={10}>10</option>
                                                <option key={11}>11</option>
                                                <option key={12}>12</option>
                                                <option key={13}>13</option>
                                                <option key={14}>14</option>
                                                <option key={15}>15</option>
                                                <option key={16}>16</option>
                                                <option key={17}>17</option>
                                                <option key={18}>18</option>
                                                <option key={19}>19</option>
                                                <option key={20}>20</option>
                                                <option key={21}>21</option>
                                                <option key={22}>22</option>
                                                <option key={23}>23</option>
                                                <option key={24}>24</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='w-full xl:w-full rounded-xl pb-8'>
                                        <JourSelect jour={this.state.jour}/>
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