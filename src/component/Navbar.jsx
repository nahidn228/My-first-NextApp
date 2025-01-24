"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-500">
      <nav className="flex justify-between container mx-auto p-4">
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
                className="text-white  transition duration-500 border-2  px-2 py-1 rounded-md hover:bg-black hover:text-white font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="text-white  transition duration-500 border-2  px-2 py-1 rounded-md hover:bg-black hover:text-white font-semibold"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/api/auth/login"
                className="text-white  transition duration-500 border-2  px-2 py-1 rounded-md hover:bg-black hover:text-white font-semibold"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/api/auth/register"
                className="text-white  transition duration-500 border-2  px-2 py-1 rounded-md hover:bg-black hover:text-white font-semibold"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/api/auth/logout"
                className="text-white  transition duration-500 border-2  px-2 py-1 rounded-md hover:bg-black hover:text-white font-semibold"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
