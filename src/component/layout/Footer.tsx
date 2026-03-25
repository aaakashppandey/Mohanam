"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>("explore");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-100 text-gray-700 px-6 md:px-16 py-12">
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid grid-cols-4 gap-12">
        {/* EXPLORE */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide mb-4">EXPLORE</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">Sunshine Club</Link>
            </li>
            <li>
              <Link href="#">Our Story</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Cancellation & Refunds</Link>
            </li>
            <li>
              <Link href="#">Covid 19 Update</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide mb-4">CONTACT</h3>
          <div className="text-sm space-y-2">
            <p>Call Us: +91 7999555222</p>
            <p>E-mail: book@postcardresorts.com</p>

            <div className="mt-4">
              <p className="font-medium">Corporate Office</p>
              <p className="mt-1 leading-relaxed">
                The Postcard Hotels & Resorts <br />
                Untitled Hotels & Resorts Pvt. Ltd. <br />
                169, National Media Centre <br />
                Near Shankar Chowk, Gurugram - 122002 <br />
                Haryana, India <br />
                +91 8800010369
              </p>
            </div>
          </div>
        </div>

        {/* FOLLOW */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide mb-4">
            FOLLOW US
          </h3>
          <div className="flex gap-4">
            <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-indigo-600" />
            <FaXTwitter className="w-5 h-5 cursor-pointer hover:text-indigo-600" />
            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-indigo-600" />
          </div>
        </div>

        {/* HEAR */}
        <div>
          <h3 className="text-lg font-medium mb-4">HEAR FROM US</h3>
          <p className="text-sm mb-6">
            Join our mailing list for holiday inspiration and the best offers.
          </p>
          <button className="border border-gray-700 px-8 py-3 text-sm tracking-wide hover:bg-gray-800 hover:text-white transition">
            SIGN UP
          </button>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        {/* EXPLORE */}
        <div className="border-b border-gray-300 py-4">
          <button
            onClick={() => toggleSection("explore")}
            className="flex justify-between w-full text-left"
          >
            <span className="text-lg tracking-wide">EXPLORE</span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                openSection === "explore" ? "rotate-180" : ""
              }`}
            />
          </button>

          {openSection === "explore" && (
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#">Sunshine Club</Link>
              </li>
              <li>
                <Link href="#">Our Story</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Cancellation & Refunds</Link>
              </li>
              <li>
                <Link href="#">Covid 19 Update</Link>
              </li>
            </ul>
          )}
        </div>

        {/* CONTACT */}
        <div className="border-b border-gray-300 py-4">
          <button
            onClick={() => toggleSection("contact")}
            className="flex justify-between w-full text-left"
          >
            <span className="text-lg tracking-wide">CONTACT</span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                openSection === "contact" ? "rotate-180" : ""
              }`}
            />
          </button>

          {openSection === "contact" && (
            <div className="mt-4 text-sm space-y-2">
              <p>Call Us: +91 7999555222</p>
              <p>E-mail: book@postcardresorts.com</p>
              <p className="mt-2 leading-relaxed">
                The Postcard Hotels & Resorts <br />
                169, National Media Centre <br />
                Gurugram - 122002, India
              </p>
            </div>
          )}
        </div>

        {/* HEAR FROM US (always open) */}
        <div className="py-6">
          <h3 className="text-lg tracking-wide mb-3">HEAR FROM US</h3>
          <p className="text-sm mb-6 leading-relaxed">
            Join our mailing list for holiday inspiration and the best offers at
            The Postcard Hotel.
          </p>

          <button className="w-full border border-gray-700 py-3 text-sm tracking-wide">
            SIGN UP
          </button>
        </div>

        {/* FOLLOW */}
        <div className="flex gap-4">
          <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-indigo-600" />
          <FaXTwitter className="w-5 h-5 cursor-pointer hover:text-indigo-600" />
          <FaInstagram className="w-5 h-5 cursor-pointer hover:text-indigo-600" />
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-xs text-gray-600 text-center md:text-left">
        © THE POSTCARD HOTELS & RESORTS ALL RIGHTS RESERVED, 2026
      </div>
    </footer>
  );
}
