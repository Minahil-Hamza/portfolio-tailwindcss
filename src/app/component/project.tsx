import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Project = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Showcasing my work and skills.</p>
          </div>

          <div className="flex flex-wrap -m-8">

            {/* Project 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
              <Image
  alt="Tic Tac Toe"
  className="absolute inset-0 w-full h-full object-cover object-center"
  src={require('../../../pub/fresh/public/tictactoe.png')}
/>

               
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Tic Tac Toe</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Game</h1>
                  <p className="leading-relaxed">A simple Tic Tac Toe game built with React.</p>
                  <Link href="https://tic-tac-toe-by-minahil-hamza-mir.vercel.app/">
                    <p className="text-blue-500 hover:underline">View Project...</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="Student ID Card App"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require('../../../pub/fresh/public/Stdcard.png')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Student ID Card App</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Identity Card</h1>
                  <p className="leading-relaxed">An app to generate student ID cards using React, Next.js, and Tailwind CSS.</p>
                  <Link href="https://id-card-generation.vercel.app/e">
                    <p className="text-blue-500 hover:underline">View Project...</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="To-do List"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require('../../../pub/fresh/public/To-do-list.png')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Todo List</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Task-Performance-List</h1>
                  <p className="leading-relaxed">A task management app built using React, Next.js, and Tailwind CSS.</p>
                  <Link href="https://id-card-generation.vercel.app/e">
                    <p className="text-blue-500 hover:underline">View Project...</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="CLI Calculator"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require('../../../pub/fresh/public/simplecal.png')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">CLI Calculator</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Useful tool for Calculation</h1>
                  <p className="leading-relaxed">A command-line calculator built with TypeScript.</p>
                  <Link href="https://id-card-generation.vercel.app/e">
                    <p className="text-blue-500 hover:underline">View Project...</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="Weather App"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require('../../../pub/fresh/public/weather.png')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Weather App</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Useful for Weather Forecast</h1>
                  <p className="leading-relaxed">A weather app that fetches real-time weather data.</p>
                  <Link href="https://id-card-generation.vercel.app/e">
                    <p className="text-blue-500 hover:underline">View Project...</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="Resume Builder"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require('../../../pub/fresh/public/resume.png')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Shareable Link Resume Builder</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Useful for Resume Building</h1>
                  <p className="leading-relaxed">A responsive Resume Builder app developed using Next.js and Tailwind CSS.</p>
                  <Link href="https://id-card-generation.vercel.app/e">
                    <p className="text-blue-500 hover:underline">View Project...</p>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
