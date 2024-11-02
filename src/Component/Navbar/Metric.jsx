import { useEffect, useState } from "react";

function Option({ setUnit ,setShow}) {
    let celcius = (e) => {
        setUnit("metric");
        setShow(false);
    }
    let fahrenheit = (e) => {
        setUnit("imperial");
        setShow(false);
    }
    return (
        <div className="h-[60px] w-[50px] bg-gray-200 text-center py-2 rounded-md absolute -bottom-[100%]">
            <ul>
                <li onClick={celcius} className="hover:bg-gray-300 font-poppins text-gray-600 cursor-pointer"> &deg;C</li>
                <li onClick={fahrenheit} className="hover:bg-gray-300 font-poppins text-gray-600 cursor-pointer">&deg;F</li>
            </ul>
        </div>
    );
}

export default function Metric() {
    let [unit, setUnit] = useState("metric");
    let [show, setShow] = useState(false);

    let handleUnit = () => {
        if (unit === "metric") {
            setUnit("imperial");
        } else {
            setUnit("metric");
        }
    }

    useEffect(() => {
        console.log(unit);
        // setShow(!show);
    }, [unit]);

    return (
        <>

            <div className="h-full w-10 bg-green-500 relative flex justify-center items-center">
                <span onClick={() => setShow(true)} className="text-center">
                    {unit === "metric"?<span>&deg;C</span>: <span>&deg;F</span>}
                </span>

                    {show && <Option setUnit={setUnit} setShow={setShow}/>}
            </div>
        </>
    );
}