import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.classList.add("gallery__item");

for (let i = 0; i < galleryItems.length; i++) {
  const img = document.createElement("img");
  gallery.append(img);
  img.classList.add("gallery__image");
  img.setAttribute("src", `${galleryItems[i].preview}`);
  img.setAttribute("alt", `${galleryItems[i].description}`);
  img.dataset.source = `${galleryItems[i].original}`;
}
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.value === "gallery__image") {
    const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="1280" height="960">
`);

    instance.show();
  }
});
