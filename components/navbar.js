import {useState} from 'react'
import Image from 'next/image'
import CardImage from '../components/logo'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}
function MobileNav({open, setOpen}) {
    return (
        <div className={`z-40 absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
                <CardImage/>
            </div>
            <div className="flex flex-col ml-5">
                <a className="text-xl font-normal my-5" href="/stock" onClick={() => setTimeout(() => {setOpen(!open)}, 50)}>
                    Neufs
                </a>
                <a className="text-xl font-normal my-5" href="/stock" onClick={() => setTimeout(() => {setOpen(!open)}, 50)}>
                    Occasion
                </a>
                <a className='text-xl font-normal my-5' href="/atelier" onClick={() => setTimeout(() => {setOpen(!open)}, 50)}>
                    RDV Atelier
                </a>
                <a className='text-xl font-normal my-5' href="/stock" onClick={() => setTimeout(() => {setOpen(!open)}, 50)}>
                    Stock
                </a>
                <a className='text-xl font-normal my-5' href="/nos-concessions" onClick={() => setTimeout(() => {setOpen(!open)}, 50)}>
                    Nos concessions
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
        return (
            <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
                <MobileNav open={open} setOpen={setOpen}/>
                <div className="w-6/12 flex items-center">
                    <CardImage/>
                    <div className="hidden md:flex">
                        <NavLink to="/stock?etat=Neuf">
                            Neufs
                        </NavLink>
                        <NavLink to="/stock">
                            Occasion
                        </NavLink>
                        <NavLink to="/atelier">
                            RDV Atelier
                        </NavLink>
                        <NavLink to="/stock">
                            Stock
                        </NavLink>
                        <NavLink to="/stock">
                            Nos concessions
                        </NavLink>
                    </div>
                </div>
                <div className="w-6/12 flex justify-end items-center">
                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>
    
                    <div className="hidden md:flex">
                        <NavLink to="/stock">
                            
                        </NavLink>
                        <NavLink to="/stock">
                            
                        </NavLink>
                        <NavLink to="/atelier">
                            
                        </NavLink>
                        <NavLink to="/stock">
                            
                        </NavLink>
                        <NavLink to="/nos-concessions">
                            
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
    }