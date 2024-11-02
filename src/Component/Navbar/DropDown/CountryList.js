
export function CountryList(searchText,countries){
    let filteredVideo = countries.filter((e)=>{
        return e.country.toLowerCase().includes(searchText.toLowerCase());
    })
    return filteredVideo;
}