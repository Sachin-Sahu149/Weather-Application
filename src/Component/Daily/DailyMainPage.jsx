import DailyFormat from "./DailyFormat";


export default function DailyMainPage() {

    return (
        <div className='flex flex-col justify-around items-center w-[700px] h-[350px] relative p-2 mb-6 bg-green-300 font-poppins font-semibold text-slate-500'>

            <div className="bg-slate-300 self-start text-2xl">
                <span>Next 5 days forecast</span>
            </div>
            <div className="flex justify-center items-center w-full overflow-x-scroll">
                <DailyFormat marginRight={3} />
                <DailyFormat marginRight={3} />
                <DailyFormat marginRight={3} />
                <DailyFormat marginRight={3} />
                <DailyFormat marginRight={3} />
                <DailyFormat marginRight={3} />
                <DailyFormat marginRight={3} />
                <DailyFormat marginRight={3} />
                <DailyFormat marginRight={3} />
                <DailyFormat marginRight={3} />
                <DailyFormat />
            </div>

        </div>
    );
}