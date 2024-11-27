"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav
      className={`bg-blue-950 md:justify-between text-white flex items-center ${
        session ? "flex-col md:flex-row md:justify-between md:h-14" : "flex-row"
      } md:gap-36 justify-between`}
    >
      {/* Logo Section */}
      <Link
        href="/"
        className="logo flex  items-center font-bold px-4 text-3xl font-serif"
      >
        <span></span>
        <p className="py-2">Mr. Generous</p>
      </Link>

      {/* Right Section (Links & Buttons) */}
      <div
        className={`flex items-center ${
          session ? "flex-col gap-2  md:flex-row" : "flex-row gap-2"
        }`}
      >
        {session ? (
          <>
            <div className="nav flex sm:justify-center items-center gap-4 md:gap-6 px-4">
              <Link
                href="/"
                className="hover:cursor-pointer hover:scale-110 transition-all duration-150 hover:underline font-bold"
              >
                Home
              </Link>
              <Link
                href="/Organizations"
                className="hover:cursor-pointer hover:scale-110 transition-all duration-150 hover:underline font-bold"
              >
                Donate
              </Link>
              <button
                onClick={signOut}
                className="hover:cursor-pointer hover:scale-110 transition-all duration-150 hover:underline font-bold"
              >
                Sign out
              </button>

              <Link href="/">
              <button
                className="text-white md:mx-4 py-1 text-center inline-flex items-center"
                type="button"
              >
                <img
                  width={45}
                  className="rounded-full"
                  src={session.user.image}
                  alt="User Avatar"
                />
              </button>
            </Link>

            </div>
            
          </>
        ) : (
          <Link href={"/Login"}> <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">Login</button> </Link>
          
        )}
      </div>
    </nav>
  );
};

export default Navbar;
