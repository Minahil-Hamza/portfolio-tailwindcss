'use client';
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-fixed b-cover bg-center custom-image">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Web Developer", "UI/UX Designer", "Pharmacist"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed">
              Minahil Hamza is a dedicated and skilled professional who combines her pharmaceutical background with strong expertise in modern web technologies. With a passion for both front-end and back-end development, she is proficient in Java, TypeScript, Next.js, HTML, CSS, Tailwind CSS, and React. Her unique combination of healthcare knowledge and coding abilities positions her as a versatile developer eager to contribute innovative solutions in the tech world.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[20rem]"
              alt="hero"
              width={500}
              height={500}
              src={require("../../../pub/fresh/public/Minah.jpeg")} // Ensure the image is in the public directory for this path to work
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
