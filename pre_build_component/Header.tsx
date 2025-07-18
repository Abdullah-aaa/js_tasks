import React from 'react'

export default function Header() {
  return (
    <div><header className=" bg-purple-300 body-font sticky shadow-lg">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg href='/' xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl"><a href="/">{/*PanaTech*/}PanaTech</a></span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href='#' className="mr-5 hover:text-gray-900 hover:underline">Home</a>
        <a href='#' className="mr-5 hover:text-gray-900 hover:underline">Tutorials</a>
        <a href='#' className="mr-5 hover:text-gray-900 hover:underline">About us</a>
        <a href='#' className="mr-5 hover:text-gray-900 hover:underline">Contact us</a>
      </nav>
     
    </div>
  </header>
  </div>
  )
}
