"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">📚 Book Store</h1>

        {/* Menu items */}
        <div className="flex space-x-6">
          <Link href="/" className="text-white hover:text-blue-200 transition">
            Home
          </Link>
          <Link
            href="/books"
            className="text-white hover:text-blue-200 transition"
          >
            Books
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-blue-200 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
