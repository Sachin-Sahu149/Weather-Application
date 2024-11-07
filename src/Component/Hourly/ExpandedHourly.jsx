import { weatherCode } from "../../Content/WeatherCode";
import ExpandedCard from "./ExpandedCard";


export default function ExpandedHourly() {

    return (
        <div className="mb-6 p-2  h-[600px]  w-full sm:w-[700px] rounded-lg p-2 mb-6 bg-green-300 font-poppins text-[14px] ss:text-[17px] leading-6 xs:font-normal text-slate-600 bg-[#ffb3c6] overflow-scroll">

            {/* This is for 1060 px */}
        
            <div className="text-[10px] leading-[15px] xs:text-[16px] xs:leading-[22px] ss:text-[18px] ss:leading-[28px]">
                <p className="p-1 text-left ">This is for 275px </p>
                <div className="w-[475px] xs:w-[750px] ss:w-[900px] bg-blue-200 grid grid-cols-8 grid-rows-1 grid-flow-col gap-x-1">

                    <div key={0} className="bg-[#9d8189]  text-[1.4rem] xs:text-[2] flex justify-center items-center "><span>31&deg;C</span></div>
                    <div key={1} className="bg-[#9d8189] flex justify-center items-center">
                        <img src={weatherCode[2000].icon} className="w-[35px] xs:w-[50px]"  alt="Weather Icon" />
                    </div>
                    <div key={2} className="bg-[#9d8189] text-center flex justify-center items-center col-span-2">{weatherCode[2000].text} test  codeand temp re rows</div>
                    <div key={3} className="bg-[#9d8189] text-center flex flex-col justify-center items-center">
                        <span>Feels Like</span>
                        <span>29&deg;C</span>
                    </div>
                    <div key={4} className="bg-[#9d8189] text-center flex flex-col justify-center items-center">
                        <span>Humidity</span>
                        <span>78%</span>
                    </div>
                    <div key={5} className="bg-[#9d8189] text-center flex flex-col justify-center items-center">
                        <span>Dew Point</span>
                        <span>64%</span>
                    </div>
                    <div key={6} className="bg-[#9d8189] text-center flex flex-col justify-center items-center mr-2">
                        <span>Wind Speed</span>
                        <span>4.3 km/h</span>
                    </div>
                </div>
            </div>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
            <ExpandedCard/>
        </div>
    );
}