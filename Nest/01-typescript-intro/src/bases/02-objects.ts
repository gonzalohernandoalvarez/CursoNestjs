
export const pokemonIds = [1,20,30,34,55];

pokemonIds.push(+'4'); // el + delante lo que hace es cambiarlo a un numero



interface Pokemon {
    id: number;
    name: string;
    age?: number; // la interrogacion indica que puede ser que esté o no esté en el objeto
}


export const Budenamor:Pokemon = {
    id: 1,
    name: 'Budenamor'
};

//export const pokemons =  []; // esto será siempre un arreglo vacío
export const pokemons: Pokemon[] =  []; // Aquí indicas que será un arreglo de tipo Pokemon y solo aceptará esto.

pokemons.push(Budenamor)

console.log(pokemons)
