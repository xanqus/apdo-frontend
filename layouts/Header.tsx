import Link from "next/link";
import React, { useEffect } from "react";
import { useCookie } from "next-cookie";

const Header = () => {
  return (
    <>
      <header>
        <nav className="border-b-2">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>Apdo</a>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex">
                  <a
                    className="false inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out false"
                    href="#"
                  >
                    Courses
                  </a>
                  <a
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out false"
                    href="#"
                  >
                    Challenges
                  </a>
                  <a
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out false"
                    href="#"
                  >
                    Community
                  </a>
                  <a
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out false"
                    href="#"
                  >
                    FAQ
                  </a>
                  <a
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out false"
                    href="#"
                  >
                    Roadmap
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {1 ? (
                  <div className="ml-3 relative flex items-center">
                    <Link href="/login">
                      <a className=" hidden  mr-8 sm:block items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out false">
                        Login
                      </a>
                    </Link>
                    <div className="flex-shrink-0">
                      <Link href="/join">
                        <a className="relative inline-flex items-center px-8 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-400 active:bg-blue-700 transition ease-in-out duration-150">
                          <span>Join</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div>logout</div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
