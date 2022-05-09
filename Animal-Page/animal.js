import { findByID } from '../utils.js';
import { animals } from '../data.js';

const params = new URLSearchParams(window.location.search);

const animal = findByID(params.get('id'), animals);

const animalImg = document.getElementById('animal-img');
animalImg.textContent = animal.img;

