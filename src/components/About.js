import React from 'react'

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className='flex flex-row max-h-1/5'>
              <a
                  href="https://github.com/leonardooka?tab=repositories"
                  target='_blank'
                  >
                <img src='./leo4.jpg' className='w-20 mr-7 mb-4 border-2'/>
                </a>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Leo.
                <br className="hidden lg:inline-block" />I love to build amazing
                apps.
              </h1>
              </div>
              
              <p className="mb-8 leading-relaxed">
              Enthusiastic about logical reasoning and algorithmic creation, driven by the thrill of problem-solving and error resolution.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Projects
                </a>
                <a
                  href="https://github.com/leonardooka?tab=repositories"
                  target='_blank'
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  My Github Profile
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
      );
}
