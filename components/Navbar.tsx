'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">📚 Book Store</h1>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <span className="text-2xl">✖️</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        {/* Menu items */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6 md:mt-0 mt-4">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:text-blue-200 transition"
            >
              Home
            </Link>
            <Link
              href="/books"
              className="block px-3 py-2 text-white hover:text-blue-200 transition"
            >
              Books
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-white hover:text-blue-200 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
