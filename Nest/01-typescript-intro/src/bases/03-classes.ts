import axios from 'axios';
import { Move, PokeapiResponseInterfaceTs } from '../interfaces/pokeapi-response.interface';
// Estructura normla de crear una clase
//export class Pokemon {
//
//    public id: number;
//    public name: string;
//
//    constructor(id:number, name: string){
//        this.id = id;
//        this.name = name
//    }
//}

// Fomra corta de crear una clase
export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    constructor(
        private readonly id:number, // privados solo se pueden llamar desde la misma clase
        public name: string,
        // public imageUrl: string
    ){}

    public scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
        this.speak2()
    }

    public speak(){
        console.log(`${this.name}`)
    }

    private speak2(){
        console.log(`${this.id}`)
    } // los privados solo se pueden llamar desde dentro de la clase, si quieres llamarlo desde fuera tiene que ser public

    async getMoves():Promise<Move[]>{

        const {data} = await axios.get<PokeapiResponseInterfaceTs>('https://pokeapi.co/api/v2/pokemon/4')
        console.log(data.moves);
        return data.moves;
        
    } 
}// método asincrono

export const charmander = new Pokemon(1, 'charmander')

//charmander.scream();
//charmander.speak();

charmander.getMoves();

