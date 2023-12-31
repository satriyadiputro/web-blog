"use client"
import React, { useState } from 'react';

const NavbarNew = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ml-2">
          <a className="text-xl text-neutral-800 dark:text-neutral-200" href="#">
            Navbar
          </a>
        </div>
        {/* Hamburger button for mobile view */}
        <button className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button" data-te-collapse-init data-te-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleDropdown}>
          {/* Hamburger icon */}
          <span className="[&gt;svg]:w-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </span>
        </button>

        {/* Collapsible navbar container */}
        <div className={`transition-all duration-300 ${isDropdownOpen ? 'visible' : 'hidden'} mt-2 flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto`} id="navbarSupportedContent2" data-te-collapse-item>
          {/* Left links */}
          <ul className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row" data-te-navbar-nav-ref>
            {/* Home link */}
            <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
              <a className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" aria-current="page" href="#" data-te-nav-link-ref>
                Home
              </a>
            </li>
            {/* Features link */}
            <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
              <a className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" href="#" data-te-nav-link-ref>
                Features
              </a>
            </li>
            {/* Pricing link */}
            <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
              <a className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" href="#" data-te-nav-link-ref>
                Pricing
              </a>
            </li>
            {/* Disabled link */}
            <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-link-ref>
              <a className="text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;
