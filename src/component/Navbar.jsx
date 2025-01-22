"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-gray-500">
      {/* Logo Section */}
      <div className=" text-xl font-semibold">
        <h2>Logo</h2>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex gap-6 items-center">
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
