import { AppIcon } from "../../assets";
import { WorldIcon } from "../../assets";
import AppName from "./AppName";
import MenuTag from "./MenuTag";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
export default function Navbar(){

    return (
        <div className='w-full bg-orange-300 h-[75px] flex justify-center items-center justify-between '>
        <AppName/>
        <SearchBar/>
        <MenuTag/>
      </div>
    );
}

