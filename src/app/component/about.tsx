import React from 'react';

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="Minahil Hamza"
              src={"/Minahil 3.jpg"}
              width={1000}
              height={1000}
            />
          </div>
          
          {/* About Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
              <br className="hidden lg:inline-block" />
             </h1>
            
            <p className="mb-5 leading-relaxed">
              Welcome to my personal website! I am Minahil Hamza Mir, a dedicated professional who holds a Doctor of Pharmacy degree. With over 3 years of experience working in various pharmaceutical companies, I have cultivated a deep understanding of the healthcare industry.
            </p>
            
            <p className="mb-5 leading-relaxed">
              Currently, I am expanding my horizons and diving into the exciting world of Information Technology, with a keen interest in AI generative technologies. I am passionate about learning and have acquired skills in Java, HTML, CSS, Tailwind CSS, React, and Next.js.
            </p>
            <p className="mb-5 leading-relaxed">
            I am committed to continuous self-improvement and am driven by a strong desire to strive for excellence in every endeavor I undertake. Join me on this journey of growth and innovation as I bridge the gap between my pharmaceutical background and my newfound passion for technology.
            </p>
            
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                View CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
