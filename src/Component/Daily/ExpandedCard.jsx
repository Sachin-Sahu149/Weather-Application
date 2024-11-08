import DailyFormat from "./DailyFormat";

export default function ExpandedCard({forecastData,unit}) {
    let timeSizeStyle  = " ts:text-[11px] xs:text-[17px] sm:text-[20px]";
    let IconWidthStyle = " w-[28px] xs:w-[50px]";
    let daySizeStyle = "ts:text-[10px] xs:text-[12px] sm:text-[16px] sm:leading-[27px] leading-[18px]";  
    let containerStyleInfo=" h-[100px] xs:h-[160px] xs:p-2 sm:h-[200px] sm:w-[150px] sm:p-3 ts:rounded-xl bg-[#7F7F7F] ";
    return (
        <div className=" h-full w-full grid grid-cols-4 grid-rows-4 grid-flow-col gap-2 ">

            {
                forecastData.daily.time.map((val, ind)=>(

                    <DailyFormat key={ind} unit={unit} index={ind} forecastData={forecastData} tempSize={timeSizeStyle} iconWidth={IconWidthStyle} daySize={daySizeStyle} containerStyle={containerStyleInfo} />
                ))
            }
        </div>
    );
}