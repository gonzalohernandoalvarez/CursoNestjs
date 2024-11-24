import './style.css'

import { name, age, templateString } from './bases/01-types'
import {pokemonIds, Budenamor} from './bases/02-objects'
import {charmander} from './bases/03-classes'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
<h1>Hello ${name} ${age}</h1>
<p>${templateString}</p>
<p>${pokemonIds}!!!</p>
<p>${Budenamor.name}!!!</p>
<h1>${charmander.name}</h1>
`

