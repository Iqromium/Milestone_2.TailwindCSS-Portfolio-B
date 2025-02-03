"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';
const Hero = () => {
return(
  <section className="text-white body-font bg-cover bg-center custom-image font-extrabold font-mono bg-fixed">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-1000">
            I am
            <br className="hidden lg:inline-block font-mono" />
            <Typewriter
  options={{
    strings:[
      "IQRA KALIM",
      "Web Developer",
      "UI/UX Designer", 
      "Student of Social Sciences(International Relations)",
      ],
    autoStart: true,
    loop: true,
  }}
/>
    </h1>
          <div className="w-[250px] h-[4px] bg-[#ffb2ff]"> </div>
          <p className="mt-4 mb-8 text-lg leading-relaxed gap-y-10 font-bold from-neutral-100">
            I am a Social Sciences Student that is now delving into the technicalities outside the "social" realm and into the colorful yet tedious domain of coding. Coding has ignited the characteristics of facing challanges, always being prepared to tackle any errors that try to cage a novice in "coding-fear" and that nothing is truly impossible. Hence renewing my views and also taking me on a journey that is quite philosophical but mostly punctilious. Moreover, I'm more of a visual-art enthusiast who is currently learning NextJs paired with TailwindCSS, Custom CSS, HTML and React, so in a nut-shell the palette-tools that define "Front-End Development" has also made me cognizant that "Art" on what is at the front might seem colorful and even at times "Basic" or "Simple" however, even in creation of those kinds of art goes a Lot of Dedication, Precision, Time and Constant Corrections and Modifications just like I have been experiencing while Making such front-end coding projects in past-weeks. I aim to triumph in my pursuits of advancing in the field of web-development intertwined with the present-day necessity "AI", so that humans and non-human assets can truly create more resourcefulness and efficiency for mankind.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
            <button className="inline-flex text-white bg-[#8B008B] border-0 py-2 px-6 focus:outline-none hover:bg-[#EE82EE] rounded text-lg">
              Contact
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[30rem]"
            alt="hero"
            src={require("../../../public/meo.png")} />
        </div>
      </div>
      </section>
)
}
export default Hero