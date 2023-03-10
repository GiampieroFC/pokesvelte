

interface Pokemon {
    id:string,
    name:string
}

let url:string = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
let opt:object = {
    method: "GET",
    header: {
"Access-Control-Allow-Origin": "*"
    }
}

async function getOpts(url:string, opt:object) : Promise<Pokemon[]> {
    let options: Array<Pokemon> = []
    
    let f: Response = await fetch(url, opt)
    let p = await f.text()
    let data:object = await JSON.parse(p)
    
    await data["results"].forEach(element => {
        let pokemon: Pokemon = {
            id: element.url.split("/")[6],
            name: element.name
        };
        options.push(pokemon)
    });
    return options
}

let options = getOpts(url, opt)

export {
    options
}