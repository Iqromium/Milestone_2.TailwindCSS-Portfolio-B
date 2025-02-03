
import Image from 'next/image';
import React from 'react';


const About = () => {
    return(
<div id='About'>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[300px] h-[500px] "
        alt="hero"
        src={require('../.../../../../public/meo.png')}
        width={300}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me:
      </h1>
      <p className="mb-6 leading-loose font-bold text-fuchsia-700 text-[18px]">
        I have done my O-levels at "The Hampton School" in Clifton Karachi, my A-levels in "D.A Public College" Defence Phase-8 Karachi and my Bachelors in BS Social Sciences with Majors in "International Relations" at SZABIST Karachi Campus. I have always been an ardent student of Humanities and Art disciplines and therefore I am very strongly opinionated, rationally philosophical and a creative at heart. I have just recently eversince 2023 joined Coding and Web-Development whilst stepping into the unknown territory of Computer & IT which is crucial to be concious of in the 21st century.</p>
     <p className='text-fuchsia-700 leading-loose font-bold text-[18px] mb-6'>I joined the Government Initiative for IT (AI & Web Development) in order to experience something new and initially things were difficult for me as I'm not very much of a computer-friendly or IT enthusiast however, Thanks to my Teachers and very supportive fellow Students and fellow Pakistanis for empowering me on this journey that has instilled in me that with hardwork and dedication even "unknown" is possible. I'm grateful that I have passed in my "Typescript" Q-1 Finals and am currently enrolled in Q-2 of [GI-AIWMD] learning "Front-End Development" from my teacher Sir.Hamzah in the Friday 9-12pm slots. I have befriended tools like "Html, Css(custom & TW) & NextJs" and infact have made my portfolios as I'm typing this very Portfolio using Tailwind CSS to share my details with You.
        Thankyou for reading All This :)</p>
      <div className="flex justify-center">
        <a href={"/Iqrakalim.pdf"}> 
        <button className="inline-flex text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">
          View CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

</div>
    )
}
export default About