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
            <div className="px-10 flex flex-wrap -mx-2 overflow-hidden">
                    <div class="my-2 px-2 w-full overflow-hidden w-1/3">
                        <a href='./stock?gamme=profile' className="border c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div class="p-4">
                                <h2 class="mt-2 mb-2  font-bold">
                                    Profilé
                                </h2>
                                <p class="text-sm">
                                    Nos camping-cars profilé
                                </p>
                                <div class="mt-3 flex items-center">
                                    <span class="font-bold text-xl">

                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="my-2 px-2 w-full overflow-hidden w-1/3">
                        <a href='./stock?gamme=capucine' className="border c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div class="p-4">
                                <h2 class="mt-2 mb-2  font-bold">
                                    Capucine
                                </h2>
                                <p class="text-sm">
                                    Nos camping-cars capucine
                                </p>
                                <div class="mt-3 flex items-center">
                                    <span class="font-bold text-xl">

                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="my-2 px-2 w-full overflow-hidden w-1/3">
                        <a href='./stock?gamme=integral' className="border c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div class="p-4">
                                <h2 class="mt-2 mb-2  font-bold">
                                    Intégral
                                </h2>
                                <p class="text-sm">
                                    Nos camping-cars intégral.
                                </p>
                                <div class="mt-3 flex items-center">
                                    <span class="font-bold text-xl">

                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="my-2 px-2 w-full overflow-hidden w-1/3">
                        <a href='./stock?gamme=fourgon' className="border c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div class="p-4">
                                <h2 class="mt-2 mb-2  font-bold">
                                    Fourgon
                                </h2>
                                <p class="text-sm">
                                    Nos fourgons.
                                </p>
                                <div class="mt-3 flex items-center">
                                    <span class="font-bold text-xl">

                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="my-2 px-2 w-full overflow-hidden w-1/3">
                        <a href='./stock?gamme=van' className="border c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div class="p-4">
                                <h2 class="mt-2 mb-2  font-bold">
                                    Van
                                </h2>
                                <p class="text-sm">
                                    Nos vans.
                                </p>
                                <div class="mt-3 flex items-center">
                                    <span class="font-bold text-xl">

                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="my-2 px-2 w-full overflow-hidden w-1/3">
                        <a href='./stock?gamme=CAMPING-CAR/FOURGON' className="border c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div class="p-4">
                                <h2 class="mt-2 mb-2  font-bold">
                                    Camping-car
                                </h2>
                                <p class="text-sm">
                                    Nos camping-cars.
                                </p>
                                <div class="mt-3 flex items-center">
                                    <span class="font-bold text-xl">

                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
        )
    }
}



