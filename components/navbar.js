import Image from 'next/image'
import CardImage from '../components/logo'

import { useState } from "react";

import phoneIMG from '../public/phone.png'

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <div>
            <nav className="w-full bg-fixed shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-2 md:py-2 md:block">
                                {
                                    <CardImage/>
                                }
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? "block" : "hidden"
                            }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-gray-600 hover:text-gray-400">
                                    <a href="/stock?etat=neuf">Neuf</a>
                                </li>
                                <li className="text-gray-600 hover:text-gray-400">
                                    <a href="/stock?etat=occasion">Occasion</a>
                                </li>
                                <li className="text-gray-600 hover:text-gray-400">
                                    <a href="/location">Location</a>
                                </li>
                                <li className="text-gray-600 hover:text-gray-400">
                                    <a href="/atelier">RDV Atelier</a>
                                </li>
                                <li className="text-gray-600 hover:text-gray-400">
                                    <a href="/notre-groupe">Groupe David Gerbier</a>
                                </li>
                                <li className="text-gray-600 hover:text-gray-400">
                                    <a href="/rachat-cash">Rachat Cash</a>
                                </li>
                                <li>
                                    <a href="tel:+33 0969396973">
                                        <button className='flex flex-wrap hover:bg-gray-200 bg-gray-300 text-gray-600 hover:text-gray-400 rounded-lg p-2'>
                                            <div className='w-2/8 px-2'>
                                                <Image height={16} width={16} src={phoneIMG} className={"px-4"}/>
                                            </div>
                                            <div className='w-6/8'>
                                                09 69 39 69 73
                                            </div>
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
    );
}