"use client";
import React from 'react'
import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-2xl font-semibold mb-4 text-green-400">About Us</h4>
            <p className="text-gray-300 text-center md:text-left">
              Globex Agri Export is a leading exporter of quality agricultural
              products, committed to delivering the best to our global
              customers.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-semibold mb-4 text-green-400">Connect With Us</h4>
            <div className="flex space-x-6">
              <Link
                href="https://wa.me/+919104214645"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <FaWhatsapp size={28} />
              </Link>
              <Link
                href="https://www.instagram.com/l__globex_agri_export__l/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                <FaInstagram size={28} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61568272523596&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaFacebook size={28} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-2xl font-semibold mb-4 text-green-400">Contact Us</h4>
            <div className="flex flex-col items-center md:items-end space-y-2">
              <p className="text-gray-300 hover:text-green-400 transition-colors duration-300 cursor-pointer flex items-center"
                 onClick={() => { window.location.href = "mailto:globexagriexport@gmail.com"; }}>
                <FaEnvelope className="mr-2" /> globexagriexport@gmail.com
              </p>
              <p className="text-gray-300 flex items-center">
                <FaPhone className="mr-2" /> +91 9104214645
              </p>
              <p className="text-gray-300 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Gujarat, India
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Globex Agri Export. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}