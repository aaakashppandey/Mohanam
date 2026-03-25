"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#fff8f1] border-b border-gray-200">
        <div className="relative w-full px-6 py-3 flex items-center">
          {/* ✅ LEFT: LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Shree Mohanam"
              width={140}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* ✅ MOBILE HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-4 flex flex-col justify-center items-center w-8 h-8 relative active:scale-90"
          >
            <span
              className={`absolute h-[2px] w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 top-3" : "top-2"
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "top-3"
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 top-3" : "top-4"
              }`}
            />
          </button>

          {/* ✅ CENTER NAV (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-indigo-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/rooms"
              className="text-gray-800 hover:text-indigo-600 font-medium"
            >
              Rooms
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-indigo-600 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-indigo-600 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* ✅ RIGHT SIDE */}
          <div className="ml-auto flex flex-col items-end">
            <div className="text-sm text-gray-600 mb-1">
              <Link href="/join" className="hover:text-indigo-600">
                JOIN
              </Link>
              <span className="mx-1">|</span>
              <Link href="/login" className="hover:text-indigo-600">
                LOGIN
              </Link>
            </div>

            <Link
              href="/register"
              className="bg-[#C46A2E] text-white px-5 py-2 rounded-sm hover:bg-[#a55524] font-semibold"
            >
              BOOK
            </Link>
          </div>
        </div>
      </header>

      {/* ✅ MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/rooms" onClick={() => setIsOpen(false)}>
          Rooms
        </Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
