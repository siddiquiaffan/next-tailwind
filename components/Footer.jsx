import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
    const date = (new Date()).getFullYear()
    return (<>
        <footer className={`${styles.hero} text-white body-font`}>
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span className="ml-3 text-xl text-gray-700 text-uppercase">NEXT-TAILWIND</span></a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {date} NEXT-TAILWIND</p>
            </div>
        </footer>
    </>)
}

export default Footer