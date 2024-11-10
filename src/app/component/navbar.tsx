import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { AiOutlineCloudDownload } from "react-icons/ai";


const Navbar = () => {
    return (
        <div className="bg-white z-50 sticky top-0">
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#">                    
                         <Image 
                            src="/logo.png"  
                            alt="minah" 
                            width={100} 
                            height={100} 
                            className="w-[50px]" 
                        />
                        <span className="ml-3 text-xl">Minahil Hamza</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"#home"} className="mr-5 hover:text-gray-900">
                            Home
                        </Link>
                        <Link href={"#about"} className="mr-5 hover:text-gray-900">
                            About
                        </Link>
                        <Link href={"#skills"} className="mr-5 hover:text-gray-900">
                            Skills
                        </Link>
                        <Link href={"#projects"} className="mr-5 hover:text-gray-900">
                            Project
                        </Link>
                        <Link href={"#contact"} className="mr-5 hover:text-gray-900">
                            Contact
                        </Link>
                    </nav>

                    <a 
                        href={`/resume.pdf`} 
                        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                        download="resume.pdf"
                    >
                        DOWNLOAD CV
                        <AiOutlineCloudDownload className="text-xl ml-2"/>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
