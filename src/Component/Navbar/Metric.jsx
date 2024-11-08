import { useEffect, useState,useRef } from "react";

function Option({ setUnit, setShow }) {
    let celcius = (e) => {
        setUnit(true);
        setShow(false);
    }
    let fahrenheit = (e) => {
        setUnit(false);
        setShow(false);
    }

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShow(false);
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on cleanup
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className=" z-20 h-[60px] w-[50px] bg-[#606060] text-center py-2 rounded-md font-poppins text-slate-200  absolute -bottom-[100%] ">
            <ul>
                <li onClick={celcius} className="hover:bg-[#737373]   cursor-pointer"> &deg;C</li>
                <li onClick={fahrenheit} className="hover:bg-[#737373] cursor-pointer">&deg;F</li>
            </ul>
        </div>
    );
}

export default function Metric({ setUnit, unit }) {

    let [show, setShow] = useState(false);

    useEffect(() => {
        console.log(unit);
        // setShow(!show);
    }, [unit]);

    return (
        <>
            <div className="  h-full w-10 relative flex justify-around items-center">
                <span onClick={() => setShow(true)} className="text-center mb-0 font-semibold">
                    {unit ? <span>&deg;C</span> : <span>&deg;F</span>}
                </span>
                <span onClick={() => setShow(true)}><i class="fa-solid fa-caret-down" style={{ color: "#ced4da", }}></i></span>

                {show && <Option setUnit={setUnit} setShow={setShow} />}
            </div>
        </>
    );
}

