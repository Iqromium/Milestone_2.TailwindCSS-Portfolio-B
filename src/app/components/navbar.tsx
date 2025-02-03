import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import {FaFileDownload} from 'react-icons/fa';
const Navbar= () => {
    return(
        <div className='bg-white z-50 sticky top-0'>
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={require("../../../public/pflogo1.PNG")}
       alt='Iqra' 
       width={100} 
       height={100}
       className='w-[80px]' 
       />

      <span className="ml-3 text-xl">IQRA KALIM </span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-pink-500">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-pink-500">About</Link>
      <Link href={"#Skills"} className="mr-5 hover:text-pink-500">Skills</Link>
      <Link href={"#Projects"} className="mr-5 hover:text-pink-500">Projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-pink-500">Contact</Link>
    </nav>
      <a href= "/Iqrakalim.pdf"> 
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Download CV
      <FaFileDownload className='text-xl ml-2' />
    </button>
      </a>
  </div>
</header>
        </div>

    )
}
export default Navbar;