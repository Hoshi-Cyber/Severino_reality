export function renderBreadcrumb(trail) {
  return `<nav class="breadcrumb">${trail.map((t, i) =>
    `<a href="${t.url}">${t.label}</a>${i < trail.length - 1 ? " > " : ""}`).join("")}</nav>`;
}
