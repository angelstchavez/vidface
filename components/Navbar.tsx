import Link from "next/link";
import React from "react";
import { FaVideo } from "react-icons/fa";
import Mobilenav from "./Mobilenav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1-gradient px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <FaVideo size={27} className="text-white max-sm:size-10" />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Vidface
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <Mobilenav></Mobilenav>
      </div>
    </nav>
  );
};

export default Navbar;
