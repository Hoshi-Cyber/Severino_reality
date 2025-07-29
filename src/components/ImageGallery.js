export function renderImageGallery(images) {
  return `
    <section class="image-gallery">
      ${images.map(img => `<figure><img src="${img.url}" alt="${img.caption}" /><figcaption>${img.caption}</figcaption></figure>`).join("")}
    </section>`;
}
