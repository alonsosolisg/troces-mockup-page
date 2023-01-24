/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import pitches from "../pitches.json"

import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <div className="absolute top-0 z-50 pt-6 pl-4">
        <Image 
        src="/troceslogowide.png"
        height={91}
        width={189}
      />
      </div>
      <section className="bg-green-100 header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-6xl text-green-700">
                Taking Care Of Your Personal Data In A Safe Manner
              </h2>
              <div className="mt-12">
                <a
                  href="/admin/dashboard"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-500 active:bg-green-400 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/treedesign.png"
          alt="..."
        />
      </section>

      <section className=" relative block bg-green-700">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-green-700 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4 pt-12">
                <h2 className="text-4xl font-semibold text-white pb-6">
                  Data Management
                </h2>
              
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-green-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i class="fas fa-book text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-green-100">
                  One place for everything
                </h6>
                <p className="mt-2 mb-4 text-green-300">
                  Storage your digital identity in one place for emergencies.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-green-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-clipboard-list text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-green-100">
                  Enter your own information
                </h5>
                <p className="mt-2 mb-4 text-green-300">
                  Add info that can not be found in other systems.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-green-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-hand-holding-heart text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-green-100">
                  Set intentions
                </h5>
                <p className="mt-2 mb-4 text-green-300">
                  Help your loved ones to manage your information.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-green-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded bg-green-500">
                    <i className="fas fa-tree text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold text-green-500">Support Our Nature</h3>
                  <p className="mt-4 text-lg leading-relaxed text-green-700">
                  With subscription based services you are supporting the growth of our forests and nature.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <a href="#" className="flex items-center">
                        <div>
                          <h4 className="text-green-700">
                            Read More About the Initiative
                          </h4>
                        </div>
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 bg-green-300 ml-3">
                            <i className="fas fa-arrow-right"></i>
                          </span>
                        </div>
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section>
      <section className="pb-20 bg-green-300 mt-64 pt-16">
          <div className="container mx-auto px-0 mt-8">
          <h3 className="mb-12 text-center text-green-600 text-3xl font-bold">Pricing</h3>

            <div className="flex flex-wrap mb-24">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-500">
                      <i className="fas fa-calendar"></i>
                    </div>
                    <h6 className="text-xl text-green-500 font-semibold">Monthly Fee</h6>
                    <p className="mt-2 mb-4 text-green-700">
                      Pay monthly XX euros. Half of it will be donated to growing our forest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-500">
                      <i className="fas fa-calendar-plus"></i>
                    </div>
                    <h6 className="text-xl text-green-500 font-semibold">Yearly Fee</h6>
                    <p className="mt-2 mb-4 text-green-700">
                      Pay yearly fee of XX euros. Half of it will be donated.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-500">
                      <i className="fas fa-star-of-life"></i>
                    </div>
                    <h6 className="text-xl text-green-500 font-semibold">Life Insurance</h6>
                    <p className="mt-2 mb-4 text-green-700">
                      Several life insurances have subscription to Troces. The membership will be covered by health insurance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </section>

      <section className="bg-green-300 dark:bg-gray-900">
        <div className="py-8 px-48  lg:py-16 lg:px-6 ">
            <div className="  text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-green-700 dark:text-white">Business Idea Canvas</h2>
            </div> 
            <div className="grid gap-4  mb-6 lg:mb-16 grid-cols-2">
                {pitches.map((pitch, index) =>
                <div className="p-4 mx-8 items-center bg-white rounded-lg shadow flex flex-row dark:bg-gray-800 dark:border-gray-700" key={index}>
                    <a className="object-cover w-full h-full" href={pitch.link} target="_blank" rel="noreferrer">
                          <Image className="w-full h-full object-cover rounded-lg sm:rounded-none sm:rounded-t-lg" src={pitch.image} width={300} height={160} alt="projects"/>
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href={pitch.link} target="_blank" rel="noreferrer">{pitch.name}</a>
                        </h3>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{pitch.description}</p>
                    </div>
                </div>
                )} 

            </div>  
        </div>
      </section>

      <Footer />
    </>
  );
}
