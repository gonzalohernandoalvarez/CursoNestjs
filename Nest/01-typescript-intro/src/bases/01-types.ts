

export let name = 'Gonzalo'; // Aunque no le pongas el tipo de datos que es Typescript lo infiere.
export const age: number = 35;
export const isValid: boolean = true;

name = ' Melissa';
//name = 15;


export const templateString = `Esto es un string 
multilinea que puede tener comillas dobles, comillas cimples oque se puedan inyectar valores  ${ name}
también se puede incorporar expresiones ${ 1+1 }
numero ${age}
`

