'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import Sidbar from './Sidbar';
function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleSearch = () => setSearchOpen((prev) => !prev);

  const menuIcon = (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );

  const closeIcon = (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const [isloggedin, setIsloggedin] = useState(false)
  useEffect(()=>{
    setIsloggedin(pathname.includes("sign-"))
  },[pathname])

  return !isloggedin && (
    <nav className="bg-white shadow-md sticky mx-auto top-0 z-40 w-full dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto md:px-4 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <Link href="/" className="flex items-center cursor-pointer">
            <Image width={80} height={80} priority src="/logo_transparent.png" alt="Logo"/>
            <span className="-ml-4 text-2xl font-semibold whitespace-nowrap dark:text-white">elmeez</span>
          </Link>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-full max-w-md">
              <input type="text" name="desktop-search"
                className="w-full py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="Search..." aria-label="Search" />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>

            <div className="flex items-center space-x-4">
             <div className='hidden md:flex gap-3'>
             <Link href="/login"
                className="py-2 px-4 text-sm font-medium text-purple-700 border border-purple-700 rounded-lg hover:bg-purple-800 hover:text-white focus:outline-none focus:ring-purple-500 focus:ring-offset-2"
              > Login </Link>
              <Link href="/Register"
                className="py-2 px-4 text-sm font-medium text-purple-700 border border-purple-700 rounded-lg hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-purple-500 focus:ring-offset-2"
              > Register </Link>
             </div>
            </div>
            <div className='flex gap-3'>
              <div className="flex items-center space-x-2 md:hidden">
                <button onClick={toggleSearch} aria-label="Search"
              className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
                </button>
              </div>
              <button type="button" onClick={toggleMenu} aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              className="inline-flex items-center md:hidden p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              {menuOpen ? closeIcon : menuIcon}
            </button>
            </div>
        </div>
      </div>

      {searchOpen && (
        <div className="flex md:hidden justify-center p-4 bg-gray-50 dark:bg-gray-800 transition-all duration-300">
          <input type="text" name="mobile-search"
            className="w-full py-2 pl-3 pr-4 text-sm border border-gray-300 rounded-lg bg-white focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="Search..." />
        </div>
      )}
      {menuOpen && (
        <div>
          <div className="">
            <div className="px-4 pt-2 pb-3 space-y-3">
              <Link href="/login"
                className="block w-full py-2 px-4 text-center text-sm font-medium text-purple-700 border border-purple-700 rounded-lg hover:bg-purple-700 hover:text-white"
                > Login </Link>
              <Link href="/Register"
                className="block w-full py-2 px-4 text-center text-sm font-medium text-purple-700 border border-purple-700 rounded-lg hover:bg-purple-700 hover:text-white"
                > Register </Link>
              </div>
            </div>
          </div>
        )}
    </nav>
  );
}

export default Navbar;
