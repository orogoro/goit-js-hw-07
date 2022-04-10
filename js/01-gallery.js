import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const makeTransactionRole = makeGalleryPicture(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", makeTransactionRole);
// console.log(galleryItems);

galleryEl.addEventListener("click", onGallaryConteinerClick);

function makeGalleryPicture(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href= ${original}>
        <img
        class="gallery__image"
        src= ${preview}
        data-source= ${original}
        alt="${description}"
        />
    </a>
    </div>
    `;
    })
    .join("");
}

function onGallaryConteinerClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(e.target.dataset.source);
  //   const nextActivPicture = e.target;
}
