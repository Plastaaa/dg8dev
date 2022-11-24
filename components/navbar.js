import Image from 'next/image'
import CardImage from '../components/logo'
import { useState } from "react";
import phoneIMG from '../public/phone.png'
import whitephoneIMG from '../public/whitephone.png'
import youtubeIMG from '../public/logo/social/yt.png'
import fbIMG from '../public/logo/social/fb.png'
import instaIMG from '../public/logo/social/insta.png'
import whiteyoutubeIMG from '../public/logo/social/ytwhite.png'
import whitefbIMG from '../public/logo/social/fbwhite.png'
import whiteinstaIMG from '../public/logo/social/instawhite.png'
import gift from '../public/gift.png'
import whitegift from '../public/whitegift.png'

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <div>
            <nav className="w-full bg-fixed shadow">
                <div className='text-end flex-end pt-2 pr-4'>
                    <a href='https://www.youtube.com/channel/UCAL-Abx50ylrHpykSGsehUQ' className='inline-block dark:hidden pl-4'>
                        <div className='inline-block'>
                            <Image height={12} width={12} alt={"Youtube logo"} src={youtubeIMG}/>
                        </div>
                        <div className='md:inline-block hidden pl-1'>
                            <p className=''>Youtube</p>
                        </div>
                    </a>
                    <a href='https://www.youtube.com/channel/UCAL-Abx50ylrHpykSGsehUQ' className='hidden dark:inline-block pl-4'>
                        <div className='inline-block'>
                            <Image height={12} width={12} alt={"Youtube logo dark"} src={whiteyoutubeIMG}/>
                        </div>
                        <div className='md:inline-block hidden pl-1'>
                            <p className='text-white'>Youtube</p>
                        </div>
                    </a>

                    <a href='https://www.facebook.com/dg8campingcars' className='pl-4 inline-block dark:hidden'>
                        <div className='inline-block'>
                            <Image height={12} width={12} alt={"Facbook logo"} src={fbIMG}/>
                        </div>
                        <div className='md:inline-block hidden pl-1'>
                            <p>Facebook</p>
                        </div>
                    </a>
                    <a href='https://www.facebook.com/dg8campingcars' className='hidden dark:inline-block pl-4'>
                        <div className='inline-block'>
                            <Image height={12} width={12} alt={"Facbook logo"} src={whitefbIMG}/>
                        </div>
                        <div className='md:inline-block hidden pl-1'>
                            <p className='text-white'>Facebook</p>
                        </div>
                    </a>
                    
                    <a href='https://www.instagram.com/dg8campingcar' className='pl-4 inline-block dark:hidden'>
                        <div className='inline-block'>
                            <Image height={12} width={12} alt={"Instagram logo"} src={instaIMG}/>
                        </div>
                        <div className='md:inline-block hidden pl-1'>
                            <p>Instagram</p>
                        </div>
                    </a>
                    <a href='https://www.instagram.com/dg8campingcar' className='hidden dark:inline-block pl-4'>
                        <div className='inline-block'>
                            <Image height={12} width={12} alt={"Instagram logo"} src={whiteinstaIMG}/>
                        </div>
                        <div className='md:inline-block hidden pl-1'>
                            <p className='text-white'>Instagram</p>
                        </div>
                    </a>
                </div>
                <div className="justify-between px-4 mx-auto lg:items-center lg:flex lg:px-8">
                    <div>
                        <div className="flex items-center justify-between py-2 lg:py-2 lg:block">
                                <div className=''>
                                    {
                                        <CardImage/>
                                    }
                                </div>
                            <div className="lg:hidden">
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
                            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                                navbar ? "block" : "hidden"
                            }`}
                        >
                            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-4 lg:space-y-0">
                                <li className="text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                    <a href="/stock?etat=neuf">Neuf</a>
                                </li>
                                <li className="text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                    <a href="/stock?etat=occasion">Occasion</a>
                                </li>
                                <li className="hidden xl:block text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                    <a href="/location">Location</a>
                                </li>
                                <li>
                                    <div className="dropdown dropdown-hover">
                                        <a href='/atelier'>
                                            <label tabIndex={0} className="text-gray-600 dark:text-gray-100 hover:text-gray-400 m-1">Prendre RDV</label>
                                        </a>
                                        
                                        <ul tabIndex={0} className="dropdown-content card p-2 shadow dark:bg-gray-800 bg-gray-100 rounded-box w-52">
                                            <li><a href='/atelier'>Rendez-vous atelier</a></li>
                                            <li><a href='/controle-humidite'>Contrôle d'humidité</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='block xl:hidden'>
                                    <div className="dropdown dropdown-hover">
                                        <a href='/'>
                                            <label tabIndex={0} className="text-gray-600 dark:text-gray-100 hover:text-gray-400 m-1">Services</label>
                                        </a>
                                        
                                        <ul tabIndex={0} className="dropdown-content card p-2 shadow dark:bg-gray-800 bg-gray-100 rounded-box w-52">
                                            <li className="block xl:hidden text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                                <a href="/rachat-cash">Rachat Cash</a>
                                            </li>
                                            <li className="block xl:hidden text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                                <a href="/contact">Contact</a>
                                            </li>
                                            <li className="block xl:hidden text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                                <a href="/location">Location</a>
                                            </li>
                                            <li className='block xl:hidden text-gray-600 dark:text-gray-100 hover:text-gray-400'><a href='/guide/le-guide-poids-lourd'>Guide d'achat poids lourd</a></li>
                                            <li className='block xl:hidden text-gray-600 dark:text-gray-100 hover:text-gray-400'><a href='/guide/le-guide-camping-car'>Guide d'achat Camping-car</a></li>
                                            <li className='block xl:hidden text-gray-600 dark:text-gray-100 hover:text-gray-400'><a href='/guide/le-guide-van-et-fourgon'>Guide d'achat Van et Fourgon</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hidden xl:block text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                    <a href="/rachat-cash">Rachat Cash</a>
                                </li>
                                <li className="hidden xl:block text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                    <a href="/contact">Contact</a>
                                </li>
                                <li className='hidden xl:block'>
                                    <a>
                                        <div className="dropdown dropdown-hover">
                                            <a href='/guide/le-guide-camping-car'>
                                                <a href='/guide/le-guide-camping-car' tabIndex={0} className="text-gray-600 dark:text-gray-100 hover:text-gray-400 m-1">Guide d'achat</a>
                                            </a>
                                            <ul tabIndex={0} className="dropdown-content card p-2 shadow dark:bg-gray-800 bg-gray-100 rounded-box w-64">
                                                <li><a href='/guide/le-guide-poids-lourd'>Guide d'achat poids lourd</a></li>
                                                <li><a href='/guide/le-guide-camping-car'>Guide d'achat Camping-car</a></li>
                                                <li><a href='/guide/le-guide-van-et-fourgon'>Guide d'achat Van et Fourgon</a></li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown dropdown-hover">
                                        <a href='/le-groupe-david-gerbier'>
                                            <a href='/le-groupe-david-gerbier' tabIndex={0} className="text-gray-600 dark:text-gray-100 hover:text-gray-400 m-1">Groupe David Gerbier</a>
                                        </a>
                                        
                                        <ul tabIndex={0} className="dropdown-content card p-2 shadow dark:bg-gray-800 bg-gray-100 rounded-box w-52">
                                            <li><a href='/nos-concessions'>Nos concessions</a></li>
                                            <li><a href='/marques'>Marques distribuées</a></li>
                                            <li><a href='/recrutement'>Recrutement</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="/jeuconcours">
                                        <button className='flex flex-wrap text-gray-600 bg-green-800 hover:dark:text-white hover:dark:bg-green-700 dark:text-gray-100 hover:text-white border shadow-lg hover:border-green-500 border-green-700 rounded-lg p-2'>
                                            <div className='w-2/8 px-1 pt-0.5'>
                                                <div className='block dark:hidden pr-2'>
                                                    <Image height={16} width={16} src={whitegift} objectFit={"contain"} alt={"Gift logo"} className={"px-4"}/>
                                                </div>
                                                <div className='hidden dark:block'>
                                                    <Image height={16} width={16} src={whitegift} objectFit={"contain"} alt={"Gift logo dark"} className={"px-4"}/>
                                                </div>
                                            </div>
                                            <div className='w-6/8'>
                                                <p className='text-white pr-2'>
                                                    JEU CONCOURS
                                                </p>
                                            </div>
                                        </button>
                                    </a>
                                </li>
                                {
                                <li>
                                    <a href="tel:+33 0969396973">
                                        <button className='flex flex-wrap text-gray-600 hover:bg-green-800 hover:dark:text-white hover:dark:bg-green-700 dark:text-gray-100 hover:text-white border shadow-lg hover:border-green-500 border-green-700 rounded-lg p-2'>
                                            <div className='w-2/8 px-1 pt-0.5'>
                                                <div className='block dark:hidden'>
                                                    <Image height={16} width={16} src={phoneIMG} objectFit={"contain"} alt={"Phone logo"} className={"px-4"}/>
                                                </div>
                                                <div className='hidden dark:block'>
                                                    <Image height={16} width={16} src={whitephoneIMG} objectFit={"contain"} alt={"Phone logo dark"} className={"px-4"}/>
                                                </div>
                                            </div>
                                            <div className='w-6/8'>
                                                09 69 39 69 73
                                            </div>
                                        </button>
                                    </a>
                                </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}