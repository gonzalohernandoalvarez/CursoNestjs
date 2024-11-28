import './style.css'

//import { name, age, templateString } from './bases/01-types'
//import {pokemonIds, Budenamor} from './bases/02-objects'
//import {charmander} from './bases/03-classes'
//import {charmander} from './bases/04-injection'
//import {charmander} from './bases/05-decorators'
import { charmander } from './bases/06-decorators2';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `

<h1>${charmander.name} ${charmander.id}</h1>
`

