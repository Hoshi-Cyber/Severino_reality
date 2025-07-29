export function renderCallToAction(data) {
  return `
    <section class="call-to-action">
      <a href="${data.url}" class="cta-btn">${data.label}</a>
    </section>`;
}
