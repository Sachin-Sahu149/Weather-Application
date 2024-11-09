


export default function ExpandButton({position,visible,value}){

    let setValue = ()=>{
        console.log(value + " = click hourly");
        visible(!value)
    }
    return(
        <button onClick={setValue} className={` p-1 vs:p-2 bg-[#575757] rounded hover:bg-[#676767] ${position}`}>{value?"Close":"Expand"}</button>
    );
}