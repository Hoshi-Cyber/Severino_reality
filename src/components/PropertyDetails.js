export function renderPropertyDetails(data) {
  return `
    <section class="property-details">
      <ul>
        <li>Bedrooms: ${data.bedrooms}</li>
        <li>Bathrooms: ${data.bathrooms}</li>
        <li>Area: ${data.area}</li>
        <li>Status: ${data.status}</li>
      </ul>
    </section>`;
}
