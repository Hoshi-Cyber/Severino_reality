/**
 * Render a prominent call-to-action section.  This component accepts an
 * object with `label` and `url` fields.  It outputs a button-styled
 * anchor that users can click or tap to perform an action (e.g. chat on
 * WhatsApp).  Screen reader friendly text is provided via the button label.
 *
 * @param {Object} data
 * @returns {string}
 */
export function renderCallToAction(data = {}) {
  const label = data.label || 'Enquire';
  const url = data.url || '#';
  return `
    <section class="call-to-action">
      <a href="${url}" class="cta-btn" role="button">${label}</a>
    </section>
  `;
}
