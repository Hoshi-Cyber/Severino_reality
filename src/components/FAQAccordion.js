export function renderFAQAccordion(faqs) {
  return `
    <section class="faq-accordion">
      ${faqs.map((faq, index) => `
        <div class="faq-item">
          <button aria-expanded="false">${faq.q}</button>
          <div class="faq-answer" id="faq${index}">${faq.a}</div>
        </div>
      `).join("")}
    </section>`;
}
