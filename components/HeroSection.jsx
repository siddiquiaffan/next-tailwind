import styles from '../styles/Home.module.css'
import Image from 'next/image'

const HeroSection = () => {
    return (<>
        <section className={`${styles.hero} text-gray-700 body-font`}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image alt="hero" src="https://source.unsplash.com/700x400/?agreement" className="object-cover object-center rounded" layout="responsive" width={1000} height={600} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-700">Sample website template using <b>Next.js & Tailwind CSS</b></h1>
                    <p className="mb-8 leading-relaxed"> Proident magna excepteur ullamco mollit cillum et et occaecat ex dolore reprehenderit.</p>
                    <div className="flex lg:flex-row md:flex-col">
                        <a href="#docGenerator">
                            <button type="button" className="bg-gray-100 inline-flex py-3 px-8 rounded-lg items-center hover:bg-blue-200 focus:outline-none">
                                <Image src="https://telegra.ph/file/bb3202d5c1d1b68bc95d9.png" width={35} height={35} layout='intrinsic' alt="Fork" />
                                <span className="ml-7 flex items-start flex-col leading-none"><span className="text-xs text-gray-600 mb-1">Fork On</span><span className="title-font font-medium text-gray-700">GITHUB</span></span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default HeroSection;