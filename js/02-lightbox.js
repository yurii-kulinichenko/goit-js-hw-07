import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector('.gallery');
gallery.classList.add('gallery');

const galleryGrid = galleryItems.map((item) => {
   return `<a href='${item.original}' class='gallery__item'><img src='${item.preview}' class='gallery__image' alt='${item.description}' data-source='${item.original}' /></a>`;
}).join('');
gallery.insertAdjacentHTML('afterbegin', galleryGrid);

let galleryBox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionsDelay: 250});
galleryBox.on('show.simplelightbox', open);

