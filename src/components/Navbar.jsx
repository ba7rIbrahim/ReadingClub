import { Raleway  } from "next/font/google";
import Link from "next/link";
import React from "react";
import MegaMenu from "./MegaMenu";

const raleway = Raleway({
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <div className="container">
      <div className="flex items-center justify-between h-[60px]">
        <Link href="/" className={`${raleway.className} font-bold text-2xl text-main`}>
          READING CLUB
        </Link>
        <div>
          <MegaMenu />
        </div>
      </div>
    </div>
  );
}
