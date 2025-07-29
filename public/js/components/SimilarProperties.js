/**
 * Render a grid of similar properties.  Each item may include an image,
 * title, price and a link to its page.  The component is robust against
 * missing fields and uses accessible markup.
 *
 * @param {Array} properties
 * @returns {string}
 */
export function renderSimilarProperties(properties = []) {
  if (!Array.isArray(properties) || !properties.length) {
    return '';
  }
  return `
    <section class="similar-properties">
      <div class="similar-list">
        ${properties.map(p => `
          <div class="similar-card">
            ${p.image ? `<img src="${p.image}" alt="${p.title}" loading="lazy" />` : ''}
            <div class="similar-card-content">
              <h4 class="similar-card-title"><a href="${p.link || '#'}">${p.title || ''}</a></h4>
              ${p.price ? `<p class="price">${p.price}</p>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}
