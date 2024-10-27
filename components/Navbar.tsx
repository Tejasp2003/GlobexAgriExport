'use client'

import { Leaf, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-green-600" />
          <span className="text-2xl font-bold text-gray-800">Globex Agri Export</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-green-600 transition duration-200">Home</Link></li>
           
            <li><Link href="/products" className="text-gray-600 hover:text-green-600 transition duration-200">Products</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-green-600 transition duration-200">Contact</Link></li>
          </ul>
        </nav>
        <button 
          className="md:hidden text-gray-600 hover:text-green-600 transition duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col items-center py-4">
            <li className="w-full">
              <Link 
                href="/" 
                className="block text-center py-2 text-gray-600 hover:text-green-600 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link 
                href="/about" 
                className="block text-center py-2 text-gray-600 hover:text-green-600 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="w-full">
              <Link 
                href="/products" 
                className="block text-center py-2 text-gray-600 hover:text-green-600 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li className="w-full">
              <Link 
                href="/contact" 
                className="block text-center py-2 text-gray-600 hover:text-green-600 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar