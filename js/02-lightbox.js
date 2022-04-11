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

  console.log(e.target.alt);
  const nextActivPicture = e.target.dataset.source;
  //   onOpenModal(nextActivPicture);
}

// function onOpenModal(nextActivPicture) {
//   window.addEventListener("keydown", onEscKeyPress);

//   const instance = basicLightbox.create(`
//     <div class="modal">
//         <img src=${nextActivPicture} width="1120" height="100%">
//     </div>
// `);

//   instance.show();
// }

// function onEscKeyPress(e) {
//   console.log(e.code);
//   if (e.code === "Escape") {
//     onCloseModal();
//   }
// }

// function onCloseModal() {
//   window.removeEventListener("keydown", onEscKeyPress);
//   // instance.close();
// }
