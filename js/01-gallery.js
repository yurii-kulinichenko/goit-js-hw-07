import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector('.gallery');
gallery.classList.add('gallery');

const galleryGrid = galleryItems.map((item) => {
   return `<div class='gallery__item'><a href='${item.original}' class='gallery__link'><img src='${item.preview}' class='gallery__image' alt='${item.description}' data-source='${item.original}' /></a></div>`;
}).join('');
gallery.insertAdjacentHTML('afterbegin', galleryGrid);

const handleImageClick = (event) => {
    event.preventDefault()
    if(event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`<img src='${event.target.dataset.source}' width='800' heigth='600'/>
 `)
  instance.show()
}
gallery.addEventListener('click', handleImageClick)

