export function renderAmenitiesList(amenities) {
  return `
    <section class="amenities">
      <ul>
        ${amenities.map(item => `<li>${item.label}</li>`).join('')}
      </ul>
    </section>`;
}
