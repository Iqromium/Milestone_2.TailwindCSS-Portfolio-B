import Link from 'next/link';
import React from 'react';


const Projects = () => {
return(
    <div id='Projects'>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Projects Created by IQRA (I.Q.K) Uptill-Now:
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Here are listed All the works that I as a newbie have done as of yet,</p>
        <p>Have a look and feel free to Click-In and Check to View..
        what You "Like" or "Unlike"- so that I can improve myself on it :)
        </p>
    </div>
    <div className="flex flex-wrap -m-8 justify-center gap-8 mt-[5rem]">
        {/*Projects Yahan Se Start Horahay Hain:*/}
      <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projy1.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-lime-500 mb-1">
              RETRO PHONE SELLING E-COMMERCE WEBSITE#1:
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              "Dial Up The Past!"
            </h1>
            <p className="leading-relaxed w-45 h-45">
This particular Project represents my Fondness for Old-Retro Technology, specificially Early 2000's Phones.</p>
<Link target='_blank' href={''}>
<p className='text-fuchsia-500 font-bold mt-2 hover:underline'>View Project..
</p>
</Link>
</div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projy2.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-lime-500 mb-1">
            PRODUCT ALONGSIDE WELFARE BASED E-COMMERCE WEBSITE#2:
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              "Bag 'Up' Cats"
            </h1>
            <p className="leading-relaxed w-45 h-45">
This particular Project represents my Adoration of Cats and Bags both in one equation. I made this as symbol of My Interests.</p>
<Link target='_blank' href={''}>
<p className='text-fuchsia-500 font-bold mt-2 hover:underline'>View Project..
</p>
</Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="projy3.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-lime-500 mb-1">
           HORROR-MOVIE BASED PLATFORM (NETFLIX INSPO) WEBSITE#3:
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            "SKULL,SCREAM&SCREEN"
            </h1>
            <p className="leading-relaxed w-45 h-45">
            I created this particular Project since I am a Horor-Movie Enthusiast and it Personifies my Interests.</p>
            <Link target='_blank' href={''}>
<p className='text-fuchsia-500 font-bold mt-2 hover:underline'>View Project..
</p>
</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
)
}
export default Projects