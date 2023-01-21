import React, { useState } from 'react'
import img1 from '../disney-g7aea90139_1920.jpg'
import img2 from '../starwars-g92144cadd_1920.jpg'
import img3 from '../starwars-gac1b7a030_1920.jpg'
import img4 from '../star-wars-g9af12affb_1920.jpg'
import img5 from '../star-wars-g7c02c60f3_1920.jpg'
import img6 from '../at-at-gb50a1f405_1920.jpg'
import img7 from '../scale.jfif'
import Spline from '@splinetool/react-spline';



export const Welcome = () => {
  return (
    <>
      <div className='text-white'>
        {/* Hero Section */}
        <div className=" container py-20 flex flex-col lg:flex-row justify-center mx-auto px-6 ">
          <div className=" px-8 flex justify-center md:w-4/4">
            <img src={img7} alt="Monitoring" />
          </div>
          <div className=" ">
            <h2 className=" text-xl md:text-4xl font-bold mb-2 text-white mt-8">
              Star Wars™: Absolutely Everything You Need to Know
            </h2>
            <h3 className=" text-lg md:text-2xl mb-8 text-gray-200">
              Get the latest official news, trailers, and insights on a galaxy of Star Wars games and apps.
            </h3>
            <button className="hover:bg-gray-500 font-bold text-yellow-300 bg-black border rounded-full   py-2 px-4 md:py-4 md:px-8 shadow-lg uppercase ">
              Sign up now!
            </button>
          </div>
        </div>
        {/* Features Section */}
        <section className="container mx-auto px-6  flex flex-col justify-center">
          <h2 className=" text-3xl md:text-4xl font-bold text-center text-gray-300 mb-8 justify-center">
            The Latest | Star Wars Games + Apps
          </h2>
          <div className="flex items-center flex-wrap justify-center">
            {/* section */}
            <div className="w-full md:w-1/2 px-8 order-1">
              <h4 className=" text-xl md:text-3xl text-gray-300 font-bold mb-3 ">VIRTUAL REALITY </h4>
              <p className="mb-8">Discover new virtual reality and immersive entertainment experiences from ILMxLAB and beyond.</p>
            </div>
            {/* section */}
            <div className="w-full md:w-1/2 px-8 md:order-1 mb-8 md:mb-0 ">
              <img src={img3} alt="Monitoring" />
            </div>
          </div>
          <div className="flex items-center flex-wrap md:mb-20">
            <div className="w-full md:w-1/2 px-8 md:order-1 mb-8 md:mb-0  md:mt-10 ">
              <img src={img5} alt="Monitoring" />
            </div>
            <div className="w-full md:w-1/2 pl-10 order-1">
              <h4 className="  text-xl md:text-3xl text-gray-300 font-bold mb-3 ">STAR WARS ON DISNEY+ </h4>
              <p className="mb-8">All of your star wars favorites now streaming on Disney +   </p>
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 px-8">
              <h4 className="text-3xl text-gray-300 font-bold mb-3">More than robots</h4>
              <p className=" mb-8">High school robotics teams participating in FIRST come together in a competition unlike any other. Now streaming, only on Disney+! </p>
            </div>
            <div className="w-full md:w-1/2 px-8">
              <img src={img1} alt="Syncing" />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <div className="container mx-auto px-6 py-20">
            <Spline scene="https://prod.spline.design/xQQhJK38eEshsx5c/scene.splinecode" />
          </div>
        </section>


        <section>
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-300 mb-10">
              ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-1">
              <div className="w-full md:w-1/3 px-8">
                <img src={img4} alt="Syncing" />
              </div>
              <div className="w-full md:w-1/3 px-8">
                <img src={img2} alt="Syncing" />
              </div>
              <div className="w-full md:w-1/3 px-8">
                <img src={img6} alt="Syncing" />
              </div>
            </div>
          </div>
        </section>

        {/* test */}


        {/* Footer*/}
        <footer className="bg-black text-center ">
          <div className="px-6 pt-6 ">
            <form action="">
              <div className=" md:grid-cols-3 gird-cols-1 gap-4 flex flex-col  md:flex-row justify-center items-center">
                <div className="md:ml-auto md:mb-6">
                  <p className="text-gray-200">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="md:mb-6">
                  <input
                    type="text"
                    className="
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Email address" />
                </div>
                <div className="md:mr-auto mb-6">
                  <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
          <div className="text-center text-gray-200 p-4">
            © 2021 Copyright:
            <a className="text-gray-200" href="https://github.com/Ann-14">Github</a>
          </div>
        </footer>
      </div>
    </>
  )
}
