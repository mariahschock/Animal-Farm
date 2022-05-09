import { findById } from '../utils.js';
import { animals } from '../data.js';
//import { renderListItem } from '../render-utils.js';

const params = new URLSearchParams(window.location.search);



const animal = findById(params.get('id'), animals);

const animalName = document.getElementById('animal-name');
animalName.textContent = animal.name;

const animalImg = document.createElement('img');
animalImg.src = `../assets/${animal.type}.svg`;
//animalName.append(animalImg);

const animalSays = document.createElement('p');
animalSays.textContent = animal.says;
animalName.append(animalImg, animalSays);


