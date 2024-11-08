import ExpandedCard from "./ExpandedCard";


export default function ExpandedHourly({hourlyWeatherData,unit}) {
    let index = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    return (
        <div className="mb-6 p-2  h-[600px]  w-full sm:w-[700px] rounded-lg p-2 mb-6 bg-[#646567] font-poppins text-[14px] ss:text-[17px] leading-6 xs:font-normal text-slate-600  overflow-scroll">
            

            
           {
                index.map(ind=>
                    <ExpandedCard key={ind} hourlyWeatherData={hourlyWeatherData} unit={unit} index={ind}/>
                )
           }
            
        </div>
    );
}
