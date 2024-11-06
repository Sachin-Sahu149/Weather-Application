import { AppIcon } from "../../assets";
import { WorldIcon } from "../../assets";
import AppName from "./AppName";
import MenuTag from "./MenuTag";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
export default function Navbar(){

    return (
        <div className='w-full bg-orange-300 h-[75px]  vs:px-2 xs:px-3 md:px-20 flex justify-center items-center justify-between '>
        <AppName/>
        <SearchBar display="hidden sm:flex w-[400px] h-[40px] " inputAppearance = "rounded-full" buttonAppearance = "px-4 py-2 rounded-full" />
        <MenuTag/>
      </div>
    );
}

