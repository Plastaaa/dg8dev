import React from "react"
import axios from "axios";
import CardCC from "./cardCC";
import img1 from '../public/profile.jpeg';
import Image from "next/image";


export default class MiniSearch extends React.Component {
    componentDidMount(){
        axios.get(`http://nunesaccount.alwaysdata.net/APIDG8/get4CC.php`)
            .then(res => {
                const ccs = res.data;
                this.setState({ ccs });
            });
    }

    state = {
        ccs: [],
    }
    
    render(){
        return (
            <div className="px-10 sm:px-10 md:px-20 lg:px-28 flex flex-wrap -mx-2 overflow-hidden">
                    <div className="my-2 px-2 w-full overflow-hidden w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full">
                        <a href='./stock?gamme=profile' className="border c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h2 className="mt-2 mb-2  font-bold">
                                    Profilé
                                </h2>
                                <p className="text-sm">
                                    Nos camping-cars profilé
                                </p>
                                <div className="mt-3 flex items-center">
                                    <span className="font-bold text-xl">

                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="my-2 px-2 w-full overflow-hidden w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full">
                        <a href='./stock?gamme=capucine' className="border c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h2 className="mt-2 mb-2  font-bold">
                                    Capucine
                                </h2>
                                <p className="text-sm">
                                    Nos camping-cars capucine
                                </p>
                                <div className="mt-3 flex items-center">
                                    <span className="font-bold text-xl">

                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="my-2 px-2 w-full overflow-hidden w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full">
                        <a href='./stock?gamme=integral' className="border c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h2 className="mt-2 mb-2  font-bold">
                                    Intégral
                                </h2>
                                <p className="text-sm">
                                    Nos camping-cars intégral.
                                </p>
                                <div className="mt-3 flex items-center">
                                    <span className="font-bold text-xl">

                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="my-2 px-2 w-full overflow-hidden w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full">
                        <a href='./stock?gamme=fourgon' className="border c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h2 className="mt-2 mb-2  font-bold">
                                    Fourgon
                                </h2>
                                <p className="text-sm">
                                    Nos fourgons.
                                </p>
                                <div className="mt-3 flex items-center">
                                    <span className="font-bold text-xl">

                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="my-2 px-2 w-full overflow-hidden w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full">
                        <a href='./stock?gamme=van' className="border c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h2 className="mt-2 mb-2  font-bold">
                                    Van
                                </h2>
                                <p className="text-sm">
                                    Nos vans.
                                </p>
                                <div className="mt-3 flex items-center">
                                    <span className="font-bold text-xl">

                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="my-2 px-2 w-full overflow-hidden w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full">
                        <a href='./stock?gamme=CAMPING-CAR/FOURGON' className="border c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h2 className="mt-2 mb-2  font-bold">
                                    Camping-car
                                </h2>
                                <p className="text-sm">
                                    Nos camping-cars.
                                </p>
                                <div className="mt-3 flex items-center">
                                    <span className="font-bold text-xl">

                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
        )
    }
}



