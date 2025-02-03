import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
const Footer= () => {
 return(
    <div className="bg-green-50">
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image
     src={require("../../../public/pflogo1.PNG")}
       alt='Iqra' 
       width={100} 
       height={100}
       className='w-[80px]' 
       />
      <span className="ml-3 text-xl">IQRA KALIM</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 IQRA KALIM 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
       target="_blank"
       href={"https://www.instagram.com/iiindividualq_rah98/"} 
       className="text-gray-500">
      
      <RiInstagramFill className="text-3xl hover:text-[#FFA500]"/>
      </Link>
    </span>
  </div>
</footer>
</div>
)
}
export default Footer
