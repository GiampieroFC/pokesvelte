
class Pokemon {

    protected readonly id: number;
    protected readonly name: string;
    protected readonly type: Array<string>;
    protected readonly height: number;
    protected readonly weight: number;
    protected readonly abilities: Array<string>;
    protected readonly sprites: Array<string>;
    
    constructor(data:object) {
        this.id = data["id"]
        this.name = data["name"]
        this.type = this.scanType(data["types"])
        this.height = data["height"]
        this.weight = data["weight"]
        this.abilities = this.scanAbilities(data["abilities"])
        this.sprites = this.scanSprites(data["sprites"])
    }

    protected scanType(types : Array<object>) : Array<string> {
        let type : Array<string> = [];
        types.forEach(element => {
            type.push(element["type"]["name"])
        });
        return type
    }

    protected scanAbilities (abilities : Array<object>) : Array<string> {
        let ability : Array<string> = []
        abilities.forEach(element => {
            ability.push(element["ability"]["name"])
        });
        return ability
    }

    protected scanSprites(sprites : object):Array<string>{
        let pics : Array<string> = []
        if (sprites["other"]["official-artwork"]["front_default"]) {
            pics.push(sprites["other"]["official-artwork"]["front_default"])
        }
        if (sprites["other"]["dream_world"]["front_default"]) {
            pics.push(sprites["other"]["dream_world"]["front_default"])
        }
        if (sprites["other"]["home"]["front_default"]) {
            pics.push(sprites["other"]["home"]["front_default"])
        }
        return pics
    }
}

async function fetching(id:string) : Promise<string | Pokemon> {
    if (!id) {
        return "fail"
    }
    let url:string = `https://pokeapi.co/api/v2/pokemon/${id}`
    let opt:object = {
        method: "GET",
        headers: {
    "Access-Control-Allow-Origin": "*"
        }
    }    
    let f: Response = await fetch(url, opt)
    
    if (f.ok) {
        let p = await f.text()
        let data:object = await JSON.parse(p)
        let pokemon:Pokemon = new Pokemon(data)
        return pokemon
    } else {
        return "fail";
        
    }
}

export {
    fetching
}