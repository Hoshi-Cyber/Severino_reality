export function renderAmenitiesList(amenities) {
  return `
    <section class="amenities">
      <ul>
        ${amenities.map(item => `<li><i class="${item.icon}"></i> ${item.label}</li>`).join("")}
      </ul>
    </section>`;
}
