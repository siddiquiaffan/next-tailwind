import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  const NavLink = ({ text, url }) => (
    <>
      <Link href={url}>
        <a
          onClick={handleClick}
          className="mx-2 lg:inline-flex lg:w-auto w-full px-3 py-1 rounded text-gray-700 font-bold items-center justify-center hover:bg-green-600 "
        >
          {text}
        </a>
      </Link>
    </>
  );

  return (
    <>
      <section id="nav" className={styles.nav + ' flex items-center flex-wrap p-3'} >
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4">
            {/* Uncomment below line and src to add logo in navbar */}
            {/* <Image src="/assets/logo.png" width={60} height={60} alt="Logo" layout="intrinsic" /> */}
            <span className="text-xl text-gray-700 font-bold uppercase tracking-wide"> NEXT-TAILWIND </span>
          </a>
        </Link>
        <button
          className={`${styles.menuBtn} inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none`}
          onClick={handleClick}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div
            className={`${styles.links} lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto`}
          >
            <NavLink text="Home" url="/" />
            <NavLink text="Fork" url="/" />
            <NavLink text="About Us" url="/about" />
            <NavLink text="Contact Us" url="/contact" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
