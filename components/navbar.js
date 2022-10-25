import Image from 'next/image'
import CardImage from '../components/logo'
import CardImageDark from '../components/logoBis'
import { useState } from "react";
import phoneIMG from '../public/phone.png'
import youtubeIMG from '../public/logo/social/yt.png'
import fbIMG from '../public/logo/social/fb.png'
import pintIMG from '../public/logo/social/pint.png'
import instaIMG from '../public/logo/social/insta.png'


export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <div>
            <nav className="w-full bg-fixed shadow">
                <div className='text-end flex-end pt-2'>
                    <a href='https://www.youtube.com/channel/UCAL-Abx50ylrHpykSGsehUQ' className='pl-4'>
                        <div className='inline-block'>
                            <Image height={12} width={12} alt={"Youtube logo"} src={youtubeIMG}/>
                        </div>
                        <div className='inline-block pl-1'>
                            <p>Youtube</p>
                        </div>
                    </a>
                    <a href='https://www.facebook.com/dg8campingcars' className='pl-4'>
                        <div className='inline-block'>
                            <Image height={12} width={12} alt={"Facbook logo"} src={fbIMG}/>
                        </div>
                        <div className='inline-block pl-1'>
                            <p>Facebook</p>
                        </div>
                    </a>
                    <a href='https://www.instagram.com/dg8campingcar' className='pl-4'>
                        <div className='inline-block'>
                            <Image height={12} width={12} alt={"Instagram logo"} src={instaIMG}/>
                        </div>
                        <div className='inline-block pl-1'>
                            <p>Instagram</p>
                        </div>
                    </a>
                    <a href='https://www.pinterest.fr/dg8cars/' className='pl-4'>
                        <div className='inline-block'>
                            <Image height={12} width={12} alt={"Pinterest logo"} src={pintIMG}/>
                        </div>
                        <div className='inline-block pl-1 pr-4'>
                            <p>Pinterest</p>
                        </div>
                    </a>
                </div>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-2 md:py-2 md:block">
                                <div className=''>
                                    {
                                        <CardImage/>
                                    }
                                </div>
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
                                <li className="text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                    <a href="/stock?etat=neuf">Neuf</a>
                                </li>
                                <li className="text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                    <a href="/stock?etat=occasion">Occasion</a>
                                </li>
                                <li className="text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                    <a href="/location">Location</a>
                                </li>
                                <li className="text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                    <a href="/atelier">RDV Atelier</a>
                                </li>
                                <li>
                                <div className="dropdown dropdown-hover">
                                    <a href='/le-groupe-david-gerbier'>
                                        <label tabIndex={0} className="text-gray-600 dark:text-gray-100 hover:text-gray-400 m-1">Groupe David Gerbier</label>
                                    </a>
                                    
                                    <ul tabIndex={0} className="dropdown-content card p-2 shadow dark:bg-gray-800 bg-gray-100 rounded-box w-52">
                                        <li><a href='/nos-concessions'>Nos concessions</a></li>
                                        <li><a href='/marques'>Marques distribuées</a></li>
                                        <li><a href='/recrutement'>Recrutement</a></li>
                                    </ul>
                                </div>
                                </li>
                                <li className="text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                    <a href="/rachat-cash">Rachat Cash</a>
                                </li>
                                <li className="text-gray-600 dark:text-gray-100 hover:text-gray-400">
                                    <a href="/contact">Contact</a>
                                </li>
                                {
                                <li>
                                    <a href="tel:+33 0969396973">
                                        <button className='flex flex-wrap text-gray-600 hover:bg-green-700 hover:dark:text-white hover:dark:bg-green-700 dark:text-gray-100 hover:text-white border shadow-lg hover:border-green-500 border-green-700 rounded-lg p-2'>
                                            <div className='w-2/8 px-1 pt-0.5'>
                                                <Image height={16} width={16} src={phoneIMG} alt={"Phone logo"} className={"px-4"}/>
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