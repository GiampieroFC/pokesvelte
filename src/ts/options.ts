

interface Pokemon {
    id:string,
    name:string,
    url: string
}

let url:string = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
let opt:object = {
    method: "GET",
    header: {
"Access-Control-Allow-Origin": "*"
    }
}
let options: Array<Pokemon> = []

let f: Response = await fetch(url, opt)
let p = await f.text()
let data:object = await JSON.parse(p)

await data["results"].forEach(element => {
    let pokemon: Pokemon = {
        id: element.url.split("/")[6],
        name: element.name,
        url: element.url
    };
    options.push(pokemon)
});

export {
    options
}