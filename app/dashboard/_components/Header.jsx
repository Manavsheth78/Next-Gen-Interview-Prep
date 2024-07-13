import React from "react";
import Image from "next/Image";
import { UserButton } from "@clerk/nextjs";
function Header() {
  return (
    <div className="flex p-4">
      <Image src={"/logo.svg"} width={160} height={100} alt="logo"></Image>
      <ul className="flex gap-6 items-center">
        <li>Dashboard</li>
        <li>Questions</li>
        <li>How it works?</li>
      </ul>
      <UserButton></UserButton>
    </div>
  );
}

export default Header;
