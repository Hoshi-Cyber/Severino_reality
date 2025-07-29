/**
 * Render a summary block of key property attributes.
 *
 * To aid scanability and support assistive technologies, this component
 * returns a description list (`<dl>`).  Properties such as bedrooms,
 * bathrooms, area, price, status and location are displayed if present.
 *
 * @param {Object} data
 * @returns {string}
 */
export function renderPropertyDetails(data) {
  const fields = [];
  if (data.location) fields.push({ label: 'Location', value: data.location });
  if (data.bedrooms) fields.push({ label: 'Bedrooms', value: data.bedrooms });
  if (data.bathrooms) fields.push({ label: 'Bathrooms', value: data.bathrooms });
  if (data.area) fields.push({ label: 'Area', value: data.area });
  if (data.price) fields.push({ label: data.status && data.status.toLowerCase().includes('rent') ? 'Rent' : 'Price', value: data.price });
  if (data.status) fields.push({ label: 'Status', value: data.status });
  return `
    <section class="property-details">
      <dl>
        ${fields.map(item => `<div class="property-detail-item"><dt>${item.label}</dt><dd>${item.value}</dd></div>`).join('')}
      </dl>
    </section>
  `;
}
