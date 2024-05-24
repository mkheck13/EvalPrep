import { IEvoultions } from "./DataService";


export default async function APICall(pokemon:string | number) {
    let data
    if(typeof pokemon === 'string'){
        pokemon = pokemon.toLocaleLowerCase()
    }
    data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const promise = await data.json()
    return promise;
}

export async function LocationCall(url:string) {
    const locationData: [{location_area:{name:string, url:string}}] =
    await (await fetch(url)).json()
    return locationData[0] ? locationData[0].location_area.name: "N/A";
}

export async function FetchEvos(url:string) {
    console.log("Fetching Evolutions")
    
    
}