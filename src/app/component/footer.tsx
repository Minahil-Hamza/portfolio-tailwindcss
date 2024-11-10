import Link from 'next/link';
import React from 'react';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">Minahil Hamza</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Minahil Hamza —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* YouTube Link */}
            <Link
              target="_blank"
              href="https://www.youtube.com/@minahilhamza6034"

              className="text-gray-500"
              aria-label="Visit my YouTube channel"
            >
              <BsYoutube className="text-3xl hover:text-red-600" />
            </Link>

            {/* Facebook Link */}
            <Link
              target="_blank"
              href="https://www.facebook.com/minahil.ashraf"
              className="ml-3 text-gray-500"
              aria-label="Visit my Facebook profile"
            >
              <FaFacebook className="text-3xl hover:text-blue-600" />
            </Link>

            {/* LinkedIn Link */}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/dr-minahil-ashraf-886a3912a/"
              className="ml-3 text-gray-500"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin className="text-3xl hover:text-blue-700" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
