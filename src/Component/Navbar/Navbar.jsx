import { useEffect, useState } from "react";
import { AppIcon } from "../../assets";
import { WorldIcon } from "../../assets";
import AppName from "./AppName";
import MenuTag from "./MenuTag";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";


export default function Navbar({setCountry,setSearchCity,setUnit,unit}) {

  return (
    <div id="NavbarId" className='w-full bg-[#646567]  vs:px-2 xs:px-3 md:px-20 flex justify-center items-center justify-between text-gray-300'>
      <AppName />
      <SearchBar setSearchCity={setSearchCity} display="hidden sm:flex w-[400px] h-[40px] " inputAppearance="rounded-full" buttonAppearance="px-4 py-2 rounded-full" />
      <MenuTag setCountry={setCountry} unit={unit} setUnit={setUnit} />
    </div>
  );
}

