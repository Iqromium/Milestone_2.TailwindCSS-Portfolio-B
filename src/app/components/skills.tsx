import React from 'react'
import { PiSealCheckBold } from "react-icons/pi";
const Skills = () => {
    return(
        <div id='Skills'>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-bold title-font mb-1">
        SKILLS
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        Skills I've Honed in My Coding Journey (Uptill Now):
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
          {/*Skills Yahan Se Start Hai:*/}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-lime-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
            <PiSealCheckBold className='text-2xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-2 w-full bg-fuchsia-400 rounded-xl'>
                <div className='absolute bg-orange-500 h-2 rounded-xl w-[75%]'></div>
            </div>
            <p className='font-bold text-orange-500 text-right'>75%</p>
          </div>
        </div>
      </div>
        {/*Skills #2:*/}
        <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-lime-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
            <PiSealCheckBold className='text-2xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS (Custom & TailWind)
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-2 w-full bg-fuchsia-400 rounded-xl'>
                <div className='absolute bg-orange-500 h-2 rounded-xl w-[80%]'></div>
            </div>
            <p className='font-bold text-orange-500 text-right'>80%</p>
          </div>
        </div>
      </div>
   {/*Skills#3:*/}
   <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-lime-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
            <PiSealCheckBold className='text-2xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              JavaScript/TypeScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-2 w-full bg-fuchsia-400 rounded-xl'>
                <div className='absolute bg-orange-500 h-2 rounded-xl w-[92%]'></div>
            </div>
            <p className='font-bold text-orange-500 text-right'>92%</p>
          </div>
        </div>
      </div>     
      {/*Skills#4:*/}
   <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-lime-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
            <PiSealCheckBold className='text-2xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              NEXT JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-2 w-full bg-fuchsia-400 rounded-xl'>
                <div className='absolute bg-orange-500 h-2 rounded-xl w-[60%]'></div>
            </div>
            <p className='font-bold text-orange-500 text-right'>60%</p>
          </div>
        </div>
      </div>     
      {/*Skills#5:*/}
   <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-lime-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
            <PiSealCheckBold className='text-2xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              MS Word & PPT
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-2 w-full bg-fuchsia-400 rounded-xl'>
                <div className='absolute bg-orange-500 h-2 rounded-xl w-[90%]'></div>
            </div>
            <p className='font-bold text-orange-500 text-right'>90%</p>
          </div>
        </div>
      </div>     
      
    </div>
  </div>
</section>
        </div>
    )
}
export default Skills