import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    

<footer className="bg-black rounded-lg shadow-sm dark:bg-black m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <h1  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse gap-2 font-bold text-4xl lg:text-4xl sm:text-2xl">
                Beauty 
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-400">Saloon</span>
            </h1>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <Link href="/about" className="hover:underline me-4 md:me-6 transition-colors duration-200">
                   About
                </Link>
                <Link href="/privacy" className="hover:underline me-4 md:me-6 transition-colors duration-200">
                   Privacy
                </Link>
                <Link href="/appointment" className="hover:underline me-4 md:me-6 transition-colors duration-200">
                   Contact
                </Link>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 BeautySaloon™ All Rights Reserved.</span>
    </div>
</footer>


  )
}
