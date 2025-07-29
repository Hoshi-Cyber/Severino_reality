/**
 * Render an accessible accordion for frequently asked questions.
 *
 * Each FAQ item is composed of a button and a panel.  The panel is initially
 * hidden via the `hidden` attribute.  When the button is clicked the panel
 * visibility can be toggled by the main script.  An `aria-controls` and
 * matching `id` pair are used to relate the button and panel for screen
 * readers.
 *
 * @param {Array} faqs
 * @returns {string}
 */
export function renderFAQAccordion(faqs = []) {
  if (!Array.isArray(faqs) || !faqs.length) {
    return '';
  }
  return `
    <section class="faq-accordion">
      ${faqs.map((faq, index) => `
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false" aria-controls="faq-panel-${index}">${faq.q}</button>
          <div class="faq-answer" id="faq-panel-${index}" hidden>
            <p>${faq.a}</p>
          </div>
        </div>
      `).join('')}
    </section>
  `;
}
