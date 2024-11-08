

export default function Converter(temp){
    let cal = (temp*9/5)+32;

    let str = String(cal)
    let ans = str
    if(str.length>6){
        ans = str.slice(0,5);
    }
    return parseFloat(ans);
}