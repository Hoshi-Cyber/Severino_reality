export function renderHeroBanner(data) {
  return `
    <section class="hero-banner" style="background-image: url('${data.image}')">
      <div class="hero-content">
        <h1>${data.title}</h1>
        <p>${data.location}</p>
        <strong>${data.price}</strong>
      </div>
    </section>`;
}
