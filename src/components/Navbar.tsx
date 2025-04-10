import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-[90%] mx-auto  pr-8  bg-transparent border-2 border-black/10 text-white rounded-lg flex items-center justify-between">
      <div className="text-zinc-800">
        <Image src={"/logo.png"} alt="logo-image" height={300} width={300} />
      </div>
      <div className="items-center gap-5 justify-evenly hidden md:flex">
        <Link href={"/"}>
          <h1 className="text-zinc-800 font-mono  text-xl">Home</h1>
        </Link>

        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Background Change</SelectItem>
              <SelectItem value="dark">Retouching Model</SelectItem>
              <SelectItem value="system">Ghost Editing</SelectItem>
              <SelectItem value="system">Color Correction</SelectItem>
              <SelectItem value="dark">Shadow Creation</SelectItem>
              <SelectItem value="system">Background cleaning</SelectItem>
              <SelectItem value="system">Product dusting</SelectItem>
            </SelectContent>
          </Select>
        </div>


        <Link href={'/about'}><h1 className="text-zinc-800 font-mono  text-xl">About</h1></Link>
        <Link href={'/contact'}><h1 className="text-zinc-800 font-mono  text-xl">Contact</h1></Link>
      </div>
    </div>
  );
};

export default Navbar;
