import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const makeTransactionRole = makeGalleryPicture(galleryItems);

galleryEl.innerHTML = makeTransactionRole;

galleryEl.addEventListener("click", onGallaryConteinerClick);

function makeGalleryPicture(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href=${original}>
  <img class="gallery__image" src= ${preview} alt="${description}" />
    </a>
    `;
    })
    .join("");
}

function onGallaryConteinerClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    animationSpeed: 250,
  });
}
