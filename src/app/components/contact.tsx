import React from 'react';

const Contact = () =>{
    return(
        <div id="Contact">
<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3747052316676!2d67.0071630741393!3d24.816856347003366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d8e3c137a11%3A0xc0382084d24ff5a5!2sSea%20World%20Residency!5e0!3m2!1sen!2s!4v1732371193361!5m2!1sen!2s"
        style={{ filter: "contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1 text-purple-700">
            Somewhere on Earth, in a 3rd world country "Pakistan",
            Karachi.
            </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-purple-700 leading-relaxed">iqka308@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed text-purple-700 ">090078601</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-orange-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-green-1000">
        Reach Out to Me! :)
      </h2>
      <p className="leading-relaxed mb-6 text-purple-600 font-sans font-medium text-[18px]">
        you can reach-out to me or share your perspective down below, much appreciated.
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-purple-800 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-purple-800 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-purple-800 font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-[#8B008B] border-0 py-2 px-6 focus:outline-none hover:bg-[#EE82EE] rounded text-lg">
        Send Message
      </button>
      <p className="text-xs text-purple-800 font-medium mt-4">
        Thankyou So Much for Visiting My Portfolio Website
      </p>
    </div>
  </div>
</section>
        </div>
    )
}
export default Contact;

