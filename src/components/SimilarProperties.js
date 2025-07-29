export function renderSimilarProperties(properties) {
  return `
    <section class="similar-properties">
      ${properties.map(p => `
        <article>
          <img src="${p.image}" alt="${p.title}" />
          <h4><a href="${p.link}">${p.title}</a></h4>
        </article>`).join("")}
    </section>`;
}
