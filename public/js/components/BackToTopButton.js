/**
 * Render a floating button that scrolls the document back to the top.
 *
 * The returned markup uses a class but not an id to avoid duplicated
 * identifiers in the DOM.  Event listeners are attached in main.js.
 *
 * @returns {string}
 */
export function renderBackToTopButton() {
  return `<button class="back-to-top" aria-label="Back to top">↑ Top</button>`;
}
