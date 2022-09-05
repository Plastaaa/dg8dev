
export default function Footer() {
        return (
            
            <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://dg8campingcar.com" className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DG8 Camping-car</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="./a-propos" className="mr-4 hover:underline md:mr-6 ">A propos</a>
                        </li>
                        <li>
                            <a href="./contact" className="mr-4 hover:underline md:mr-6">Contact</a>
                        </li>
                        <li>
                            <a href="./mentions-legales" className="hover:underline">Mentions Légales</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://dg8campingcar.com" className="hover:underline">Groupe David Gerbier™</a>. Tous droits réservés.
                </span>
            </footer>

        )
    }